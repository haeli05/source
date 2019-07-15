//import sanitize from 'sanitizeHtml';
import axios from 'axios';
import Repo from '../models/project';
import User from '../models/user';

import {config} from '../config';
import {newRepoEOS, setRepoEOS, userActionEOS, makecid, checkAccountEOS,to64, checkRepoEOS, getBalanceEOS} from '../util/eos.util';
import ecc from 'eosjs-ecc';
import * as gitlab from '../util/gitlab.controller';
//import * as chat from '../util/chat.util.js'
import mongoose from 'mongoose';

let url = 'http://ec2-34-229-131-135.compute-1.amazonaws.com/api/v4'
let authorize = '?private_token='+config.gitlabToken;

const populateRepo = [{path : 'creator', select:'_id name username avatar'}, {path: 'idea'}];

const stats = {
  upvote: 80,
  downvote: -80
}

/**
*
* @param {String} user
* @param {String} project
* @returns {Boolean} true if user owns the project, false otherwise
*/
export async function verify(user, project) {
  let found = false;
  if (!mongoose.Types.ObjectId.isValid(user))  {throw ('Invalid Mongoose User ID')}
  if (!mongoose.Types.ObjectId.isValid(project))  {throw ('Invalid Mongoose project ID')}
  const proj = await Repo.findById(project).catch(err => {throw err});
  if (proj.creator.toString() === user) {found =  true}
  console.log("creator ", proj.creator, "\nuser ", user)

  return found;
}

/**
* Votes ( up, down) on a project
* @param {String}   up - 1 / 0
* @param {ObjectID} id - Mongoose ID of the project
* @param {ObjectID} user - Mongoose ID of the user voting
* @returns {JSON} voted project
*/
export async function vote(up, id, user) {
  if (up == undefined || id ==undefined) {throw 'Missing some request parameters'}
  const vote = (up === '1') ? stats.upvote : stats.downvote;
  let obj = {};
  obj = await Repo.vote(user, id, up,'repo').catch(err => {throw err});

  await Repo.addStats(id, vote).catch(err => {throw err});
  return obj;
}


export async function addIdea(projectID, ideaID, userID) {
  if (!mongoose.Types.ObjectId.isValid(projectID)) {return Promise.reject('Project ID is invalid')}
  if (!mongoose.Types.ObjectId.isValid(ideaID)) {return Promise.reject('Idea ID is invalid')}
  if (!mongoose.Types.ObjectId.isValid(userID)) {return Promise.reject('User ID is invalid')}

  let [repo, idea] = await Promise.all([
     Repo.findById(projectID),
     Ideas.findById(ideaID)
  ]).catch(err => {throw err});
  if (repo == null) {throw 'Project  doesn\'t exist'}
  if (idea == null) {throw 'Idea  doesn\'t exist'}
  if (repo.creator != userID) { throw 'You don\'t own this repo'}
  const newRepo = await Repo.findByIdAndUpdate(projectID, {$push: {idea: ideaID}}, {new: true})
        .populate('idea')
        .catch(err => {throw err});
  return newRepo;
}

/**
* gets a single user, as stored on mongo
* @param  username - Source username of the user
* @throws
* @returns  User JSON from the user model
*/
export function getUserByUsername(username) {
  const filter = {username: username};

  return new Promise((resolve,reject) => {
    return User.findOne(filter)
    .populate(populateRepo)
    .then(user => {
       if (user != null) {
         resolve(user);
       }
       else {
         reject('User not found');
       }
    })
 });
}


/**
* get a specific repo given username and repo name
* @param repoName - name of the repo
* @param repoUser - username of repo creator
* @throws
* @returns repo JSON
*/
export function getRepoByUser(repoName, repoUser) {
  const userFilter = {username: repoUser};
  const projectUserFilter = {project_name: repoName, username: repoUser};

  return new Promise((resolve,reject) => {
    return Repo.findOne(userFilter)
    .then(repo => {
      if (repo != null) {
       Repo.findOne(projectUserFilter)
       .populate(populateRepo)
       .then(repo => {
         if (repo != null) {
           resolve(repo);
         }
         else {
           reject('Repo not found');
         }
       })
      }
      else {
        reject('User not found');
      }
    })
 });
}


