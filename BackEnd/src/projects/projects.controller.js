// import * as _ideas from "./ideas.util";
import { sanitizeTags } from "../util/helpers.util";
// import * as _test from "./ideas.test";
import Projects from "../pgModels/projects";
import Users from "../pgModels/users";
import UserProjects from "../pgModels/user_projects";

import { getUsers } from "../user/user.controller";
// import ProjectIdeas from "../pgModels/project_ideas";
// import Comments from "../pgModels/comments";
// import IdeaComments from "../pgModels/idea_comments";
// import UserComments from "../pgModels/user_comments";

/**
 * Vote on either an project or a comment (upvote / downvote)
 * @param {String} req.params.which - project / blob
 * @param {Number} req.params.up - 1 / 0  [1 = upvote, 0 = downvote]
 * @param {id} req.params.id - the mongodb id for either the project or the blob
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
 * Get 50 projects, sorted by date, includes pagination functionality, can filter by tag
 * @param req.body.limit - the number of projects to get per page
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

  return Projects.getAll(offset, limit, tag)
    .then(i => {
      res.status(200).json(i);
    })
    .catch(error => {
      res
        .status(400)
        .json({ message: "Failed to fetch projects", error: error });
    });
}

// /**
//  * Get a single project based on its project_id
//  * @param req.params.id - project_id of the project
//  * @returns void
//  */
export function getProject(req, res) {
  let id = req.params.id;

  Projects.get({ project_id: id })
    .then(i => {
      res.status(200).json(i);
    })
    .catch(error => {
      res
        .status(400)
        .json({ message: "Failed to fetch project", error: error });
    });
}

// /**
//  * Create a new project
//  * @param req.body.project_name - title of the project (string)
//  * @param req.body.description - text body of the project [non specified type, in order to accept Quill]
//  * @param req.body.tags - tags, represented as COMMA SEPARATED WORD STRINGS
//  * @param req.body.description - text description of the project (string)
//  * @param req.user - JWT payload of authenticated user
//  * @returns void
//  */
export async function newProject(req, res) {
  let i = {};
  if (req.body.project_name != undefined) {
    i.project_name = req.body.project_name;
  }
  if (req.body.tags != undefined) {
    i.tags = sanitizeTags(req.body.tags);
  }
  if (req.body.tags != undefined) {
    i.tags = req.body.tags;
  }
  if (req.body.description != undefined) {
    i.description = req.body.description;
  }
  if (req.body.stringBody != undefined) {
    i.string_body = req.body.stringBody;
  }

  if (req.body.private != undefined) {
    i.private = req.body.private;
  }

  i.creator = req.body.user.user_id;
  if (req.body.social_links != undefined) {
    i.social_links = req.body.social_links;
  }
  if (req.body.wallet_links != undefined) {
    i.wallet_links = req.body.wallet_links;
  }
  if (req.body.due_date != undefined) {
    i.due_date = new Date(req.body.due_date);
  }

  try {
    const user = await Users.get({ user_id: i.creator });
    if (user.length === 0)
      res.status(400).json({
        success: false,
        message: "The user does not exist"
      });

    const [newProject] = await Projects.create(i);

    UserProjects.create({
      user_id: user.user_id,
      project_id: newProject.project_id
    })
      .then(i => {
        res.status(200).json(newProject);
      })
      .catch(error => {
        console.log("error: ", error);
        Projects.delete({ project_id: newProject.project_id }).then(() => {
          return res
            .status(400)
            .json({ message: "Failed to create project", error: error });
        });
      });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: "Failed to create project", error: error });
  }
}

// /**
//  * Edit the tags and/or body of an project
//  * @param req.params.id - project_id of the project being edited
//  * @param req.body.body - project content for editing
//  * @param req.body.tags - project tags for editing... COMMA SEPARATED WORD STRINGS
//  * @param req.body.stringBody - string form of body, used for search indexing
//  * @param req.user - JWT payload of authenticated user
//  * @returns void
//  */
export async function editProject(req, res) {
  let id = req.params.id;
  let i = {};
  if (req.body.project_name != undefined) {
    i.project_name = req.body.project_name;
  }
  if (req.body.tags != undefined) {
    i.tags = sanitizeTags(req.body.tags);
  }
  if (req.body.description != undefined) {
    i.description = req.body.description;
  }
  if (req.body.stringBody != undefined) {
    i.string_body = req.body.stringBody;
  }

  if (req.body.private != undefined) {
    i.private = req.body.private;
  }
  if (req.body.contributors != undefined) {
    i.contributors = req.body.contributors;
  }

  i.creator = req.body.user.user_id;
  if (req.body.social_links != undefined) {
    i.social_links = req.body.social_links;
  }
  if (req.body.wallet_links != undefined) {
    i.wallet_links = req.body.wallet_links;
  }
  if (req.body.due_date != undefined) {
    i.due_date = new Date(req.body.due_date);
  }

  try {
    const [oldProject] = await Projects.get({ project_id: id });

    if (oldProject.creator != i.creator)
      return res
        .status(401)
        .json({ message: "User not authorised to edit the project" });
    i.project_id = id;
    await Projects.update(i)
      .then(i => {
        res.status(200).json(["Successfully edited project", i]);
      })
      .catch(error => {
        console.log("error: ", error);
        res
          .status(400)
          .json({ message: "Failed to edit project", error: error });
      });
  } catch (err) {
    console.log("err: ", err);
    res.status(400).json({ message: "Failed to edit project", error: err });
  }
}

/**
 * Delete a project
 * @param req.params.id - project_id of project to be removed
 * @param req.user - JWT payload of authenticated user
 * @returns void
 */
