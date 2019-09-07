import { sanitizeTags } from "../util/helpers.util";
import Projects from "../pgModels/projects";
import Users from "../pgModels/users";
import UserProjects from "../pgModels/user_projects";

/**
 * Get 50 projects, sorted by date, includes pagination functionality, can filter by tag
 * @param req.body.limit - the number of projects to get per page
 * @param req.body.offset - offset for the query based on the previous paginated (used for pagination)
 * @param req.body.tag - tag to filter by
 * @returns void
 */

export function getAll(req, res) {
  let limit;
  try {
    limit = parseInt(req.body.limit);
  } catch (err) {
    limit = undefined;
  }
  if (limit == undefined || limit == NaN) {
    limit = 50;
  }
  let offset = req.body.last == undefined ? 0 : parseInt(req.body.offset);
  let tag = req.body.tag == undefined ? null : req.body.tag;
  // const user_id = req.user.id;
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
  const user_id = req.user.id;
  Projects.get({ project_id: id })
    .then(i => {
      console.log("i: ", i);
      if (i[0] && i[0].creator !== user_id)
        return res
          .status(401)
          .json({ message: "Not Authorised to access this project" });

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

  i.creator = req.user.id;
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

  i.creator = req.user.id;
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
  let user_id = req.user.id;
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
