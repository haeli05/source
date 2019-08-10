import * as _user from "./user.util";
import mongoose from "mongoose";
import { sanitizeTags } from "../util/helpers.util";

const Users = require("../pgModels/users");
const Projects = require("../pgModels/projects");
const UserProjects = require("../pgModels/user_projects");
const UserFollowers = require("../pgModels/user_followers");

/**
 * update user information
 * @param {String} req.body.name - name to update
 * @param {String} req.body.bio - bio to update
 * @param {String} req.body.location - location to update TODO: make this a real location tag
 * @param {String} req.body.website - user website to update
 * @param {Array} req.body.skills - skills to update (can't be more than 4)
 * @param {Array} req.body.social - social links to update (can't be more than 10)
 * @param {String} req.body.description - description to update
 * @param {JSON} req.user - JWT of authenticated user
 * @returns user object
 **/
export function updateUser(req, res) {
  const cleaned = {};
  req.body.name == undefined ? true : (cleaned.full_name = req.body.name);
  req.body.bio == undefined ? true : (cleaned.bio = req.body.bio);
  req.body.location == undefined
    ? true
    : (cleaned.location = req.body.location);
  req.body.website == undefined ? true : (cleaned.website = req.body.website);
  // req.body.description == undefined
  //   ? true
  //   : (cleaned.description = req.body.description); omitted in the new schema
  req.body.skills == undefined
    ? true
    : (cleaned.skills = sanitizeTags(req.body.skills));
  req.body.social == undefined
    ? true
    : (cleaned.social_links = req.body.social);
  const userId = req.user.id;
  cleaned.user_id = userId;

  Users.update(cleaned)
    .then(updatedUser => {
      return res.status(200).json(updatedUser);
    })
    .catch(err => {
      return res.status(400).json("error updating user " + err);
    });

  // _user
  //   .updateUser(cleaned, userId)
  //   .then(updatedUser => {
  //     res.status(200).json(updatedUser);
  //   })
  //   .catch(err => {
  //     res.status(400).json("error updating user " + err);
  //   });
}

export function deleteUser(req, res) {
  let username = req.params.username;

  Users.delete({ username })
    .then(i => {
      return res.status(200).json(["Successfully deleted user", i]);
    })
    .catch(err => {
      return res
        .status(400)
        .json({ message: "Failed to delete user", error: err });
    });

  // _user
  //   .deleteUser(username)
  //   .then(i => {
  //     res.status(200).json(["Successfully deleted user", i]);
  //   })
  //   .catch(err => {
  //     res.status(400).json({ message: "Failed to delete user", error: err });
  //   });
}

/**
 * follow either an issue, project, or idea
 * @param {String} req.body.id - Mongoose id of the object to follow
 * @param {String} req.body.type - type of object being followed (issue / project / idea)
 * @param {JSON} req.user - JWT of authenticated user
 * @returns
 **/

// Follow topic ignored only Follow tags tags to it
// export function followTopic(req, res) {
//   const id = req.body.id;
//   const userId = req.user.id;

//   let type = req.body.type;
//   if (["idea", "ideas"].includes(type)) {
//     type = "idea";
//   } else if (["repo", "repos", "project", "projects"].includes(type)) {
//     type = "repo";
//   } else if (["issue", "issues"].includes(type)) {
//     type = "issues";
//   }

//   if (type == undefined) {
//     res.status(400).json("failed to provide correct object type to follow");
//     return;
//   }
//   if (id == undefined) {
//     res.status(400).json("failed to provide object ID to follow");
//     return;
//   }

//   _user
//     .followTopic(id, type, userId)
//     .then(followed => {
//       res.status(200).json(followed);
//     })
//     .catch(err => {
//       res.status(400).json("error following object " + err);
//     });
// }

/**
 * follow tags
 * @param {Array} req.body.tags - tag or tags to follow
 * @param {JSON} req.user - JWT of authenticated user
 * @returns
 **/