/**
* get a specific repo given its mongo id
* @param id - mongo id (_id)
* @throws
* @returns repo JSON
*/
export function getRepoById(id) {
  return new Promise((resolve,reject) => {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return Repo.findById(id)
      .populate(populateRepo)
      .then(repo => {
         if (repo != null) {
           resolve(repo);
         }
         else {
           reject('Repo not found');
         }
     })
    }
    else {
      reject('Repo ID is invalid');
    }
 });
}







/**
* get a specific repo given its cid
* @param cid - cid for the repo, stored on the server
* @throws
* @returns repo JSON
*/
export function getRepoByCid(cid) {
  const filter = {cid: cid};
  return new Promise((resolve,reject) => {
    return Repo.findOne(filter)
    .populate(populateRepo)
    .then(repo => {
       if (repo != null) {
         resolve(repo);
       }
       else {
         reject('Repo not found');
       }
    })
 });
}


/**
* Checks for the existance of a repo on the MongoDB server, GitLab, and Eos
* @param id - mongoose id of the repo
* @throws
* @returns resolved/ rejected promise depending on whether the repo does/ doestn't exist in either mongo/gitlab/eos
*/
export function checkParams(id){
  return new Promise((resolve,reject) => {
    getRepoById(id)
    .then(repo => {
      return checkGL(repo)
    })
    .then((res) => {
      return checkAccountEOS(repo.cid)
    })
    .then((msg) => {resolve(msg)})
    .catch(err => {reject(err)});
  });
}


/**
* Checks for the existance of a repo on  GitLab
* @param repo - a repo JSON from mongoDB
* @throws
* @returns resolved/ rejected promise depending on whether the repo does/ doestn't exist on Gitlab
*/
function checkGL(repo){
  console.log('REPO GITLAB ID:   -> ', repo.gitlabID);
  return new Promise((resolve, reject) => {
    gitlab.getRepo(repo.gitlabID)
    .then(() => {
      resolve(repo);
    })
    .catch(err => {
      reject(['Gitlab',err])
    });
  })
}




/**
* gets a single repo based on a filter [data]
* @param  data - a json usef to filter a specific repo
* @throws
* @returns the repo object in json
*/
export function getRepo(data) {
  return new Promise((resolve,reject) => {
    return Repo.findOne(data)
    .populate(populateRepo)
    .then(repo => {
     if (repo != null) {
       resolve(repo);
     }
     else {
       reject('repo not found');
     }
   })
 })
}


/**
* Function returns all repos
* TODO: Function may need to be changed to only retrieve a certain # of repos and/or implement as an await
* @throws error promise for failed retrieval
* @returns Promise with repos JSON
*/
export function getRepos() {
  return Repo.find()
  .then(repos =>{
    return repos;
  });
}


/**
* Get raw repo file from gitlab
* @param gitlabID - Repo ID, as recorded on Source's mongo
* @param  sha - Repo sha
* @throws
* @returns Promise with repo's raw file
*/
export function getRaw(gitlabID, sha) {
  return gitlab.getRaw(gitlabID, sha)
  .then(file =>{
    return file;
  });
}


/**
* Get mongodb project + gitlab files
* @param repoID - Repo ID, as recorded on Source's mongo
* @throws
* @returns {JSON} project including git files
*/
export async function getRepoData(user,repoID,parent) {
  let tree, proj;
  const repo = await getRepoById(repoID)
    .catch(err => {throw (err)});

  if(repo.empty){
    console.log("REPO NOT EMPTY");
     [tree, proj] = await Promise.all([gitlab.getRepo(user,repo.project_name.toLowerCase(),parent), Repo.findByIdAndUpdate(repo._id, {$set:{empty:false}}, {new:true}).populate(populateRepo)])
          .catch(err => {throw (err)});
  }
  else {
     [tree, proj] = await Promise.all([gitlab.getRepo(user,repo.project_name.toLowerCase(),parent), repo])
          .catch(err => {
            console.log("error on all promises",err);
            throw (err)
          });
  }
  return {proj, tree};
}


function getRepoByUsername(username,repo){
  return new Promise((resolve,reject)=>{
    Repo.findOne({username:username,project_name:repo})
    .populate(populateRepo)
        .then(repo=>{
          if (repo != null) {
            resolve(repo);
          }
          else {
            reject('Repo not found');
          }
        })
  })
}




