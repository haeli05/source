// const Issues =require('../models/issue.js').Issues;
// const Repo = require('../models/repo.js');
// const User = require('../models/user.js').User;
// const IssueBlob = require('../models/blob').IssueBlob;
// import User from '../models/user';

const mongoose = require('mongoose');
const config = require('../config');
import {userActionEOS, checkAccountEOS} from '../util/eos.util';


const stats = {
  newIssue : 100,
  newBlob : 60,
  upvoteIssue: 70,
  downvoteIssue: -70,
  upvoteBlob: 15,
  downvoteBlob: -15
}

/**
* Query server for batches of issues for a given project. Default to 50 ideas at a time, need to specify last idea seen for PAGINATION
* can include filteration by tag
* @param limit - # of ideas to returns
* @param last - mongoose id of last idea displayed on the page
* @param tag - (optional) tag to filter by
* @param repoID - the project Mongoose ID we want to get issues for
* @returns void
*/
export function getAll(repoID, limit, last, tag){
  return new Promise((resolve, reject) => {
    if (repoID == undefined || repoID == null) {reject('Project ID not specified')}
    if (!mongoose.Types.ObjectId.isValid(repoID)) {reject('Invalid Project ID')}
    let query= {}
    query.repoID = repoID;
    if (tag != null) {query.tags = tag};
    if (mongoose.Types.ObjectId.isValid(last)) {query._id = {$lt: last}};
    Issues
    .find(query)
    .sort({date: -1})
    .limit(limit)
    .populate([
      {path : 'assigner', select:'_id name username avatar'},
      {path : 'assignee', select:'_id name username avatar'},
      {path : 'creator', select:'_id name username avatar'}
    ])
    .then(data => {
      if (data == null) {
        reject('No issues found');
      }
      else {
        resolve(data);
      }
    })
    .catch(err => {
      reject(['Mongoose',err]);
    });
  })
}

/**
* Votes ( up, down) an issue
* @param {String}   which - issue / blob
* @param {String}   up - 1 / 0
* @param {ObjectID} id - Mongoose ID of the idea
* @param {ObjectID} user - Mongoose ID of the user voting
* @returns {JSON} voted project
*/
export async function vote(which, up, id, user) {
  if (up == undefined || id ==undefined) {throw 'Missing some request parameters'}
  let obj = {};
  if (which === 'issue') {
    const vote = (up === '1') ? stats.upvoteIssue : stats.downvoteIssue;
    obj = await Issues.vote(user, id, up, 'issues').catch(err => {throw err});
    await Issues.addStats(id, vote).catch(err => {throw err});
  }
  else {
    const vote = (up === '1') ? stats.upvoteBlob : stats.downvoteBlob;
    obj = await IssueBlob.vote(user, id, up, 'issueBlob').catch(err => {throw err});
    await Issues.addStats(id, vote).catch(err => {throw err});
  }
  return obj;
}


/**
* Get a single issue + blobs based on its mongoose id
* @param id - mongoose id of the issue
* @returns void
*/
export function getIssue(id){
  return new Promise((resolve, reject) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {reject('Specified issue ID is invalid')}

    Issues
    .findById(id)
    .populate([
        {path : 'blobs', select: '_id user date body edited'},
        {path : 'creator', select:'_id name username avatar'}
      ])
    .then(data=>{
      if(data ==null) {
        reject('Idea does not exist');
      }
      else {
        resolve(data);
      }
    })
    .catch(err => {
      console.log(err);
      reject(err);
    })
  })
}