export async function followTags(req, res) {
  const userId = req.user.id;
  const tags = sanitizeTags(req.body.tags);

  try {
    const user = Users.get({ user_id: userId });
    let { tags_following } = user;
    tags_following = [...tags_following, ...tags];

    Users.update({ tags_following }).then(followed => {
      res.status(200).json(followed);
    });
  } catch (error) {
    return res.status(400).json("error following tags " + err);
  }

  // _user
  //   .followTags(tags, userId)
  //   .then(followed => {
  //     res.status(200).json(followed);
  //   })
  //   .catch(err => {
  //     res.status(400).json("error following tags " + err);
  //   });
}

/**
 * Get a feed of followed topics / tags
 * @param {Array} req.query.sort - trending / popularity
 * @param {String} req.query.ideaId - the _id of the last idea seen (for pagination)
 * @param {String} req.query.projectId - the _id of the last project seen (for pagination)
 * @returns {JSON}
 **/

//Only getting the Followed tags as per the Schema

export function followingFeed(req, res) {
  const userId = req.params.id;
  const sort =
    req.query.sort === "trending" || req.query.sort === "popularity"
      ? req.query.sort
      : undefined;
  const ideaId = req.query.ideaId;
  const projectId = req.query.projectId;

  Users.get({ user_id: userId })
    .then(user => {
      const { tags_following } = user;
      res.status(200).json(tags_following);
    })
    .catch(err => {
      res.status(400).json("error generating following feed " + err);
    });

  // _user
  //   .followingFeed(userId, sort, ideaId, projectId)
  //   .then(feed => {
  //     res.status(200).json(feed);
  //   })
  //   .catch(err => {
  //     res.status(400).json("error generating following feed " + err);
  //   });
}

/**
 * Get a feed of everything the user has voted on
 * @returns {JSON}
 **/

//Left in the new Controllers

// export function votedFeed(req, res) {
//   const userId = req.params.id;

//   _user
//     .votedFeed(userId)
//     .then(feed => {
//       res.status(200).json(feed);
//     })
//     .catch(err => {
//       res.status(400).json("error generating voted feed " + err);
//     });
// }

/**
 * add avatar to user
 * @param {String} req.body.key - the key of the avatar
 * @param {String} req.body.url - the url of the image hosting service
 * @param {JSON} req.user - JWT of authenticated user
 * @returns JSON of account balance
 **/
export function addAvatar(req, res) {
  const key = req.body.key;
  const url = req.body.url;
  const user = req.user.id;
  if (!user) {
    res.status(400).json("User not signed in");
    return;
  }
  if (!key || !url) {
    res.status(400).json("Malformed inputs");
    return;
  }

  const fullUrl = url + "/" + key;

  Users.update({ avatar: fullUrl })
    .then(() => {
      res.status(200).json("Added avatar");
    })
    .catch(err => {
      res.status(400).json("error adding avatar " + err);
    });

  // _user
  //   .addAvatar(user, fullUrl)
  //   .then(() => {
  //     res.status(200).json("Added avatar");
  //   })
  //   .catch(err => {
  //     res.status(400).json("error adding avatar " + err);
  //   });
}

/**
 * Function returns the balance of an account
 * @param {String} req.params.username - Username
 * @param {JSON} res - Response JSON object
 * @returns JSON of account balance
 **/

//Not present in the new Schema

// export function getBalance(req, res) {
//   let account = req.params.username;
//   _user
//     .getBalance(account)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       let error = JSON.parse(err.message).error.details[0].message;
//       console.log("ERROR Retrieving User Balance", error);
//       res.status(400).json({
//         message: "Error Finding Balance",
//         error: error
//       });
//     });
// }

/**
 * Get a user's public information
 * @param {JSON} req.params.id - mongoose id of user
 * @param {JSON} res - Response JSON object
 * @returns JSON of account balance
 **/
