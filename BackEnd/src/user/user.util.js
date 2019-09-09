// import User from "../models/user";
import Users from "../pgModels/users";

import FollowTopic from "../models/followTopic";
import Upvote from "../models/upvotes";
// import Transfer from "../models/transfer";
import ecc from "eosjs-ecc";
// import * as eosUtil from "../util/eos.util";
import mongoose from "mongoose";
// import { awsToken } from "./../storage/storage.util";
import ResetPassToken from "../models/resetPassToken";
import transporter from "../config";
import bcrypt from "bcrypt";
import { tokenGenerate } from "../util/authenticate.util";

// import { searchTags } from "../search/search.controller";

// /**
//  * Function logs a user in and sends her an AWS token
//  * @param {JSON} username - Username
//  * @param {JSON} password - Password
//  * @returns Response with signed JWT and user information
//  * @throws {String}
//  **/
export function login(username, password) {
  return new Promise((resolve, reject) => {
    Users.authenticate(username, password, async function(err, user) {
      if (!err) {
        let payload = {
          username: user.username,
          id: user.user_id,
          email: user.email,
          issuer: "https://sourcenetwork.io"
        };
        let token = tokenGenerate(payload);
        delete user.password;

        resolve({ message: "Sign-in Successful", user, token: token });

        // TODO: AWS when new API has been configured
        /*awsToken()
        .then((awsObj) => {
          resolve({message: 'Sign-in Successful', user, token: token, aws: awsObj})
        })
        .catch(err => {reject('Failed to get AWS Token: ' + err)})
        */
      } else {
        reject("Username or Password Incorrect");
      }
    });
    // User.authenticate(username, password, async function(err, user) {
    //   if (!err) {
    //     let payload = {
    //       username: user.username,
    //       id: user._id,
    //       email: user.email,
    //       issuer: "https://sourcenetwork.io"
    //     };
    //     let token = tokenGenerate(payload);
    //     user = user.toObject();
    //     delete user.password;

    //     resolve({ message: "Sign-in Successful", user, token: token });

    //     // TODO: AWS when new API has been configured
    //     /*awsToken()
    //     .then((awsObj) => {
    //       resolve({message: 'Sign-in Successful', user, token: token, aws: awsObj})
    //     })
    //     .catch(err => {reject('Failed to get AWS Token: ' + err)})
    //     */
    //   } else {
    //     reject("Username or Password Incorrect");
    //   }
    // });
  });
}

// const stats = {
//   follow: 100,
//   new: 7
// };

// export function deleteUser(username) {
//   return User.remove({ username: username })
//     .then(result => {
//       console.log("deleted!");
//       resolve(result);
//     })
//     .catch(err => {
//       reject(["Mongoose", err]);
//     });
// }

// export function addAvatar(id, fullUrl) {
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     throw "Invalid Mongoose User ID";
//   }
//   return User.findByIdAndUpdate(id, { avatar: fullUrl })
//     .then(data => {
//       return data;
//     })
//     .catch(err => {
//       return err;
//     });
// }

// export async function followTopic(id, type, userId) {
//   let response = "";
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     throw "Invalid Mongoose topic ID";
//   }
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     throw "Invalid Mongoose userId";
//   }

//   const topic = await FollowTopic.findOne({ userId: userId, id: id }).catch(
//     err => {
//       throw err;
//     }
//   );
//   if (topic == null) {
//     await FollowTopic.create({ userId: userId, id: id, onModel: type }).catch(
//       err => {
//         throw err;
//       }
//     );
//     response = `followed ${id}`;
//   } else {
//     await FollowTopic.deleteOne({ userId: userId, id: id }).catch(err => {
//       throw err;
//     });
//     response = `deleted ${id}`;
//   }
//   return response;
// }

