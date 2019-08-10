import * as _ideas from "./ideas.util";
import { sanitizeTags } from "../util/helpers.util";
// import * as _test from "./ideas.test";
import Ideas from "../pgModels/ideas";
import ProjectIdeas from "../pgModels/project_ideas";
import Comments from "../pgModels/comments";
import IdeaComments from "../pgModels/idea_comments";
import UserComments from "../pgModels/user_comments";

/**
 * Vote on either an idea or a comment (upvote / downvote)
 * @param {String} req.params.which - idea / blob
 * @param {Number} req.params.up - 1 / 0  [1 = upvote, 0 = downvote]
 * @param {id} req.params.id - the mongodb id for either the idea or the blob
 * @param req.user - JWT of authenticated user
 * @returns
 */

//I can skip
// export function vote(req, res) {
//   const which = req.params.which;
//   const up = req.params.up;
//   const id = req.params.id;
//   const user = req.user.id;
//   _ideas.vote(which, up, id, user)
//   .then(i=>{
//     res.status(200).json(i)
//   })
//   .catch(err=> {
//     res.status(400).json('Failed to vote'+ err)
//   });
// }

/**
 * Get 50 ideas, sorted by date, includes pagination functionality, can filter by tag
 * @param req.body.limit - the number of ideas to get per page
 * @param req.body.offset - offset for the query based on the previous paginated (used for pagination)
 * @param req.body.tag - tag to filter by
 * @returns void
 */

//pending
export function getAll(req, res) {
  let limit;
  try {
    limit = parseInt(req.body.limit);
  } catch (err) {
    limit = undefined;
  }
  if (limit == undefined) {
    limit = 50;
  }
  let offset = req.body.last == undefined ? 0 : parseInt(req.body.offset);
  let tag = req.body.tag == undefined ? null : req.body.tag;

  Ideas.getAll(offset, limit, tag)
    .then(i => {
      res.status(200).json(i);
    })
    .catch(error => {
      res.status(400).json({ message: "Failed to fetch ideas", error: error });
    });
}

/**
 * Get a single idea based on its mongoose id
 * @param req.params.id - mongoose id of the idea
 * @returns void
 */