/**
* Create a new issue for a given repository
* @param {JSON} info - {title, creator, body, stringBody, bounty, status, EOSUsername, repoID, tags}
* @returns void
*/
export async function newIssue(info) {
  const datum = ['title', 'creator', 'repoID']; // 'EOSUsername', <- I removed this temporarily because the user object doesn't include it
  for(let i = 0; i <datum.length; i++) {
    if (info[datum[i]] == undefined) {return Promise.reject(datum[i] + ' not specified')}
  }
  console.log("repoID",info.repoID);
  if(!mongoose.Types.ObjectId.isValid(info.repoID)) {return Promise.reject('Specified project ID is invalid')}
  // await checkRepo(info.repoID).catch(err => {return Promise.reject(err);});  //NOTE: For EOS integration
  let admin_arr = await getAdmins(info.repoID)
    .catch(err=>{
      return Promise.reject(err);
     });
  let blob = {
    user: info.creator,
    body: info.body,
  }

  info.admins=admin_arr.concat([new mongoose.mongo.ObjectId(info.creator)]);
  let firstBlob = await new IssueBlob(blob).save()
                .catch(err => {return Promise.reject(['Mongoose', err])});
  delete info.body;
  info.blobs = firstBlob._id;
  const text = info.stringBody;
  delete info.stringBody;
  let newIssue = await new Issues(info).save()
                .catch(err => {return Promise.reject(['Mongoose', err])});

  Promise.all([Issues.updateText(newIssue._id, text), Issues.addStats(newIssue._id, stats.newIssue)])
          .catch(err => {throw err});

  return {newIssue, firstBlob};

  // const user = await User.findById(info.creator)  //NOTE: for EOS integration
  //               .select('+privateKey')
  //               .catch(err => {return Promise.reject(['Mongoose', err])});
  // const txInput = {
  //   privateKey : user.privateKey,
  //   actor : user.EOSUsername,
  //   recipient : req.body.recipient || "",
  //   action : 6,
  //   cid : req.body.cid
  // }
  // const tx = await userActionEOS(data)
  //               .catch(err => {return Promise.reject(['EOS', err])});
}



/**
* Delete a BLOB (comment). Cannot delete the first blob, as that is the issue's body
* @param id - mongoose ID of the blob
* @param issueID - mongoose issue ID
* @param userID - mongoose id of the user making the delete
* @returns void
*/
export async function deleteBlob(id, issueID, userID) {
    if (id == undefined) {return Promise.reject('Blob ID to delete not provided')}
    if (userID == undefined) {return Promise.reject('User not provided')}
    if (issueID == undefined) {return Promise.reject('issueID not provided')}
    if(!mongoose.Types.ObjectId.isValid(id)) {return Promise.reject('Specified blob ID is invalid')}
    if(!mongoose.Types.ObjectId.isValid(issueID)) {return Promise.reject('Specified issue ID is invalid')}
    if(!mongoose.Types.ObjectId.isValid(userID)) {return Promise.reject('Specified user ID is invalid')}

    const issue = await Issues.findById(issueID)
                  .catch(err => {return Promise.reject(err)});
    if (issue.blobs[0] == id) {return Promise.reject('Cannot remove issue body (first blob)');}
    const checkUser = await IssueBlob.findById(id).catch(err => {return Promise.reject(err)});
    if (checkUser.user._id != userID) {return Promise.reject('Cannot remove comment you did not create')}
    const i = issue.blobs.indexOf(id);
    if  (i > 0) {
      console.log(issue.blobs[i]);
      issue.blobs[i] = null;
      issue.markModified(`blobs.${i}`);
      issue.save().catch(err => {return Promise.reject(err)});
      return Promise.resolve('Comment deleted');
    }
    else {
      return Promise.reject('Comment not found');
    }
}


export async function newBlob(issueID, user, body, stringBody) {
  if(!mongoose.Types.ObjectId.isValid(issueID)) {return Promise.reject('Specified issue ID is invalid')}
  if (user == undefined) {return Promise.reject('User not provided (are you logged in?)')}
  if (body == undefined) {return Promise.reject('Comment must include a body')}

  let i = await Issues.findById(issueID).catch(err => {return Promise.reject(err)});
  if (i.closed == true) {return Promise.reject('Cannot comment on closed issue')}
  if (i == null) {return Promise.reject('Issue does not exist')}

  let blob = await new IssueBlob({
    issueID: issueID,
    user: user,
    body: body
  })
  .save()
    .catch(err => {return Promise.reject(['Mongoose', err])});

  let update = {$push: {blobs:blob._id}};

  let [issue, stat] = await Promise.all([
    Issues.updateText(issueID, stringBody, update),
    Issues.addStats(issueID, stats.newBlob)
  ])
    .catch(err => {return Promise.reject(['Mongoose', err])});
  return blob;
}


export async function editIssue(user, issueID, edits, stringBody) {
  if(!mongoose.Types.ObjectId.isValid(issueID)) {return Promise.reject('Specified issue ID is invalid')}
  let issue = await Issues.findById(issueID).catch(err => {return Promise.reject(['Mongoose', err])});
  if (issue == null) {return Promise.reject('Issue not found')}
  if(issue.creator != user) {return Promise.reject('Cannot edit an issue you haven\'t created')}
  if (edits.body) {
    let firstBlobID = issue.blobs[0];
    const blob = await IssueBlob.findById(firstBlobID).catch(err => {return Promise.reject(err)});
    if (blob == null) {return Promise.reject('Issue blob not found')}
    blob.body = edits.body;
    blob.edited = true;
    blob.save().catch(err => {return Promise.reject(err)});
    delete edits.body;
  }
  let edited = await Issues.updateText(issueID, stringBody, edits)
      .catch(err => {return Promise.reject(err)});
  return edited;
}