/**
* checks parameters, posts Starring EOS action and returns updated user / repo state
* @param id - mongoose id of the repo on which starring is performed
* @param username - Source username of action taker
* @param EOSUsername - EOS username of action taker
* @param recipient - EOS username of recipient of the action   //currently EOS username isn't being provided by client
* @param repoUser - username of repo creator
* @throws
* @return gitlab's and source's data about the repo in Json
*/
export async function handleStar(id, username, EOSUsername, recipient) {
  let repo;
  let user;
  let actionType;

  let update = (amount) => {return {$inc: {star_count:amount}};}

  await checkParams(id)
          .catch(err => {console.log('##### catch gitlab #####');return Promise.reject(err)});

  [repo, user] = await Promise.all([getRepoById(id), getUserByUsername(username)])
          .catch(err=>{console.log('##### catch promise.all first #####');return Promise.reject(err);});

  actionType = user.starred.includes(repo._id) ? 1 : 4;

  let txData = {
    privateKey : user.PrivateKey,
    actor : EOSUsername,
    recipient : recipient,
    action : actionType,
    cid : repo.cid
  }

  let tx = await userActionEOS(txData)
        .catch((err) => {console.log('##### catch eos #####');return Promise.reject(err)});

  let starValue = actionType === 1 ? -1 : 1;
  let userAction = actionType === 1 ? {$pull: {starred: repo._id}} : {$push: {starred: repo._id}};

  let results1 = await Promise.all([User.findOneAndUpdate({username : username}, userAction, {new:true}),
                                    Repo.findByIdAndUpdate(repo._id, update(starValue), {new: true})
                                  ])
                              .catch(err => {return Promise.reject(err)});

  return Promise.resolve(results1);
}



/**
* cleans up user JSON to be sent to client (removes passwords, private keys, etc.)
* @param user - JSON of user from mongoose
* @throws
* @return user JSON
*/
export function cleanUser(user) {
  const userClean = {};

  userClean.totalSRC = user.totalSRC;
  userClean.Repositories = user.Repositories;
  userClean.followers = user.followers;
  userClean.following = user.following;
  userClean.groups_owned = user.groups_owned;
  userClean.groups_joined=user.groups_joined;
  userClean.starred=user.starred;
  userClean.pinned=user.pinned;
  userClean._id= user._id;
  userClean.name=user.name;
  userClean.username = user.username;
  userClean.email = user.email;
  userClean.gitlabID = user.gitlabID;

  return userClean;
}



/**
*
* @param id - repo mongoose id
* @throws
* @return
*/
export function listProjectRepos(id) {
  return getRepoById(id)
  .then(repo => {
      return axios.get(`${url}/projects/${repo.gitlabID}/repository/tree${authorize}`)
  })
  .then(repositories =>{
    console.log("USER PROJECTS", repositories.data);
    return repositories.data;
  })
}




/**
*
* @param name - repo mongoose id
* @param description - description of the project
* @param import_url - repo import url
* @param user - JWT payload for the user creating the repo
* @throws
* @return
*/
export async function newProject(name, description, import_url, user) {
  const cid =  makecid();
  const txInput = {
    name: name,
    cid: cid
  }

  if (!mongoose.Types.ObjectId.isValid(user.id)) {return Promise.reject('User ID is invalid')}

  let _user = await User.findOne({_id:user.id})
              .select('+gitlabToken')
              .catch(err => {
                console.log(`Error Grabbing User: ${JSON.stringify(user)} info in user.util.newProject`);
                return Promise.reject(['Mongoose', err])
              });

  const glInput = {
    name: name,
    gitlabToken: _user.gitlabToken,
    description: description,
    import_url: import_url
  }

  // const [tx, project] = await Promise.all([newRepoEOS(txInput), gitlab.newProject(glInput)])
  //           .catch(err => {return Promise.reject(err)});

  const [project] = await Promise.all([gitlab.newProject(glInput)])
            .catch(err => {
              console.log(`Error awaiting all promise on creating repo`,err);
              return Promise.reject(err);
            });

  let prjct = {
    project_name: name,
    creator: user.id,
    creator_name: user.username,
    gitlabID: project.id,
    cid: cid,
    description: project.description,
    ssh_url: project.ssh_url_to_repo,
    http_url: project.http_url_to_repo,
    admins: [new mongoose.mongo.ObjectId(user.id)],
  }

  let newProject = new Repo(prjct);
  const savedProject = await newProject.save()
          .catch((err) => {console.log('bishhhhh',err);return Promise.reject(['Mongoose', err]);});
  return Promise.resolve(savedProject);
}

// NEW PROJECT BACKUP