export function getUser(req, res) {
  let id = req.params.id;

  Users.get({ user_id: id })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({
        message: "Error Getting User",
        error: err
      });
    });

  // _user
  //   .getUser(id)
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json({
  //       message: "Error Getting User",
  //       error: err
  //     });
  //   });
}

/**
 * Get the gitlab user information about a specific user
 * @param {JSON} req.params.id - mongoose id of a user
 * @returns JSON of gitlab account / error
 **/

//Not Present in the new schema

// export function getUserGL(req, res) {
//   const id = req.params.id;
//   _user
//     .getUserGL(id)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res
//         .status(400)
//         .json({ message: "Error fetching user Gitlab profile", error: err });
//     });
// }

/**
 * Create new user on Gitlab
 * @param  req.body.email - user's email
 * @param  req.body.username - user's username
 * @param  req.body.name - user's name
 * @param  req.body.password - user's password
 * @returns JSON of gitlab account / error
 **/

//Not Present in the new schema

// export function newUserGL(req, res) {
//   const info = {
//     email: req.body.email,
//     username: req.body.username,
//     name: req.body.name,
//     password: req.body.password
//   };

//   _user
//     .newUserGL(info)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res
//         .status(400)
//         .json({ message: "Error creating gitlab account", error: err });
//     });
// }

/**
 * Function logs a userin
 * @param {JSON} req.body.username - Username
 * @param {JSON} req.body.password - Password
 * @param {JSON} res - Response JSON object
 * @returns JSON of account balance
 **/

export function login(req, res) {
  let username = "";
  let password = "";
  if (req.body.username && req.body.password) {
    username = req.body.username;
    password = req.body.password;
  } else {
    res.status(400).json({
      message: "Error logging In",
      error: "No username or password specified"
    });
    return;
  }
  //New Model Integrated in the Older Util
  _user
    .login(username, password)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(400).json({ message: "Error Signing in User", error: error });
    });
}

/**
 * Function retrives all users
 * @param {JSON} req - Request JSON object
 * @param {JSON} res - Response JSON object
 * @returns JSON of all users
 **/
