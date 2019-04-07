import { Router } from 'express';
import * as RepoController from './repo.controller';
import passport from "../util/passport.js";

const router = new Router();
// TODO: Change GET/POST request types to match back to gl api correctly

//Gets all repos
router.route('/repos').get(RepoController.getRepos);
//gets the files for a repo
router.route('/repos/files').post(RepoController.listProjectRepos);
//updates a repo - unimplemented
// router.route('/repos/updates').post(RepoController.updates);
//grabs raw from repo
router.route('/repos/raw/:id/:sha').get(RepoController.getRaw);
//Gets a single repos information
// router.route('/repos/get/:username/:repo').get(RepoController.getRepo);
router.route('/repos/get/:user/:repoID/:parent').get(RepoController.getRepo);

//Get commits
router.route('/repos/commits/:id').get(RepoController.getCommits);
//Creates a new repo
router.use('/repos/new',passport.authenticate('jwt',{session: false}),RepoController.newProject);
//router.route('/repos/new1').post(RepoController.newProject);
//Create new Branch
router.route('/repos/newBranch').post(RepoController.newBranch);
//Delete Branch
router.route('/repos/delBranch').delete(RepoController.delBranch);
//Get all branches
router.route('/repos/branch/:username/:repo').get(RepoController.getBranches);
//Get a branch
router.route('/repos/branch/:username/:repo/:branch').get(RepoController.getBranch);
//Grabs the pull request for a repo
router.route('/repos/pull/:id').get(RepoController.getPull);

//List Merge Requests
router.route('/repos/merge/:repoID').get(RepoController.listMerges);
//Create Merge Request
router.route('/repos/merge/:repoID').post(passport.authenticate('jwt',{session: false}),RepoController.newMerge);
//get single merge request
router.route('/repos/merge/:repoID/:mergeID').get(RepoController.getMerge);
//Accept Merge Request
router.route('/repos/merge/:repoID/:mergeID').post(passport.authenticate('jwt',{session: false}),RepoController.approveM);
//Update a Merge Request
router.route('/repos/merge/update/:repoID/:mergeID').put(passport.authenticate('jwt',{session: false}),RepoController.updateMerge);
//close a merge request
router.route('/repos/merge/close/:repoID/:mergeID').put(passport.authenticate('jwt',{session: false}),RepoController.closeMerge);
//Delete a Merge Request
router.route('/repos/merge/:repoID/:mergeID').delete(passport.authenticate('jwt',{session: false}),RepoController.deleteM);

//List Single Merge Request
router.route('/repos/getSinglePull').post(RepoController.getSinglePull);
//Update Merge Request
router.route('/repos/updateMerge').put(RepoController.updateMerge);
//Sets smart contract for repo
router.route('/repos/setRepo').post(passport.authenticate('jwt',{session: false}), RepoController.setRepo);
//Handles a star/unstar event
router.use('/repos/handleStar',passport.authenticate('jwt',{session: false}),RepoController.handleStar);
//Add Issue Labels
router.route('/repos/addlabels').post(passport.authenticate('jwt',{session: false}), RepoController.addLabels);
//Adds an idea to a project
router.route('/repos/idea').post(passport.authenticate('jwt',{session: false}), RepoController.addIdea);
//get project balance
router.route('/repos/balance/:id').get(RepoController.getBalance);
//upvote / downvote an issue
//up: 1 upvote  | 0 downvote
//unvote by submitting the same vote twice
//id: mongo id of repo
router.route('/repos/vote/:up/:id').post(passport.authenticate('jwt',{session:false}), RepoController.vote);

//Fork repo
router.route('/repos/fork/:repoId').post(passport.authenticate('jwt', {session:false}), RepoController.forkRepo)

//for testing purposes only
router.route('/repos/test/:repoID').get(RepoController.tester);

//verify a given user owns said project
router.route('/repos/verify').get(RepoController.verify);


export default router;