export async function deleteProject(req, res) {
  let id = req.params.id;
  let user_id = req.body.user.user_id;

  try {
    const [project] = await Projects.get({ project_id: id });
    if (project.creator === user_id)
      return Projects.update({ project_id: id, deleted: true })
        .then(i => {
          res.status(200).json(["Successfully deleted project"]);
        })
        .catch(error => {
          res
            .status(400)
            .json({ message: "Failed to delete project", error: error });
        });
    return res.status(200).json(["The user Provided is incorrect", i]);
  } catch (error) {
    res.status(400).json({ message: "Failed to delete project", error: error });
  }
}

// /**
//  * Delete a posted Idea
//  * @param req.params.ideaID - project_id of project the blob belongs to
//  * @param req.params.blobID - project_id of project the blob belongs to blob is comment
//  * @param req.user - JWT payload of authenticated user
//  * @returns void
//  */
// export async function deleteBlob(req, res) {
//   let projectID = req.params.ideaID;
//   let commentID = req.body.blobID;
//   let user = req.body.user.id;
//   console.log("user: ", user);

//   try {
//     const [comment] = await Comments.get({ comment_id: commentID });
//     console.log("comment: ", comment);
//     console.log("comment.creator: ", comment.user);
//     if (comment.user != user)
//       return res.status(401).json({ message: "Not authorised to delete blob" });

//     await Comments.update({ comment_id: commentID, deleted: true });

//     const [ideaComment] = await IdeaComments.get({
//       project_id: projectID,
//       comment_id: commentID
//     });

//     await IdeaComments.update({
//       project_comment_id: projectComment.idea_comment_id,
//       deleted: true
//     }).then(i => {
//       res.status(200).json(["Successfully deleted blob", i]);
//     });
//   } catch (error) {
//     res.status(400).json({ message: "Failed to delete blob", error: error });
//   }
//   // _ideas
//   //   .deleteBlob(ideaID, blobID, user)
//   //   .then(i => {
//   //     res.status(200).json(["Successfully deleted blob", i]);
//   //   })
//   //   .catch(error => {
//   //     res.status(400).json({ message: "Failed to delete blob", error: error });
//   //   });
// }

// /**
//  * Create a new blob (i.e. comment) on an project
//  * @param req.user - JWT payload of authenticated user
//  * @param req.params.id - project_id of the project being blobbed
//  * @param req.body.nest - project_id of the blob this blob comments on (nests from).. can be undefined, subcomment
//  * @param req.body.body - blob content
//  * @param req.body.stringBody - string form of body, used for search indexing
//  * @returns void
//  **/
// export async function newBlob(req, res) {
//   const nest = req.body.nest ? req.body.nest : null;

//   let ib = {
//     user: req.body.user.id,
//     body: req.body.body,
//     parent_comment: nest
//   };

//   const projectID = req.params.id;

//   try {
//     if (ib.parent_comment) {
//       const parentIdeaComment = await IdeaComments.get({
//         comment_id: ib.parent_comment,
//         project_id: projectID
//       });
//       if (parentIdeaComment.length === 0)
//         return res
//           .status(400)
//           .json({ message: "Your parent comment is not on the same project" });
//     }

//     const [comment] = await Comments.create(ib);
//     const userComment = await UserComments.create({
//       user_id: ib.user,
//       comment_id: comment.comment_id
//     });
//     const projectComment = await IdeaComments.create({
//       project_id: projectID,
//       comment_id: comment.comment_id
//     });

//     return res.status(200).json({ blob: comment });
//   } catch (error) {
//     console.log("error: ", error);
//     return res
//       .status(400)
//       .json({ message: "Failed to create blob", error: error });
//   }

//   // const nest = req.body.nest

//   // let stringBody = undefined;
//   // if (req.body.stringBody != undefined) {
//   //   stringBody = req.body.stringBody;
//   // }

//   // _ideas
//   //   .newBlob(ib, stringBody)
//   //   .then(arr => {
//   //     res.status(200).json({ blob: arr[1], project: arr[0] });
//   //   })
//   //   .catch(error => {
//   //     res.status(400).json({ message: "Failed to create blob", error: error });
//   //   });
// }

// /**
//  * Edit an project blob
//  * @param req.params.id - project_id of blob for editing
//  * @param req.body.body - blob content for editing
//  * @param req.body.stringBody - string form of body, used for search indexing
//  * @param req.user - JWT payload of authenticated user
//  * @returns void
//  **/
// export async function editBlob(req, res) {
//   let id = req.params.id;
//   let body;
//   let user = req.body.user.id;
//   let stringBody = undefined;
//   if (req.body.stringBody != undefined) {
//     stringBody = req.body.stringBody;
//   }

//   try {
//     //body = JSON.parse(req.body.body);
//     body = req.body.body;

//     const userComment = await UserComments.get({
//       user_id: user,
//       comment_id: id
//     });

//     if (userComment.length === 0)
//       return res
//         .status(401)
//         .json(["This user is not authorised to delete this comment", i]);

//     Comments.update({
//       comment_id: id,
//       body: body
//     })
//       .then(i => {
//         return res.status(200).json(["Successfully edited comment", i]);
//       })
//       .catch(error => {
//         res
//           .status(400)
//           .json({ message: "Failed to edit comment", error: error });
//       });
//   } catch (err) {
//     body = null;
//     return res
//       .status(400)
//       .json({ message: "Failed to edit comment", error: error });
//   }

//   // _ideas
//   //   .editBlob(id, user, body, stringBody)
//   //   .then(i => {
//   //     res.status(200).json(["Successfully edited comment", i]);
//   //   })
//   //   .catch(error => {
//   //     res.status(400).json({ message: "Failed to edit comment", error: error });
//   //   });
// }