// export async function followTags(tags, userId) {
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     throw "Invalid Mongoose userId";
//   }
//   let response = "";
//   let _tags = tags.slice(0, 100);
//   let toPull = [];
//   const user = await User.findById(userId)
//     .select("tags")
//     .catch(err => {
//       throw err;
//     });
//   for (let j = 0; j < _tags.length; j++) {
//     for (let i = 0; i < user.tags.length; i++) {
//       if (user.tags[i] === _tags[j]) {
//         toPull.push(_tags[j]);
//       }
//     }
//   }

//   await User.findByIdAndUpdate(
//     userId,
//     { $addToSet: { tags: _tags } },
//     { new: true }
//   ).catch(err => {
//     throw err;
//   });
//   const tagged = await User.findByIdAndUpdate(
//     userId,
//     { $pull: { tags: { $in: toPull } } },
//     { new: true }
//   )
//     .select("tags")
//     .catch(err => {
//       throw err;
//     });
//   return tagged;
// }

// // export async function followingFeed(userId, sort, ideaId, projectId) {
// //   if (!mongoose.Types.ObjectId.isValid(userId)) {
// //     throw "Invalid Mongoose userId";
// //   }

// //   const [user, topics] = await Promise.all([
// //     User.findById(userId).select("tags"),
// //     FollowTopic.find({ userId: userId })
// //       .select("-_id -user -userId -__v")
// //       .populate("id")
// //   ]).catch(err => {
// //     throw err;
// //   });

// //   let tags = await searchTags(user.tags, sort, ideaId, projectId).catch(err => {
// //     throw err;
// //   });

// //   return { tags: tags, topics: topics };
// // }

// export async function votedFeed(userId) {
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     throw "Invalid Mongoose userId";
//   }

//   const voted = await Upvote.find({ userId: userId })
//     .select("-_id -userId -__v -key")
//     .populate("objectId")
//     .catch(err => {
//       throw err;
//     });
//   return voted;
// }

// export async function updateUser(fields, userId) {
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     throw "Invalid Mongoose User ID";
//   }
//   /*fields['$push'] = {};
//   if (fields.skills) {
//     fields['$push']['skills'] = {'$each' : fields.skills}
//   }
//   if (fields.social) {
//     fields['$push']['social'] = {'$each' : fields.social}
//   }
//   delete fields.skills;
//   delete fields.social;*/
//   const user = await User.findByIdAndUpdate(userId, fields, {
//     new: true
//   }).catch(err => {
//     throw err;
//   });
//   return user;
// }

// /** TODO: getBalanceEOS doesn't work
//  * Function returns the balance of an account
//  * @param {JSON} account - Account name to query for
//  * @returns Promise of account balance
//  * @throws {String}
//  **/
// // export function getBalance(account) {
// //   return eosUtil.getBalanceEOS(account);
// // }

// export async function getUser(id) {
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return Promise.reject("Invalid Mongoose User ID");
//   }
//   const usr = User.findById(id)
//     .populate([
//       {
//         path: "projects",
//         select: "_id project_name date src_raised star_count"
//       },
//       {
//         path: "starred",
//         select: "_id project_name date src_raised star_count"
//       },
//       { path: "followers", select: "_id name username avatar" },
//       { path: "following", select: "_id name username avatar" }
//     ])
//     .catch(err => {
//       return Promise.reject(["Mongoose", err]);
//     });

//   return usr;
// }

// //TODO: Add filtering
// export function getUsers() {
//   return new Promise((resolve, reject) => {
//     User.find({}).then(users => {
//       if (users === undefined || users.length === 0) {
//         reject("No Users Found");
//       } else {
//         resolve(users);
//       }
//     });
//   });
// }

// /**
//  * Creates a new user
//  * email, username must be unique
//  *
//  * @param {JSON} info - email, password, username, name
//  * @returns {JSON} - user {JSON}, token {String}, eos_tx {JSON}
//  **/
// export async function newUser(info) {
//   info.username = info.username.toLowerCase();
//   const datum = ["email", "username", "name", "password"];
//   for (let i = 0; i < datum.length; i++) {
//     if (info[datum[i]] == undefined) {
//       return Promise.reject(datum[i] + " not specified");
//     }
//   }
//   await checkParams(info.username, info.email).catch(err => {
//     return Promise.reject(err);
//   });

