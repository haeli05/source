import { Router } from 'express';
import * as UserController from './user.controller'
import passport from "../util/passport";

const router = new Router();

// Delete user
router.route('/user/delete/:username').post(UserController.deleteUser);

// Get all Users
//TODO: this route is inefficient. Need to getUsers per specific data
//      (all users related to given user, etc.)
router.route('/user').get(UserController.getUsers);
//Get a user public information
router.route('/user/:id').get(UserController.getUser);
//Get a user by username
router.route('/user/name/:username').get(UserController.isUserInDB);

//Get a user's gitlab account
router.route('/user/gl/:id').get(UserController.getUserGL);
//Update a user's info
router.route('/user/update').post(passport.authenticate('jwt',{session: false}), UserController.updateUser); //NOTE: UNTESTED
//create a user on gitlab
router.route('/user/gl/new').post(UserController.newUserGL);
//Lists Projects for user
router.route('/user/:id/projects').get(UserController.listUserProjects);
// Create a new User
router.route('/user/new').post(UserController.newUser);
//Login a User
router.route('/user/login').post(UserController.login);
//Create new group
router.route('/user/newGroup').post(UserController.newGroup); //NOTE: are we keeping groups?
//Transfer tokens to another user
router.route('/user/transfer').post(passport.authenticate('jwt',{session: false}), UserController.transferToUser); //NOTE: UNTESTED
//Get all transfers sent to a user
router.route('/user/:id/transfers').get(UserController.getTransfers);
//Add avatar
router.route('/user/addAvatar').post(passport.authenticate('jwt',{session: false}), UserController.addAvatar);
//Follow idea, project, or issue
router.route('/user/followTopic').post(passport.authenticate('jwt',{session: false}), UserController.followTopic);
//Follow tag
router.route('/user/followTags').post(passport.authenticate('jwt',{session: false}), UserController.followTags);
//Returns topics the user has followed.  query parameters (?sort= trending / popularity | ?ideaId | ?projectId)
router.route('/user/:id/followingFeed').get(UserController.followingFeed);
//Returns topics the user has voted on.
router.route('/user/:id/votedFeed').get(UserController.votedFeed);

//Add SSH key
router.route('/user/addssh').post(passport.authenticate('jwt',{session: false}), UserController.addSSH); //NOTE: UNTESTED
//Delete SSH keys
router.route('/user/delssh').post(passport.authenticate('jwt',{session: false}), UserController.delSSH); //NOTE: UNTESTED
//List SSH key
router.route('/user/listssh').post(passport.authenticate('jwt',{session: false}), UserController.listSSH); //NOTE: UNTESTED

//Follow / Unfollow a user
router.route('/user/follow').post(passport.authenticate('jwt',{session: false}), UserController.follow);
//Add or update a user to follow
router.route('/user/:id/following').get(UserController.gfollowing);
//Add or update followers for a user
router.route('/user/:id/followers').get(UserController.gfollowers);

//Get all projects starred by a user
router.route('/user/:id/starred').get(UserController.gstar);
//Get all projects pinned by a user
router.route('/user/:id/pinned').get(UserController.gpin);
//Get a user's balance
router.route('/user/:username/balance').get(UserController.getBalance); //NOTE: UNTESTED

//Add newly starred repo id to user list
// router.route('/user/star').post(UserController.pstar); //NOTE: to be used from repo/handleStar

//Update or add repositories to users page
// router.route('/user/:user_name/pin').post(UserController.ppin);


//reset password
router.route('/user/resetpass').post(UserController.passwordResetRequest);
router.route('/user/updatepass').post(UserController.changePassword);
export default router;