/*
export async function newProject(name, description, import_url, user) {
  const cid =  makecid();
  const txInput = {
    name: name,
    cid: cid
  }

  if (!mongoose.Types.ObjectId.isValid(user.id)) {return Promise.reject('User ID is invalid')}

  let _user = await User.findOne({_id:user.id})
              .select('+gitlabToken')
              .select('+chat_token')
              .catch(err => {
                console.log(`Error Grabbing User: ${JSON.stringify(user)} info in user.util.newProject`);
                return Promise.reject(['Mongoose', err])
              });

  const glInput = {
    name: name,
    gitlabToken: _user.gitlabToken,
    description: description,
    import_url: import_url
  }

  // const [tx, project] = await Promise.all([newRepoEOS(txInput), gitlab.newProject(glInput)])
  //           .catch(err => {return Promise.reject(err)});

  const [project,chatInfo] = await Promise.all([gitlab.newProject(glInput),chat.newRoom(name,_user.chat_token,_user.username)])
            .catch(err => {
              console.log(`Error awaiting all promise on creating repo`,err);
              return Promise.reject(err);
            });

  let prjct = {
    project_name: name,
    creator: user.id,
    creator_name: user.username,
    gitlabID: project.id,
    cid: cid,
    description: project.description,
    ssh_url: project.ssh_url_to_repo,
    http_url: project.http_url_to_repo,
    chat_url: chatInfo.room_id,
    admins: [new mongoose.mongo.ObjectId(user.id)],
  }

  let newProject = new Repo(prjct);
  const savedProject = await newProject.save()
          .catch((err) => {console.log('bishhhhh',err);return Promise.reject(['Mongoose', err]);});
  return Promise.resolve(savedProject);
}

*/



/**
* Sets repo rules on EOS
* @param data = {    username : req.user.username,
*    role_count : req.body.role_count,
*    role_names : req.body.role_names,
*    actions : req.body.actions,
*    compensations : req.body.compensations,
*    reputations : req.body.reputations,
*    thresholds : req.body.thresholds,
*    id : req.body.id,
*    EOSUsername: req.user.EOSUsername
*    }
* @throws
* @return {Promise} reject/resolve
*/
export async function setRepo(data, _id) { //TODO: update the 'roles' field in repoSchema!!
  const id = data.id;

  const repo = await getRepoById(id)
        .catch(err => {return Promise.reject(['Mongoose',err])});

  if (_id != repo.creator) {return Promise.reject('You are not allowed to set the roles for this repo')}
  data.cid = repo.cid;
  let cleanData = await sanitizeRules(data)
          .catch(err => {return Promise.reject(['Precheck', err])});

  const tx = await setRepoEOS(cleanData)
        .catch(err => {return Promise.reject(['EOS', err])});

  return Promise.resolve(tx);
}


/**
* cleans up + checks the input for project rules on EOS
* @param {JSON} data  - data object passed
* @throws
* @return {Promise} resolve / reject
*/
function sanitizeRules(data) {
  return new Promise((resolve, reject) => {
    let count =  parseInt(data.role_count);
    if (isNaN(count)) {reject('role count is not a valid #')}
    data.role_names = JSON.parse(data.role_names);
    if (data.role_names.length != count) {reject('invalid role name array')}

    data.actions = JSON.parse(data.actions);
    if (data.actions.length != count*7) {reject('invalid actions array')}

    data.compensations = JSON.parse(data.compensations);
    if (data.compensations.length != count*7) {reject('invalid compensations array')}

    data.reputations = JSON.parse(data.reputations);
    if (data.reputations.length != count*7) {reject('invalid reputations array')}

    data.thresholds = JSON.parse(data.thresholds)
    if (data.thresholds.length != count) {reject('invalid thresholds array')}

    resolve(data);
  })
}



/**
* Adds labels to the repo mongo, under labels. NOTE: consider adding an edit label function
* @param  user  - mongoose id of the user adding labels (must be repo creator)
* @param  labels  - Array of Strings, of labels
* @throws
* @return {Promise} resolve / reject
*/
export async function addLabels(repoID, user, labels) {
  const repo = await getRepoById(repoID).catch(err => {return Promise.reject(['Mongoose', err])});
  if(!repo.creator._id.equals(user)) {return Promise.reject('Cannot add labels: You are not this project\'s creator')}
  const repoLabels = repo.labels;
  if (repoLabels.length + labels.length > 20) {return Promise.reject('Cannot add anymore labels (limit is 20)')}
  const toAdd =[];
  for (let i = 0; i < labels.length; i++) {
    let exist = false;
    for (let j = 0; j < repoLabels.length; j++)  {
      if (labels[i] === repoLabels[j]) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      toAdd.push(labels[i]);
    }
  }
  repo.labels = toAdd.concat(repoLabels);
  await repo.save().catch(err => {Promise.reject(['Mongoose', err])});
  return Promise.resolve(['Updated labels', repo.labels]);
}