//   let user = new User(info);

//   let [mongoUser] = await Promise.all([user.save()]).catch(err => {
//     return Promise.reject(err);
//   });

//   const payload = {
//     username: mongoUser.username,
//     userId: mongoUser._id,
//     email: mongoUser.email,
//     issuer: "https://sourcenetwork.io"
//   };

//   const tk = tokenGenerate(payload);

//   //return {user, token: tk, eos_tx: EOSUser};
//   return { user, token: tk };
// }

// // NEW USER BACKUP

// /*

// * Creates a new user on Gitlab, MongoDB, and EOS simultenously
// * email, username must be unique
// *
// * @param {JSON} info - email, password, username, name
// * @returns {JSON} - user {JSON}, token {String}, eos_tx {JSON}

// export async function newUser(info){

//     if(info.invitecode!=="byebyegithub") {
//       return Promise.reject('Incorrect invite code')
//     }
//     info.username = info.username.toLowerCase();
//     const datum = ['email', 'username', 'name', 'password'];
//     for(let i = 0; i <datum.length; i++) {
//       if (info[datum[i]] == undefined) {return Promise.reject(datum[i] + ' not specified')}
//     }
//     await checkParams(info.username, info.email)
//                 .catch(err=>{return Promise.reject(err)});
//     let privateKey = await ecc.randomKey();
//     let publicKey =  await ecc.privateToPublic(privateKey);
//     let cid = eosUtil.makecid();
//     const struct = {
//       ak : publicKey,
//       ok : publicKey,
//       username : cid
//     }

//     let usr = new User(info);

//     // let [glUser, mongoUser, EOSUser] = await Promise.all([gitlab.newUser(info), usr.save(), eosUtil.createUserEOS(struct)])
//     //             .catch((err) => {return Promise.reject(err)});

//     let [glUser,matrixUser, mongoUser] = await Promise.all([gitlab.newUser(info),matrix.newUser(info), usr.save()])
//                 .catch((err) => {return Promise.reject(err)});

//     const token = await gitlab.createToken(glUser.name, glUser.id)
//                 .catch(err=>{return Promise.reject(err)});

//     const updateQuery = {publicKey: publicKey, privateKey: privateKey, gitlabToken: token.token, gitlabID: glUser.id, EOSUsername: cid,chat_token:matrixUser.access_token};
//     const user = await User.findByIdAndUpdate(mongoUser._id, updateQuery, {new: true})
//                 .catch(err => {return Promise.reject(err)});

//     const payload = {
//          'username':mongoUser.username,
//          'gitlabId': mongoUser.gitlabID,
//          'EOSUsername': mongoUser.EOSUsername,
//          'userId': mongoUser._id,
//          'email': mongoUser.email,
//          'issuer': 'https://source.lol',
//          'EOSUsername': mongoUser.EOSUsername,
//          'matrix_access_token': user.access_token
//        };

//     const tk = tokenGenerate(payload);

//     //return {user, token: tk, eos_tx: EOSUser};
//     return {user, token: tk};
// }

// */

// /**
//  * Function retrieves a list of user Project
//  * @param id - mongoose id of user
//  * @returns Array of all user projects
//  **/
// export async function listUserProjects(id) {
//   if (id == undefined) {
//     return Promise.reject("User ID not specified");
//   }
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return Promise.reject("Invalid Mongoose User ID");
//   }

//   const projects = await User.findById(id)
//     .select("projects")
//     .populate({ path: "projects" })
//     .catch(err => {
//       return Promise.reject(["Mongo", err]);
//     });

//   return projects;
// }

// /**
//  * Function follows / unfollows a given user depending on whether
//  * toFollow is included or not included in a user's following list
//  * @param id - mongoose id of user (self)
//  * @param toFollow - mongoose id of user to follow / unfollow (other)
//  * @returns {JSON} user (self) mongoose object
//  **/
// export async function follow(id, toFollow) {
//   let addSelf = { $push: { following: toFollow } };
//   let delSelf = { $pull: { following: toFollow } };
//   let addOther = { $push: { followers: id } };
//   let delOther = { $pull: { followers: id } };

