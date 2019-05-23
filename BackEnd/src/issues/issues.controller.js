const Issues =require('../models/issue.js').Issues;
const IssueBlob = require('../models/blob').IssueBlob;
const mongoose = require('mongoose');
const config = require('../config');
import {userActionEOS, checkAccountEOS} from '../util/eos.util';
import * as _issues from './issues.util';
import {sanitizeTags} from '../util/helpers.util';


/**
* Get 50 issues (or # specified in 'limit'), sorted by date, includes pagination functionality,
* can filter by tag
* @param req.body.limit - the number of issues to get per page
* @param req.body.last - Mongoose id of the last issue seen on a page (used for pagination)
* @param req.body.id - mongoose id of the project we want to get issues for
* @returns {Array} of issues
*/
export function getAll(req,res){
  let limit;
  try{limit = parseInt(req.body.limit)}
  catch(err){limit = undefined}
  if (limit == undefined) {limit = 50}
  let last = (req.body.last == undefined) ? '0' : req.body.last;
  let tag = (req.body.tag == undefined) ? null : req.body.tag;
  let repoID = (req.body.id == undefined) ? null : req.body.id;

  _issues.getAll(repoID, limit, last, tag)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to fetch issues',error: err})
  });
}


/**
* Vote on either an issue or a comment (upvote / downvote)
* @param {String} req.params.which - issue / blob
* @param {Number} req.params.up - 1 / 0  [1 = upvote, 0 = downvote]
* @param {id} req.params.id - the mongodb id for either the issue or the blob
* @param req.user - JWT of authenticated user
* @returns
*/
export function vote(req, res) {
  const which = req.params.which;
  const up = req.params.up;
  const id = req.params.id;
  const user = req.user.id;

  _issues.vote(which, up, id, user)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to vote',error: err})
  });
}



/**
* Get a single issue based on its mongoose id
* @param req.params.issueID - mongoose id of the issue
* @returns {JSON} issue including its blobs. Deleted blobs are null and should be
*                 ignored on frontend. Blobs are sorted  by the order they were submitted
*/
export function getIssue(req,res){
  let id = req.params.issueID;
  _issues.getIssue(id)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to fetch issue',error: err})
  });
}



/**
* Create a new issue for a given project
* @param req.body.title - Issue title
* @param req.user - JWT of authenticated user
* @param req.body.repoID -  Mongoose ID of the project referenced by this issue
* @param req.body.body - Body of the issue
* @param req.body.stringBody - String version of the issue (should be provided from Quill.getText)
* @param req.body.tags - [String] tags for the issue
* @returns {JSON} the issue Mongo object
*/
export function newIssue(req,res){
  let info = {
    title: req.body.title,
    creator: req.user.id,
    bounty: (req.body.bounty == undefined) ? 0 : req.body.bounty,   //TODO: this needs to be redone to verify bounty on EOS
    status: "unresolved",
    EOSUsername: req.user.EOSUsername, // NO
    repoID: req.body.repoID,
    tags: (req.body.tags == undefined) ? [] : sanitizeTags(req.body.tags),
    body: req.body.body,
    stringBody: (req.body.stringBody != undefined) ? req.body.stringBody : ''
  }

  _issues.newIssue(info)
    .then(i=>{
      res.status(200).json(i)
    })
    .catch(err=> {
      res.status(400).json({message: 'Failed to create issue',error: err})
    });
}

/**
* Delete a blob (doesn't allow deleting the first blob, a.k.a main issue blob)
* @param req.params.blobID - mongoose ID of blob to delete
* @param req.params.issueID - mongoose ID of the issue the blob is  associated with
* @param req.user - JWT of authenticated user
* @returns void
*/
export function deleteBlob(req,res){//?
  let id = req.params.blobID;
  let user = req.user.id;
  let issue = req.params.issueID;

  _issues.deleteBlob(id, issue, user)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to delete comment', error: err})
  });
}



/**
* Post a new an issue blob (comment)
* @param req.user - JWT of authenticated user
* @param req.body.body - body of the comment
* @param req.body.stringBody - String version of the issue (should be provided from Quill.getText)
* @param req.params.issueID - mongoose ID of the issue being commented
* @returns {JSON} the new blob (or comment)
**/
export function newBlob(req,res){
  let issueID = req.params.issueID;
  let user = req.user.id;
  let body = req.body.body;
  let stringBody = req.body.stringBody;

  _issues.newBlob(issueID, user, body, stringBody)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to create comment',error: err})
  });
}