export function getIdea(req, res) {
  let id = req.params.id;

  Ideas.get({ idea_id: id })
    .then(i => {
      res.status(200).json(i);
    })
    .catch(error => {
      res.status(400).json({ message: "Failed to fetch idea", error: error });
    });

  // _ideas
  //   .getIdea(id)
  //   .then(i => {
  //     res.status(200).json(i);
  //   })
  //   .catch(error=> {
  //     res.status(400).json({ message: "Failed to fetch idea", error: error});
  //   });
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
export async function newIdea(req, res) {
  let i = {};
  let project = undefined;
  let stringBody;
  if (req.body.title != undefined) {
    i.idea_name = req.body.title;
  }
  //if (req.body.tags != undefined) {i.tags = sanitizeTags(req.body.tags)}
  if (req.body.tags != undefined) {
    i.tags = req.body.tags;
  }
  if (req.body.projectID != undefined) {
    project = req.body.projectID;
  }
  if (req.body.body != undefined) {
    i.body = req.body.body;
  }
  if (req.body.stringBody != undefined) {
    i.string_body = req.body.stringBody;
  }

  if (req.body.private != undefined) {
    i.private = req.body.private;
  }

  i.creator = req.body.user.id;
  console.log("i: ", i);

  try {
    const projectID = req.body.projectID;
    const newIdea = await Ideas.create(i);
    console.log("newIdea: ", newIdea);
    ProjectIdeas.create({
      project_id: projectID,
      idea_id: newIdea[0].idea_id
    })
      .then(i => {
        res.status(200).json(newIdea);
      })
      .catch(error => {
        console.log("error: ", error);
        Ideas.delete({ idea_id: newIdea[0].idea_id }).then(() => {
          return res
            .status(400)
            .json({ message: "Failed to create idea", error: error });
        });
      });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to create idea", error: error });
  }

  // _ideas
  //   .newIdea(i, project, stringBody)
  //   .then(i => {
  //     res.status(200).json(i);
  //   })
  //   .catch(error=> {
  //     res.status(400).json({ message: "Failed to fetch idea", error: error});
  //   });
}

/**
 * Delete a posted Idea
 * @param req.params.id - mongoose id of idea to be removed
 * @param req.user - JWT payload of authenticated user
 * @returns void
 */
export async function deleteIdea(req, res) {
  let id = req.params.id;
  let user = req.body.user.id;

  try {
    const [idea] = await Ideas.get({ idea_id: id });
    if (idea.creator === user)
      return Ideas.update({ idea_id: id, deleted: true })
        .then(i => {
          res.status(200).json(["Successfully deleted idea", i]);
        })
        .catch(error => {
          res
            .status(400)
            .json({ message: "Failed to delete idea", error: error });
        });
    return res.status(200).json(["The user Provided is incorrect", i]);
  } catch (error) {
    res.status(400).json({ message: "Failed to delete idea", error: error });
  }

  // _ideas
  //   .deleteIdea(id, user)
  //   .then(i => {
  //     res.status(200).json(["Successfully deleted idea", i]);
  //   })
  //   .catch(error=> {
  //     res.status(400).json({ message: "Failed to delete idea", error: error});
  //   });
}

/**
 * Delete a posted Idea
 * @param req.params.ideaID - mongoose id of idea the blob belongs to
 * @param req.params.blobID - mongoose id of idea the blob belongs to blob is comment
 * @param req.user - JWT payload of authenticated user
 * @returns void
 */
export async function deleteBlob(req, res) {
  let ideaID = req.params.ideaID;
  let commentID = req.body.blobID;
  let user = req.body.user.id;
  console.log("user: ", user);

  try {
    const [comment] = await Comments.get({ comment_id: commentID });
    console.log("comment: ", comment);
    console.log("comment.creator: ", comment.user);
    if (comment.user != user)
      return res.status(401).json({ message: "Not authorised to delete blob" });

    await Comments.update({ comment_id: commentID, deleted: true });

    const [ideaComment] = await IdeaComments.get({
      idea_id: ideaID,
      comment_id: commentID
    });

    await IdeaComments.update({
      idea_comment_id: ideaComment.idea_comment_id,
      deleted: true
    }).then(i => {
      res.status(200).json(["Successfully deleted blob", i]);
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete blob", error: error });
  }
  // _ideas
  //   .deleteBlob(ideaID, blobID, user)
  //   .then(i => {
  //     res.status(200).json(["Successfully deleted blob", i]);
  //   })
  //   .catch(error => {
  //     res.status(400).json({ message: "Failed to delete blob", error: error });
  //   });
}

/**
 * Create a new blob (i.e. comment) on an idea
 * @param req.user - JWT payload of authenticated user
 * @param req.params.id - mongoose id of the idea being blobbed
 * @param req.body.nest - mongoose id of the blob this blob comments on (nests from).. can be undefined, subcomment
 * @param req.body.body - blob content
 * @param req.body.stringBody - string form of body, used for search indexing
 * @returns void
 **/
export async function newBlob(req, res) {
  const nest = req.body.nest ? req.body.nest : null;

  let ib = {
    user: req.body.user.id,
    body: req.body.body,
    parent_comment: nest
  };

  const ideaID = req.params.id;

  try {
    if (ib.parent_comment) {
      const parentIdeaComment = await IdeaComments.get({
        comment_id: ib.parent_comment,
        idea_id: ideaID
      });
      if (parentIdeaComment.length === 0)
        return res
          .status(400)
          .json({ message: "Your parent comment is not on the same idea" });
    }

    const [comment] = await Comments.create(ib);
    const userComment = await UserComments.create({
      user_id: ib.user,
      comment_id: comment.comment_id
    });
    const ideaComment = await IdeaComments.create({
      idea_id: ideaID,
      comment_id: comment.comment_id
    });

    return res.status(200).json({ blob: comment });
  } catch (error) {
    console.log("error: ", error);
    return res
      .status(400)
      .json({ message: "Failed to create blob", error: error });
  }

  // const nest = req.body.nest

  // let stringBody = undefined;
  // if (req.body.stringBody != undefined) {
  //   stringBody = req.body.stringBody;
  // }

  // _ideas
  //   .newBlob(ib, stringBody)
  //   .then(arr => {
  //     res.status(200).json({ blob: arr[1], idea: arr[0] });
  //   })
  //   .catch(error => {
  //     res.status(400).json({ message: "Failed to create blob", error: error });
  //   });
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
export async function editIdea(req, res) {
  console.log(req.body);
  let id = req.params.id;
  let body;
  let tags = req.body.tags;
  let user = req.body.user.id;
  let stringBody = undefined;

  if (req.body.stringBody != undefined) {
    stringBody = req.body.stringBody;
  }

  try {
    //body = JSON.parse(req.body.body);
    body = req.body.body;
    const [oldIdea] = await Ideas.get({ idea_id: id });

    if (oldIdea.creator != user)
      return res
        .status(401)
        .json({ message: "User not authorised to edit the idea" });

    await Ideas.update({
      idea_id: id,
      body: body,
      tags: tags,
      creator: user,
      string_body: stringBody
    })
      .then(i => {
        res.status(200).json(["Successfully edited idea", i]);
      })
      .catch(error => {
        res.status(400).json({ message: "Failed to edit idea", error: error });
      });
  } catch (err) {
    res.status(400).json({ message: "Failed to edit idea", error: err });
  }

  // _ideas
  //   .editIdea(id, user, body, tags, stringBody)
  //   .then(i => {
  //     res.status(200).json(["Successfully edited idea", i]);
  //   })
  //   .catch(error => {
  //     res.status(400).json({ message: "Failed to edit idea", error: error });
  //   });
}

/**
 * Edit an idea blob
 * @param req.params.id - mongoose id of blob for editing
 * @param req.body.body - blob content for editing
 * @param req.body.stringBody - string form of body, used for search indexing
 * @param req.user - JWT payload of authenticated user
 * @returns void
 **/
export async function editBlob(req, res) {
  let id = req.params.id;
  let body;
  let user = req.body.user.id;
  let stringBody = undefined;
  if (req.body.stringBody != undefined) {
    stringBody = req.body.stringBody;
  }

  try {
    //body = JSON.parse(req.body.body);
    body = req.body.body;

    const userComment = await UserComments.get({
      user_id: user,
      comment_id: id
    });

    if (userComment.length === 0)
      return res
        .status(401)
        .json(["This user is not authorised to delete this comment", i]);

    Comments.update({
      comment_id: id,
      body: body
    })
      .then(i => {
        return res.status(200).json(["Successfully edited comment", i]);
      })
      .catch(error => {
        res
          .status(400)
          .json({ message: "Failed to edit comment", error: error });
      });
  } catch (err) {
    body = null;
    return res
      .status(400)
      .json({ message: "Failed to edit comment", error: error });
  }

  // _ideas
  //   .editBlob(id, user, body, stringBody)
  //   .then(i => {
  //     res.status(200).json(["Successfully edited comment", i]);
  //   })
  //   .catch(error => {
  //     res.status(400).json({ message: "Failed to edit comment", error: error });
  //   });
}