//   let [user, checkOther] = await Promise.all([
//     User.findById(id),
//     User.findById(toFollow)
//   ]).catch(err => {
//     return Promise.reject(["Mongoose", err]);
//   });

//   if (!user) {
//     return Promise.reject("User not found");
//   }
//   if (!mongoose.Types.ObjectId.isValid(toFollow)) {
//     return Promise.reject("Invalid ID for user to follow");
//   }
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return Promise.reject("Invalid Mongoose User ID");
//   }
//   if (String(user._id) === String(toFollow)) {
//     return Promise.reject("Error: Cannot follow yourself");
//   }
//   if (!checkOther) {
//     return Promise.reject("The user to follow does not exist");
//   }

//   const isInArray = user.following.some(i => {
//     return i.equals(toFollow);
//   });

//   if (isInArray) {
//     let [self, other] = await Promise.all([
//       User.findByIdAndUpdate(id, delSelf, { new: true }),
//       User.findByIdAndUpdate(toFollow, delOther, { new: true })
//     ]).catch(err => {
//       return Promise.reject(err);
//     });
//     return self;
//   } else {
//     let [self, other] = await Promise.all([
//       User.findByIdAndUpdate(id, addSelf, { new: true }),
//       User.findByIdAndUpdate(toFollow, addOther, { new: true }),
//       User.addStats(toFollow, stats.follow)
//     ]).catch(err => {
//       return Promise.reject(err);
//     });
//     return self;
//   }
// }

// /**
//  * Function retrieves a list of user's starred Project
//  * @param id - mongoose id of user
//  * @returns Array of all user starred projects
//  **/
// export async function gstar(id) {
//   if (id == undefined) {
//     return Promise.reject("User ID not specified");
//   }
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return Promise.reject("Invalid Mongoose User ID");
//   }
//   const starredProjects = await User.findById(id)
//     .select("starred")
//     .populate({ path: "starred" })
//     .catch(err => {
//       return Promise.reject(["Mongoose", err]);
//     });

//   return starredProjects;
// }

// /**
//  * Function retrieves a list of a user's pinned Project
//  * @param id - mongoose id of user
//  * @returns Array of all user pinned projects
//  **/
// export async function gpin(id) {
//   if (id == undefined) {
//     return Promise.reject("User ID not specified");
//   }
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return Promise.reject("Invalid Mongoose User ID");
//   }

//   const pinnedProjects = await User.findById(id)
//     .select("pinned")
//     .populate({ path: "pinned" })
//     .catch(err => {
//       return Promise.reject(["Mongoose", err]);
//     });

//   return pinnedProjects;
// }

// /**
//  * Function retrieves a list of user Project
//  * @param id - mongoose id of user
//  * @returns Array of a user's following list
//  **/
// export async function gfollowing(id) {
//   if (id == undefined) {
//     return Promise.reject("User ID not specified");
//   }
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return Promise.reject("Invalid Mongoose User ID");
//   }

//   const following = await User.findById(id)
//     .select("following")
//     .populate({ path: "following" })
//     .catch(err => {
//       return Promise.reject(["Mongoose", err]);
//     });

//   return following;
// }

// /**
//  * Function retrieves all transfers from a given user
//  * @param id - mongoose id of user
//  * @returns Array of all transfers involving the user
//  **/
// // export async function getTransfers(id) {
// //   if (id == undefined) {
// //     return Promise.reject("User ID not specified");
// //   }
// //   if (!mongoose.Types.ObjectId.isValid(id)) {
// //     return Promise.reject("Invalid Mongoose User ID");
// //   }

// //   const transfers = await User.findById(id)
// //     .select("transfers")
// //     .populate({ path: "transfers" })
// //     .catch(err => {
// //       return Promise.reject(["Mongoose", err]);
// //     });