export async function editBlob(user, blobID, edits, stringBody) {
  if (edits.body == undefined) {return Promise.reject('Did not provide anything to update')}
  if(!mongoose.Types.ObjectId.isValid(blobID)) {return Promise.reject('Specified blob ID is invalid')}
  const blob = await IssueBlob.findById(blobID).catch(err => {return Promise.reject(err)});
  if (blob == null) {return Promise.reject('Blob not found')}
  if(blob.user._id != user) {return Promise.reject('Cannot edit a comment you haven\'t created')}
  edits.edited = true;
  const [edited, issu] = await Promise.all([
    IssueBlob.findByIdAndUpdate(blobID, edits, {new: true}),
    Issues.updateText(blob.issueID, stringBody, {$push: {_search : stringBody}})
  ])
              .catch(err => {return Promise.reject(err)});
  return edited;
}

/**
* Function checks existance of a given project on MongoDB, Gitlab, and EOS
* @param id - Mongoose ID of the project
* @returns {Promise} - resolve/ reject
**/
function checkRepo(id){
  return new Promise((resolve,reject)=>{
    return checkDB(id)
    .then((repo) => {return checkGL(repo)})
    .then((repo) => { return checkAccountEOS(repo.cid)})
    .then(() => {resolve("good to go")})
    .catch(err => {reject(['Failed CheckRepo',err])});
  });
}

function checkDB(id){
  return new Promise((resolve,reject)=>{
    return Repo.findById(id)
    .then(repo=>{
      if(repo) {resolve(repo);}
      else {reject("Project does not exist on database");}
    });
  });
}


function checkGL(repo){
  return new Promise((resolve, reject) => {
    gitlab.getRepo(repo.repoID)
      .then(result => {
        resolve(repo);
      })
      .catch(err => {
        reject(['Project does not exist on Gitlab', err]);
      })
  })
}

export async function close(issueID,user){

  let update = { $set: { closed:true } };

  let issue = await Issues.findOneAndUpdate({ _id:issueID, admins:{ $in: [ new mongoose.mongo.ObjectId(user)] } },update)
    .catch( err=>{
      console.log(`Error Finding Issue: ${issueID}`);
      return Promise.reject("Error Finding Issue");
     });

  return Promise.resolve({ message: "Issue Closed", issue });
}

export function createMergeRequest(){

}

export function findUser(id){
  //User.find()
}

export async function getAdmins(repoID){
  console.log("EHHEH",repoID, new mongoose.mongo.ObjectId(repoID));
  let admins = await Repo.findById(new mongoose.mongo.ObjectId(repoID))
    .catch( err => {
      console.log(`Error getting Admins for Repo: ${repoID}`);
      return Promise.reject(`Error getting Admins`);
    });
  console.log("ADMINS FOUND",admins);
  return admins.admins;
}

//NOTE: Test newIssue
// const xxx = {
//     title: 'pizato',
//     creator: '5b968141de64871a8ae95dac',
//     bounty: 10,   //TODO: this needs to be redone to verify bounty on EOS
//     status: "unresolved",
//     EOSUsername: 'sirloso', // NO
//     repoID: '5b9681bfde64871a8ae95db1',
//     tags: ['pasta'],
//     body: 'hihihihihihihihihihihihi',
//     stringBody: 'hihihihih yo'
// }
//
// newIssue(xxx)
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});


//NOTE: test newBlob
// newBlob('5ba1ab88a3d0833ee1b23587','5b968141de64871a8ae95dac','xxxxxxx','i like turtles')
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});

//NOTE test editIssue
// const edits = {
//   title: 'kaki',
//   body: '000000001',
//   closed: false,
// }
// editIssue('5b968141de64871a8ae95dac', '5ba1ab88a3d0833ee1b23587', edits, 'pipi batahat')
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});

//NOTE test editBlob
// const edits = {
//   body: 'laaaaaaa'
// }
// editBlob('5b968141de64871a8ae95dac', '5ba1ab62d43f503edb3f6aee', edits, 'leeeeeeeeeee')
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});
