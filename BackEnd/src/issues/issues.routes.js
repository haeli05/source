import {Router} from 'express';
import * as IssuesController from './issues.controller';
import passport from "../util/passport";

const router = new Router();

//get all issues for a given project
router.route('/issues').post(IssuesController.getAll);

//get a singe issue, including all of its blobs
router.route('/issues/:issueID').get(IssuesController.getIssue);

//deletes a blob. NOTE: Only blobs can be deleted, except for the first blob, which is the issue's body
//deleted blobs are returned as NULL. Ignore them
router.route('/issues/del/:issueID/:blobID').post(passport.authenticate('jwt',{session:false}), IssuesController.deleteBlob);

//post issue
router.route('/issues/new').post(passport.authenticate('jwt',{session:false}), IssuesController.newIssue);

//create new blob (comment)
router.route('/issues/newBlob/:issueID').post(passport.authenticate('jwt',{session:false}), IssuesController.newBlob);

//edit an issue
router.route('/issues/edit/:issueID').post(passport.authenticate('jwt',{session:false}), IssuesController.editIssue);

//edit blob (comment)
router.route('/issues/editBlob/:blobID').post(passport.authenticate('jwt',{session:false}), IssuesController.editBlob);

//up/down-vote
router.route('/issues/vote/:which/:up/:id').post(passport.authenticate('jwt',{session:false}),IssuesController.vote);

// //filter all issues by tag
// router.route('/issues/filter/:tag').get(IssuesController.filterAllTag);
//
// //filter issues for a repo by tag
// router.route('/issues/filter/:repoID/:tag').get(IssuesController.filterTag);
//
// //resolve an issue
router.route('/issues/close/:issueID').post(passport.authenticate('jwt',{session:false}), IssuesController.close);
//
// //assign an issue to user
// router.route('/issues/assign/:issueID/:userID').post(passport.authenticate('jwt',{session:false}), IssuesController.assign);
//
// //unassign an issue to user
// router.route('/issues/unassign/:issueID/:userID').post(passport.authenticate('jwt',{session:false}), IssuesController.unassign);

export default router;