// //   return transfers;
// // }

// /**
//  * Function retrieves a list of user Project
//  * @param id - mongoose id of user
//  * @returns Array of all followers
//  **/
// export async function gfollowers(id) {
//   if (id == undefined) {
//     return Promise.reject("User ID not specified");
//   }

//   const followers = await User.findById(id)
//     .select("followers")
//     .populate({ path: "followers" })
//     .catch(err => {
//       return Promise.reject(["Mongo", err]);
//     });

//   return followers;
// }

// /**
//  * Transfer SOURCE to a user (via EOS)
//  * Records the transfer for both receiver and sender on mongoDB
//  * @param {JSON} info - sender, receiver, message, src (amount)
//  * @returns {JSON} EOS transaction receipt for the transfer
//  **/
// // export async function transferToUser(info) {
// //   const datum = ["sender", "receiver", "src"];
// //   for (let i = 0; i < datum.length; i++) {
// //     if (info[datum[i]] == undefined) {
// //       return Promise.reject(datum[i] + " not specified");
// //     }
// //   }
// //   let query = { username: info.sender };
// //   let user = await User.findOne(query)
// //     .select("+privateKey")
// //     .catch(err => {
// //       return Promise.reject(err);
// //     });

// //   let tx = await eosUtil
// //     .transferEOS(
// //       info.sender,
// //       info.receiver,
// //       info.src,
// //       info.message,
// //       user.privateKey
// //     )
// //     .catch(err => {
// //       return Promise.reject(err);
// //     });

// //   let newTransfer = new Transfer({
// //     from: info.sender,
// //     to: info.receiver,
// //     quantity: info.src,
// //     memo: info.message,
// //     txID: tx.transaction_id
// //   });
// //   Promise.all([
// //     newTransfer.save(),
// //     User.findOneAndUpdate(
// //       { EOSUsername: receiver },
// //       { $push: { transfers: newTransfer._id } },
// //       { new: true, upsert: true }
// //     ).select("-privateKey"),
// //     User.findOneAndUpdate(
// //       { EOSUsername: sender },
// //       { $push: { transfers: newTransfer._id } },
// //       { new: true }
// //     )
// //   ]);
// //   return tx;
// // }

// /**
//  * Function checks uniqueness of email/username so that user creation will not fail
//  * When saving to any part of the system
//  * @param  username - the username to be checked
//  * @param  email - the email to be checked
//  **/
// export function checkParams(username, email) {
//   let check = ".12345abcdefghijklmnopqrstuvwxyz";

//   return new Promise((resolve, reject) => {
//     if (username.length > 12)
//       reject([false, "Cannot have an account name larger than 12 characters"]);

//     // for(let L of username){
//     //   if(!check.includes(L)) reject([false,`Can only have username with following characters ${check}`]);
//     // }

//     checkDB(username, email)
//       .then(() => {
//         //return eosUtil.checkAccountEOS(username);
//         return;
//       })
//       .then(msg => {
//         resolve(msg);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }

// async function checkDB(username, email) {
//   let [_email, _username] = await Promise.all([
//     User.findOne({ email: email }),
//     User.findOne({ username: username })
//   ]).catch(err => {
//     return Promise.reject(["Mongoose", err]);
//   });

//   if (_username != null) {
//     return Promise.reject(`Username ${username} is in use`);
//   }
//   if (_email != null) {
//     return Promise.reject(`Email ${email} is in use`);
//   }

//   return Promise.resolve("good to go");
// }

// // export function pstar(username,repo_id){
// //   let query = {'username': username};
// //   let add = {$push:{"starred":repo_id}};
// //   let del = {$pull:{"starred":repo_id}};
// //
// //   return new Promise((resolve,reject)=>{
// //
// //     if (!mongoose.Types.ObjectId.isValid(repo_id)) reject("RepoID not valid");
// //     User.findOne(query).then( user =>{
// //       if(!user) reject("User not found");
// //       let query_fast= {_id:user._id};
// //       if(user.starred.includes(repo_id))
// //       {
// //         User.findOneAndUpdate(query_fast,del,{new:true})
// //         .then(update=>{
// //           update.save();
// //           resolve(update);
// //         });
// //       }else
// //       {
// //         User.findOneAndUpdate(query_fast,add,{new:true})
// //         .then(update=>{
// //           update.save();
// //           resolve(update);
// //         });
// //       }
// //     });
// //   });
// // }

