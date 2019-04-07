import * as _ideas from './ideas.util';
import {sanitizeTags} from '../util/helpers.util';
import * as _test from './ideas.test';


/**
* Vote on either an idea or a comment (upvote / downvote)
* @param {String} req.params.which - idea / blob
* @param {Number} req.params.up - 1 / 0  [1 = upvote, 0 = downvote]
* @param {id} req.params.id - the mongodb id for either the idea or the blob
* @param req.user - JWT of authenticated user
* @returns
*/
export function vote(req, res) {
  const which = req.params.which;
  const up = req.params.up;
  const id = req.params.id;
  const user = req.user.id;
  _ideas.vote(which, up, id, user)
  .then(i=>{
    res.status(200).send(i)
  })
  .catch(err=> {
    res.status(400).send('Failed to vote'+ err)
  });
}


/**
* Get 50 ideas, sorted by date, includes pagination functionality, can filter by tag
* @param req.body.limit - the number of ideas to get per page
* @param req.body.last - Mongoose id of the last idea seen on a page (used for pagination)
* @param req.body.tag - tag to filter by
* @returns void
*/
export function getAll(req,res){
  let limit;
  try{limit = parseInt(req.body.limit)}
  catch(err){limit = undefined}
  if (limit == undefined) {limit = 50}
  let last = (req.body.last == undefined) ? '0' : req.body.last;
  let tag = (req.body.tag == undefined) ? null : req.body.tag;

  _ideas.getAll(limit, last, tag)
  .then(i=>{
    res.status(200).send(i)
  })
  .catch(err=> {
    res.status(400).send({message: 'Failed to fetch ideas',error: err})
  });
}

/**
* Get a single idea based on its mongoose id
* @param req.params.id - mongoose id of the idea
* @returns void
*/
export function getIdea(req,res){
  let id = req.params.id;

    _ideas.getIdea(id)
    .then(i=>{
      res.status(200).send(i)
    })
    .catch(err=> {
      res.status(400).send({message: 'Failed to fetch idea',error: err})
    });
}


/**
* Create a new idea
* @param req.body.title - title of the idea (string)
* @param req.body.body - text body of the idea [non specified type, in order to accept Quill]
* @param req.body.tags - tags, represented as COMMA SEPARATED WORD STRINGS
* @param req.body.projectID - mongoose ID of project to which the idea belongs (can be empty)
* @param req.body.description - text description of the idea (string)
* @param req.body.stringBody - string form of body, used for search indexing
* @param req.user - JWT payload of authenticated user
* @returns void
*/
export function newIdea(req,res){
  let i = {}
  let project = undefined;
  let stringBody;
  if (req.body.title != undefined) {i.title = req.body.title}
  //if (req.body.tags != undefined) {i.tags = sanitizeTags(req.body.tags)}
  if (req.body.tags != undefined) {i.tags = req.body.tags}
  if (req.body.projectID != undefined) {project = req.body.projectID}
  if (req.body.body != undefined) {i.body = req.body.body}
  if (req.body.stringBody != undefined) {stringBody = req.body.stringBody; i.stringBody = req.body.stringBody}
  i.creator = req.user.id;

  _ideas.newIdea(i, project, stringBody)
  .then(i=>{
    res.status(200).send(i)
  })
  .catch(err=> {
    res.status(400).send({message: 'Failed to fetch idea',error: err})
  });
}


/**
* Delete a posted Idea
* @param req.params.id - mongoose id of idea to be removed
* @param req.user - JWT payload of authenticated user
* @returns void
*/
export function deleteIdea(req,res){
  let id = req.params.id
  let user = req.user.id
  _ideas.deleteIdea(id, user)
  .then(i=>{
    res.status(200).send(['Successfully deleted idea', i]);
  })
  .catch(err=> {
    res.status(400).send({message: 'Failed to delete idea',error: err});
  });
}

/**
* Delete a posted Idea
* @param req.params.ideaID - mongoose id of idea the blob belongs to
* @param req.params.blobID - mongoose id of idea the blob belongs to
* @param req.user - JWT payload of authenticated user
* @returns void
*/
export function deleteBlob(req,res){
  let ideaID = req.params.ideaID;
  let blobID = req.body.blobID;
  let user = req.user.id
  _ideas.deleteBlob(ideaID, blobID, user)
  .then(i=>{
    res.status(200).send(['Successfully deleted blob', i]);
  })
  .catch(err=> {
    res.status(400).send({message: 'Failed to delete blob',error: err});
  });
}



/**
* Create a new blob (i.e. comment) on an idea
* @param req.user - JWT payload of authenticated user
* @param req.params.id - mongoose id of the idea being blobbed
* @param req.body.nest - mongoose id of the blob this blob comments on (nests from).. can be undefined
* @param req.body.body - blob content
* @param req.body.stringBody - string form of body, used for search indexing
* @returns void
**/
export function newBlob(req,res){
  let ib = {
    user: req.user.id,
    ideaID: req.params.id,
    body: req.body.body,
    nest: req.body.nest
  }
  let stringBody = undefined;
  if (req.body.stringBody != undefined) {stringBody = req.body.stringBody}

  _ideas.newBlob(ib, stringBody)
    .then((arr)=>{
      res.status(200).send({blob: arr[1], idea: arr[0]});
    })
    .catch(err=> {
      res.status(400).send({message: 'Failed to create blob',error: err});
    });
}




/**
* Edit the tags and/or body of an idea
* @param req.params.id - mongoose id of the idea being edited
* @param req.body.body - idea content for editing
* @param req.body.tags - idea tags for editing... COMMA SEPARATED WORD STRINGS
* @param req.body.stringBody - string form of body, used for search indexing
* @param req.user - JWT payload of authenticated user
* @returns void
*/
export function editIdea(req, res) {
  console.log(req.body)
  let id = req.params.id;
  let body;
  let tags = req.body.tags;
  let user = req.user.id;
  let stringBody = undefined;
  if (req.body.stringBody != undefined) {stringBody = req.body.stringBody}

  try {
    //body = JSON.parse(req.body.body);
    body = req.body.body
  }
  catch(err) {
    body = null
    return;
  }

  _ideas.editIdea(id, user, body, tags, stringBody)
  .then(i=>{
    res.status(200).send(['Successfully edited idea', i]);
  })
  .catch(err=> {
    res.status(400).send({message: 'Failed to edit idea',error: err});
  });
}


/**
* Edit an idea blob
* @param req.params.id - mongoose id of blob for editing
* @param req.body.body - blob content for editing
* @param req.body.stringBody - string form of body, used for search indexing
* @param req.user - JWT payload of authenticated user
* @returns void
**/
export function editBlob(req,res){
  let id = req.params.id;
  let body;
  let user = req.user.id;
  let stringBody = undefined;
  if (req.body.stringBody != undefined) {stringBody = req.body.stringBody}

  try {
    //body = JSON.parse(req.body.body);
    body = req.body.body;
  }
  catch(err) {
    body = null;
    return;
  }

  _ideas.editBlob(id, user, body, stringBody)
  .then(i=>{
    res.status(200).send(['Successfully edited comment', i]);
  })
  .catch(err=> {
    res.status(400).send({message: 'Failed to edit comment',error: err});
  });
}