/**
* Get a project's token balance
* @param cid - Project CID
* @throws
* @return {Promise} project balance / error
*/
export function getBalance(cid) {
  return new Promise(async (resolve, reject) => {
    let balance = await getBalanceEOS(cid).catch(err => {reject(err)});
    resolve(balance);
  })
}


/**
* Creates new project on Gitlab (no EOS)
* @throws
* @return {promise}
*/
export function newRepo(req){
  return new Promise((resolve,reject)=>{
    gitlab.newGroupProject(req).then(repo=>{
      console.log(repo);
      let prjct = {
        project_name: req.body.name,
        username: req.params.group_name,
        gitlabID: repo.id,
        description: repo.description,
        ssh_url: repo.ssh_url_to_repo,
        http_url: repo.http_url_to_repo,
        contract_address: "empty"
      }
      let new_project = new Repo(prjct);
      new_project.save().then(r=>{resolve(r);}).catch(err=>{
        console.log("Error Saving Repo",err);
        reject(err)});
      }).catch(err=>{
        console.log("Error With GL Repo Creation",err);
        reject(err);
      });
    });
}



/**
* Creates new branch on Gitlab
* @param req {.body.gitlabID, .body.branch, .body.ref}
* @throws
* @return {promise}
*/
export async function newBranch(req) {
      let branch =  await gitlab.newBranch(req)
              .catch(err=>{return Promise.reject(err);});

    return Promise.resolve(branch);
}



/**
* Deletes a branch on Gitlab
* @param req {.body.gitlabID, .body.branch, .body.auth}
* @throws
* @return {promise} deletion msg / error
*/
export async function delBranch(req) {
    let del = await gitlab.delBranch(req)
            .catch(err=>{return Promise.reject(err)});

    return Promise.resolve(del);
}


/**
* Lists all branches of a given Gitlab project
* @param req {.body.gitlabID}
* @throws
* @return {promise} branches/error
*/
export async function getBranches(username,repo) {
    let branches = await gitlab.getBranches(username,repo.toLowerCase())
            .catch(err=>{return Promise.reject(err)});

    return Promise.resolve(branches);
}


/**
* Gets a specifi branch from  a gitlab project
* @param req {.body.gitlabID, .body.branch}
* @throws
* @return {promise} branches/error
*/
export async function getBranch(username,repo,branch) {
   username = username.toLowerCase();
   repo = repo.toLowerCase();

    let branch_info = gitlab.getBranch(username,repo,branch)
          .catch(err=>{
            console.log("Error getting a branch",err);
            return Promise.reject(err);
          });

    return Promise.resolve(branch_info);
}


/**
* Gets a specific merge from a gitlab project
* @param info
* @throws
* @return {promise} pull req/error
*/
export async function newMerge(info) {
  let auth = await User.findById({_id: info.userID})
      .select('+gitlabToken');

  info.auth = auth.gitlabToken;

  let pull = await gitlab.newMerge(info)
          .catch(err=>{ return Promise.reject( err ) });

  return Promise.resolve(pull);
}

/**
* deletes a pull request
* @param req
* @throws
* @return {promise} pull req del/error
*/
export async function deleteP(req) {
  return new Promise(async (resolve, reject) => {
    let del = await gitlab.deleteP(req)
            .catch(err=>{return Promise.reject(err);});

    return Promise.resolve(del);
  })
}

/**
* GEt all Merge requests for a given repo
* @param {Int} repoID - GL ID associated with repo
* @return {promise} merges /error
*/
export async function listMerges(repoID) {
    let merges = await gitlab.listMerges(repoID)
            .catch(err=>{return Promise.reject(err);});

    return Promise.resolve(merges);
}

export async function getMerge(repoID,mergeID){
  let merge = await gitlab.getMerge(repoID,mergeID)
    .catch(err=>{ return Promise.reject( err ) });

    return Promise.resolve(merge);
}