// // export function ppin(username,repo_id){
// //   let query = {'username': username};
// //   let add = {$push:{"pinned":repo_id}};
// //   let del = {$pull:{"pinned":repo_id}};
// //
// //   return new Promise((resolve,reject)=>{
// //     User.findOne(query).then(user=>{
// //
// //       if(!user) reject("Error: User not found");
// //       if (!mongoose.Types.ObjectId.isValid(repo_id)) reject("Repo_id not valid");
// //
// //       if(user.pinned.length<=4)
// //       {
// //
// //         let query_fast= {_id:user._id};
// //
// //         if(user.Repositories.includes(repo_id))
// //         {
// //           if(user.pinned.includes(repo_id))
// //           {
// //             User.findOneAndUpdate(query_fast,del,{new:true})
// //             .then(update=>{
// //               update.save();
// //               resolve(update);
// //             });
// //           }
// //           else
// //           {
// //             User.findOneAndUpdate(query_fast,add,{new:true})
// //             .then(update=>{
// //               update.save();
// //               resolve(update);
// //             });
// //           }
// //         }
// //         else
// //         {
// //           reject("Cannot pin a repo you don't own");
// //         }
// //       }
// //       else
// //       {
// //         reject("Can't have more than 4 pinned repositories");
// //       }
// //     });
// //   });
// // }

// // const pics = {
// // 	1:'https://i.imgur.com/oiLTrjJ.png',
// // 	2: 'http://www.pnas.org/content/pnas/115/3/438/F1.large.jpg',
// // 	3: 'https://i.cricketcb.com/stats/img/faceImages/1413.jpg',
// // 	4: 'https://orlandodevs.com/assets/odevs-helmet.png',
// // 	5: 'https://pbs.twimg.com/profile_images/801480105319079937/GOKXa_3t_400x400.jpg',
// // 	6: 'https://pbs.twimg.com/profile_images/730538867955113984/rsUY6VoR_400x400.jpg',
// // 	7: 'https://geo-media.beatport.com/image/c21f733e-89e0-499e-afdf-bf8c4a391de7.jpg',
// // 	8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYKepbkvJIGq_rej-G1LlyQMhMSjhS6vEdwPHzPLdnZf6QzQ4jg',
// // 	9: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYKepbkvJIGq_rej-G1LlyQMhMSjhS6vEdwPHzPLdnZf6QzQ4jg',
// // 	10: 'http://cdn4.sussexdirectories.com/rms/rms_photos/sized/49/59/405949-1270184-1_320x400.jpg?pu=1532299255',
// // 	11: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtox4GQ3mbYz964uA7oFG-bcJunBc3AdDYv0zdEjbZyNSIkJix',
// // 	12: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsUidgchCjT5jnaQOVkNRo2LZm1Mhpy9zAKwdCbQ72JJbGp683A',
// // 	13: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHjRe44PC8wJxFyEbDOq_-vywnGHGQIKGPvZw-UN8v7mIrbsN'
// // }
// //   User.find({})
// //   .then(usrs => {
// //     for (let i = 0; i < usrs.length; i++) {
// //       User.update({_id: usrs[i]._id},{'avatar': pics[i % 13]}, {multi: true});
// //     }
// //   })
// //   .then(() => {
// //     User.find().then(x=> {console.log(x)})
// //   })

// //test
// // getUserGL('5b68e0ea4f51671f93128f51')
// // .then(result => {console.log(result)})
// // .catch(err => {console.log(err)});