// * @param req.body.assignee - Change the assigned user (optional) NOTE: should have their own functions
// * @param req.body.assigner - Issue title to edit (optional)


/**
* Edit an issue
* @param req.user - JWT of authenticated user
* @param req.body.title - Issue title to edit (optional)
* @param req.body.body - Issue body to edit (optional)
* @param req.body.stringBody - String version of the issue (should be provided from Quill.getText)
* @param req.body.closed - true/false to close the issue / reopen issue (optional)
* @param req.params.issueID - mongoose issue  ID
* @returns updated issue / reject
*/
export function editIssue(req, res) {
  const issueID = req.params.issueID;
  const user = req.user.id;
  const edits = {}
  let stringBody = '';
  if (req.body.title != undefined) {edits.title = req.body.title;}
  if (req.body.body != undefined) {edits.body = req.body.body;}
  if (req.body.closed === 'true' || req.body.closed === 'false' ) {edits.closed = req.body.closed;}
  if (req.body.stringBody != undefined) {stringBody = req.body.stringBody};
  // if (req.body.close != undefined) {edits.close = req.body.close;}

  _issues.editIssue(user, issueID, edits, stringBody)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to edit issue',error: err})
  });
}

/**
* Edit an issue blob
* @param req.user - JWT of authenticated user
* @param req.body.body - Comment body to edit
* @param req.body.stringBody - String version of the issue (should be provided from Quill.getText)
* @param req.params.blobID - mongoose blob  ID
* @returns updated blob / reject
**/
export function editBlob(req,res){
  const blobID = req.params.blobID;
  const user = req.user.id;
  const edits = {}
  if (req.body.body != undefined) {edits.body = req.body.body;}
  const stringBody = req.body.stringBody;

  _issues.editBlob(user, blobID, edits, stringBody)
  .then(i=>{
    res.status(200).json(i);
  })
  .catch(err=> {
    res.status(400).json({message: 'Failed to edit comment',error: err})
  });
}


/**
* Get all issues by filter tag
* @param req
* @param res
* @returns void
*/
export function filterAllTag(req, res) {
  console.log('getting most current issues by tag name');
  Issues
    .find({tags: req.params.tag})
    .sort({'date' : -1})
    .then(data => res.json({"data":data}));
}

/**
* Get a repos issues by filter tag
* @param req
* @param res
* @returns void
*/
export function filterTag(req,res){
  console.log('getting most current issues by tag name');
// TODO: Implement an issues and qna array for each repo
  Issues
    .find({tags: req.params.tag})
    .sort({'date' : -1})
    .limit(25)
    .then(data => res.json({"data":data}));
}


/**
* Function resolves an issue for a given repo
* @param req
* @param res
* @returns void
**/
export function resolve(req,res){
  //TODO: update issues mongodb
  checkParams(req.body.cid)
  .then(() => {
    console.log("passed check params");
    return User.findOne({username: req.body.username})
  })
  .then(user => {
    const data = {
      privateKey : user.PrivateKey,
      actor : req.body.username,
      recipient : req.body.recipient,
      action : 3,
      cid : req.body.cid
    }
    return userActionEOS(data);
    })
    .then(result =>{
      console.log("EOS transaction: ", result);
      console.log("Resolved issue successfully");
      res.status(200).json({
        message: "Resolved issue successfully",
        resolved: result
      });
    })
  .catch(err => {res.status(400).json({message: "Resolving issue failed", error: err+""})});
}

/**
* Function assigns an issue to a user
* @param req
* @param res
* @returns void
**/
export function assign(req,res){
  // TODO: call smart contract to verify ability to asign issue
}

/**
* Function unassigns an issue to a user
* @param req
* @param res
* @returns void
**/
export function unassign(req,res){
  // TODO: call smart contract to verify ability to unasign issue
}

export function close(req,res){
  let issueID = req.params.issueID;
  let user = req.user.id;
  _issues.close(issueID,user)
    .then(data=>{ res.status(200).json({message: "Successfully closed Issue", data }) })
    .catch(error =>{ console.log("error",error );res.status(400).json({message: "Resolving issue failed", error }) });
}

export function createMergeRequest(){

}