/**
* Updates a merge
* @param req
* @throws
* @return {promise} merge/error
*/
export async function updateMerge(info) {
  let auth = await User.findById({_id: info.user})
    .select('+gitlabToken');

  info.auth = auth.gitlabToken;

    let merge = await gitlab.updateMerge(info)
            .catch(err=>{return Promise.reject(err);});

    return Promise.resolve(merge);

}

export async function closeMerge(info) {
  let auth = await User.findById({_id: info.user})
    .select('+gitlabToken');

  info.auth = auth.gitlabToken;

    let merge = await gitlab.closeMerge(info)
            .catch(err=>{return Promise.reject(err);});

    return Promise.resolve(merge);

}



export async function deleteM(repoID,mergeID,user){
  let auth = await User.findById({_id: user})
    .select('+gitlabToken');
    auth = auth.gitlabToken;
    let result = await gitlab.deleteM(repoID,mergeID,auth)
            .catch(err=>{return Promise.reject(err);});

    return Promise.resolve(result);
}

/**
* Grabs commits for a given repoID
* @param id - Gitlab id of a repo
* @throws
* @return {JSON} -Commits
**/
export async function getCommits(id){
  let data = await gitlab.getCommits(id)
    .catch(err=>{
      return Promise.reject(err);
    });
    return Promise.resolve(data);
}

export async function approveM(repoID,mergeID,commitMsg,user){

  let auth = await User.findById({_id: user})
    .select('+gitlabToken');
    console.log("UserGL",auth);

    auth = auth.gitlabToken;

  let approval = await gitlab.approveM(repoID,mergeID,auth)
    .catch(err=> { return Promise.reject(err) });

    return Promise.resolve(approval);
}

// addIdea('5ba2cc168b54854a42c564ad', '5ba2aaa8599d67469d25091a', '5b968155de64871a8ae95dad')
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});

//NOTE: test vote
// vote('0', '5ba9003e03287d5cd54c6fbb', '5b968141de64871a8ae95dac')
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});

/**
 * Function forks an existing repository to a new one
 * @param {Str} repoId - ID associated with the repository
 * @param {Str} userId - ID associated with the user
 */
export async function fork_repo(repoId, userId) {
  let user = await User.findById({_id:userId})
    .select('+gitlabToken')
    .catch(err=>{
      console.log(`Error finding User with id: ${userId}`);
      return Promise.reject("Internal Error")
    });

  let prjct_info={
    creator: user.id,
    creator_name: user.username,
  }
  let authToken = user.gitlabToken;
  console.log("USEr",user);
  let project = await gitlab.forkRepo(repoId, authToken)
     .catch(error => { return Promise.reject(error) });

  prjct_info.project_name=project.name;
  prjct_info.gitlabID=project.id;
  prjct_info.cid=makecid();
  prjct_info.description=project.description;
  prjct_info.ssh_url=project.ssh_url_to_repo;
  prjct_info.http_url=project.http_url_to_repo;
  prjct_info.forked=true;

  console.log("heelo");
  let newProject = new Repo(prjct_info);
  const savedProject = await newProject.save()
    .catch((err) => {
        console.log('bishhhhh',err);
        return Promise.reject(['Mongoose', err]);
    });

   return Promise.resolve(savedProject);
}


// BACKUP
/*
export async function fork_repo(repoId, userId) {
  let user = await User.findById({_id:userId})
    .select('+gitlabToken')
    .select('+chat_token')
    .catch(err=>{
      console.log(`Error finding User with id: ${userId}`);
      return Promise.reject("Internal Error")
    });

  let prjct_info={
    creator: user.id,
    creator_name: user.username,
  }
  let authToken = user.gitlabToken;
  console.log("USEr",user);
  let project = await gitlab.forkRepo(repoId, authToken)
     .catch(error => { return Promise.reject(error) });

  prjct_info.project_name=project.name;
  prjct_info.gitlabID=project.id;
  prjct_info.cid=makecid();
  prjct_info.description=project.description;
  prjct_info.ssh_url=project.ssh_url_to_repo;
  prjct_info.http_url=project.http_url_to_repo;
  prjct_info.forked=true;

  let chat_info = await chat.newRoom(project.name,user.chat_token,user.username)
    .catch(err =>{ return Promise.reject(err) });
  prjct_info.chat_url=chat_info.room_id;
  console.log("heelo");
  let newProject = new Repo(prjct_info);
  const savedProject = await newProject.save()
    .catch((err) => {
        console.log('bishhhhh',err);
        return Promise.reject(['Mongoose', err]);
    });

   return Promise.resolve(savedProject);
}
*/