// //test
// // const info = {email: 'bingo@vimeo.com', name: 'moshiko', username: 'moshikobingo', password: 'cockroach'}
// // newUserGL(info)
// // .then(result => {console.log(result)})
// // .catch(err => {console.log(err)});

// //test
// // listUserProjects('5b68e0ea4f51671f93128f51')
// // .then(result => {console.log(result)})
// // .catch(err => {console.log(err)});

// //test
// // checkParams('helpmeaghost', 'jonessafs@yon.com')
// // .then(result=> {console.log(result)})
// // .catch(err => {console.log(err)});

// //test
// // eosUtil.checkAccountEOS('helpmeaghost')
// // .then(result => {console.log(result)})
// // .catch(err => {console.log(err)});

// //test Follow()
// // async function x() {
// //   const users = await User.find().select('_id');
// //   const self = '5b968141de64871a8ae95dac';
// //   for (let u in users) {
// //     if(users[u]._id != self) {
// //       const toFollow = users[u]._id;
// //       follow(self, toFollow)
// //       .then(result => {})
// //       .catch(err => {console.log(err)});
// //     }
// //   }
// // }

// // x();

// // gfollowers('5b7c826482f2dc95bda5d683').then(result => {console.log(result)});

// //reset password
// // export async function passwordResetRequest(email, url) {
// //   //check if email is in db
// //   let ourUser = await User.findOne({ email: email }).catch(err => {
// //     console.log("err:", err);
// //   });
// //   if (ourUser) {
// //     let token = await ecc.randomKey();
// //     let expiry = new Date();
// //     expiry.setDate(expiry.getDate() + 1);
// //     expiry = expiry.getTime();
// //     let passwordResetToken = {
// //       expiry,
// //       userId: ourUser._id,
// //       used: false,
// //       token: token
// //     };
// //     //save access token to db - either create or update
// //     await ResetPassToken.findOneAndUpdate(
// //       { userId: passwordResetToken.userId },
// //       passwordResetToken,
// //       { upsert: true }
// //     ).catch(err => {
// //       console.log("err:", err);
// //     });
// //     let mailOptions = {
// //       from: '"Source Team" <source@source.lol>', // sender address
// //       to: email, // list of receivers
// //       cc: "source@source.lol",
// //       subject: "Reset Your Password", // Subject line
// //       text:
// //         `Someone submitted a request to reset the password for the Source account associated with this email address. If it was you, use the link below to change your password and access your account. If it wasn't you, we recommend making sure your email is secure.` +
// //         `\n ${url}/resetpassword/${token}` // plain text body
// //       //html: emailHtml
// //     };
// //     transporter.sendMail(mailOptions, (error, info) => {
// //       if (error) {
// //         return console.log(error);
// //       }
// //       // Preview only available when sending through an Ethereal account

// //       // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// //       // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// //     });
// //   }
// //   return Promise.resolve("SUCCESS");
// // }

// export async function changePassword(token, newPassword) {
//   newPassword = await bcrypt.hash(newPassword, 10).catch(err => {
//     console.log("err:", err);
//   });
//   let ourTokenObj = await ResetPassToken.findOne({ token: token });
//   let ourUser = await User.findById(ourTokenObj.userId);
//   let isTokenValid = new Date(Date.now()).getTime() < ourTokenObj.expiry;
//   if (ourUser && ourTokenObj.used === false && isTokenValid) {
//     await User.findOneAndUpdate(
//       { _id: ourTokenObj.userId },
//       { password: newPassword }
//     )
//       .catch(err => {
//         console.log("ERR", err);
//       })
//       .catch(err => {
//         console.log("err:", err);
//       });
//     //update token in db to used = true
//     ourTokenObj.used = true;
//     return Promise.resolve(true);
//   } else {
//     console.log("error updating password");
//     return Promise.reject(
//       "Unable to update password. Request a new link to reset your password."
//     );
//   }
// }

// export async function isUsernameInDB(username) {
//   let ourUser = await User.findOne({ username: username }).catch(err => {
//     console.log("Error:", err);
//   });
//   return ourUser !== null;
// }