export function getUsers(req, res) {
  Users.getAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({
        message: "Error Retrieving All Users",
        error: err
      });
    });
  // _user
  //   .getUsers()
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json({
  //       message: "Error Retrieving All Users",
  //       error: err
  //     });
  //   });
}

/**
 * Function creates a new user
 * @param  req.body.email - user's email
 * @param  req.body.username - user's username
 * @param  req.body.name - user's name
 * @param  req.body.password - user's password
 * @param  req.body.invitecode - invite code
 */
export function newUser(req, res) {
  let info = {
    username: req.body.username,
    email: req.body.email,
    full_name: req.body.name,
    password: req.body.password
  };

  Users.create(info)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: "Error creating user",
        error: err
      });
    });

  // let info = {
  //   username: req.body.username,
  //   email: req.body.email,
  //   name: req.body.name,
  //   password: req.body.password,
  //   invitecode: req.body.invitecode
  // };

  // _user
  //   .newUser(info)
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(400).json({
  //       message: "Error creating user",
  //       error: err
  //     });
  //   });
}

/**
 * Function retrieves a list a user's Project
 * @param {JSON} req.params.id - Mongoose id of the user
 * @param {JSON} res - Response JSON object
 * @returns JSON of all user projects
 **/
export async function listUserProjects(req, res) {
  let id = req.params.id;

  try {
    const userProjects = await UserProjects.get({ user_id: id });
    const projects = await Promise.all(
      userProjects.map(({ project_id }) =>
        Projects.get({ project_id }).then(data => data[0])
      )
    );
    return res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({
      message: "Error Retrieving User Projects",
      error: error
    });
  }

  // _user
  //   .listUserProjects(id)
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json({
  //       message: "Error Retrieving User Projects",
  //       error: err
  //     });
  //   });
}

/**
 * Add an SSH key for a user
 * @param req.body.ssh - the ssh key to add
 * @param req.body.title - title to accompany the ssh key
 * @param req.user - JWT of logged in user
 * @returns JSON of all user projects
 **/

//Not Present in the new schema

// export function addSSH(req, res) {
//   let ssh = req.body.ssh;
//   let gitlabToken = req.user.gitlabToken;
//   let title = req.body.title;

//   _user
//     .addSSH(ssh, title, gitlabToken)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(error => {
//       res.status(400).json({
//         message: "Error Adding SSH Key",
//         error: error
//       });
//     });
// }

/**
 * Delete ssh key
 * @param req.body.ssh - the ssh key to add
 * @param req.user - JWT of logged in user
 * @returns JSON of all user projects
 **/

//Not Present in the new schema

// export function delSSH(req, res) {
//   let key = req.body.ssh;
//   let auth = req.user.gitlabToken;
//   _user
//     .delSSH(key, auth)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         messsage: "Error deleting SSH Key",
//         error: err
//       });
//     });
// }

/**
 * List all ssh keys for a given user
 * @param req.user - JWT of logged in user
 * @returns JSON of all user projects
 **/
//Not Present in the new schema

// export function listSSH(req, res) {
//   let auth = req.user.gitlabToken;
//   _user
//     .listSSH(auth)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: "Error listing SSH Keys",
//         error: err
//       });
//     });
// }

/**
 * Function adds the id of a repo starred by a user
 * @param {JSON} req - Request JSON object
 * @param {JSON} res - Response JSON object
 **/
// export function pstar(req,res){
//   let username  = req.body.username;
//   let repo_id = mongoose.Types.ObjectId(req.body.repo_id);
//   _user.pstar(username,repo_id)
//     .then(data=>{
//       res.status(200).json(data)
//     })
//     .catch(err=>{
//       res.status(400).json({
//         message: "Error Starring For User",
//         error: err
//       });
//     });
// }
/**
 * Function adds or updates the list of pinned repos
 * @param {JSON} req - Request JSON object
 * @param {JSON} res - Response JSON object
 **/
// export function ppin(req,res){
//   let username = req.body.username;
//   let repo_id = mongoose.Types.ObjectId(req.body.repo_id);
//   _user.ppin(username,repo_id)
//     .then(data=>{
//       res.status(200).json(data)
//     })
//     .catch(err=>{
//       res.status(400).json({
//         message: "Error Starring For User",
//         error: err
//       });
//     });
// }

/**
 * Follow / Unfollow a user
 * @param {JSON} req.user - JWT of authenticated user following/unfollowing
 * @param {JSON} req.body.toFollow - mongoose ID of the user to follow/unfollow
 **/
export function follow(req, res) {
  let id = req.user.id;
  let toFollow = mongoose.Types.ObjectId(req.body.toFollow);

  UserFollowers.create({ user_id: id, user_follower: toFollow })
    .follow(id, toFollow)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({
        message: "Error Following User",
        error: err
      });
    });
  // _user
  //   .follow(id, toFollow)
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json({
  //       message: "Error Following User",
  //       error: err
  //     });
  //   });
}

/**
 * Get all projects starred by a user
 * @param {JSON} req.params.id - mongoose id of user
 * @returns Array of projects
 **/
//Not Present in the new schema

// export function gstar(req, res) {
//   let id = req.params.id;
//   _user
//     .gstar(id)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: "Error Getting Starred Projects",
//         error: err
//       });
//     });
// }
/**
 * Function gets the list of pinned repos
 * @param {JSON} req.params.id - mongoose id of user
 * @returns Array of projects
 **/

//Not Present in the new schema

// export function gpin(req, res) {
//   let id = req.params.id;
//   _user
//     .gpin(id)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: "Error Getting Pinned projects",
//         error: err
//       });
//     });
// }

/**
 * Grabs a user's following list
 * @param {JSON} req.params.id - Mongoose id of the user
 * @param {JSON} res - Response JSON object
 * @returns Array of users
 **/

//Not Present in the new schema

// export function gfollowing(req, res) {
//   let username = req.params.id;
//   _user
//     .gfollowing(username)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: "Error Getting the following list",
//         error: err
//       });
//     });
// }

/**
 * Grabs a user's followers list
 * @param {JSON} req.params.id - Mongoose id of the user
 * @param {JSON} res - Response JSON object
 * @returns Array of users
 **/
export async function gfollowers(req, res) {
  const user_id = req.params.id;

  try {
    const userFollowers = await UserFollowers.get({ user_id: id });
    const followers = await Promise.all(
      userFollowers.map(({ user_follower }) =>
        Users.get({ user_id: user_follower }).then(data => data[0])
      )
    );
    return res.status(200).json(followers);
  } catch (error) {
    res.status(400).json({
      message: "Error Retrieving User Projects",
      error: error
    });
  }

  // let username = req.params.id;
  // _user
  //   .gfollowers(username)
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json({
  //       message: "Error Getting Followers",
  //       error: err
  //     });
  //   });
}

/**
 * Creates new Group with the Owner,Admin and Members
 * all set to the user
 * @param {JSON} req - Request JSON object
 * @param {JSON} res - Response JSON object
 * @returns JSON of the new Group
 */

//Not Present in the new schema

// export function newGroup(req, res) {
//   createGroup(req)
//     .then(group => {
//       let query = { username: req.body.username };
//       let update = name => {
//         return { $push: { groups_owned: name, groups_joined: name } };
//       };
//       User.findOneAndUpdate(query, update(group.name), { new: true }).then(
//         user => {
//           user.save().then(user_json => {
//             res.json({
//               Message: "New Group Created for User",
//               _user: user_json,
//               group_json: group
//             });
//           });
//         }
//       );
//     })
//     .catch(err => {
//       res.json({ message: "Group Creation Error", error: err });
//     });
// }

/**
 * Function transfers token from logged in user to another user.
 * Transfer gets done on EOS and gets recorded on mongo server
 * @param {JSON} req = Response object from newuser (receiver, src, message)
 */

//Not Present in the new schema

// export function transferToUser(req, res) {
//   let info = {
//     receiver: req.body.receiver,
//     src: req.body.src,
//     message: req.body.message,
//     sender: req.user.username
//   };

//   _user
//     .transferToUser(info)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: "Error Transfering SOURCE",
//         error: err
//       });
//     });
// }

/**
 * Function displays all transfers to a given user
 * @param {JSON} req.params.id = Mongoose ID of the user
 */

//Not Present in the new schema

// export function getTransfers(req, res) {
//   let id = req.params.id;
//   _user
//     .getTransfers(id)
//     .then(data => {
//       res.status(200).json(data);
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: "Error Getting Transfers",
//         error: err
//       });
//     });
// }

//reset password

//Not Present in the new schema

// export async function passwordResetRequest(req, res) {
//   let email = req.body.email;
//   let url = req.headers.origin;
//   if (!email) res.status(400).json({ Error: "Email is required" });
//   _user
//     .passwordResetRequest(email, url)
//     .then(success => {
//       res.status(200).json({ Message: "Success" });
//     })
//     .catch(err => {
//       res.status(400).json({ Error: err });
//     });
// }


//Not Present in the new schema

// export function changePassword(req, res) {
//   let token = req.body.token;
//   let newPassword = req.body.newPassword;
//   _user
//     .changePassword(token, newPassword)
//     .then(success => {
//       res.status(200).json({ Message: "Success" });
//     })
//     .catch(err => {
//       res.status(400).json({ Error: err });
//     });
// }

export function isUserInDB(req, res) {
  let username = req.params.username;
  Users.get({username})
    .then(data => {
      if (data.length===1) return res.status(200).json(data);
      return  res.status(404).json({ message: "User Not found" });

    })
    .catch(err => {
      res.status(400).json({ Error: err });
    });
  // _user
  //   .isUsernameInDB(username)
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json({ Error: err });
  //   });
}
