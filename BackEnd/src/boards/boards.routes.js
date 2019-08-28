import { Router } from "express";
import * as BoardsController from "./boards.controller";
import passport from "../util/passport";

const router = new Router();

//get all boards
router.route("/boards").post(BoardsController.getAll);

//get single board
router
  .route("/boards/show/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    BoardsController.getBoard
  );

//create board
router
  .route("/boards/new")
  .post(
    passport.authenticate("jwt", { session: false }),
    BoardsController.newBoard
  );

//edit a board
router
  .route("/boards/edit/board/:id")
  .post(
    passport.authenticate("jwt", { session: false }),
    BoardsController.editBoard
  );

// //delete an board
// router.route('/boards/delete/:id').post(passport.authenticate('jwt',{session:false}),BoardsController.deleteIdea);
router
  .route("/boards/delete/:id")
  .post(
    passport.authenticate("jwt", { session: false }),
    BoardsController.deleteBoard
  );

//get column
router.route("/boards/column/:column_id").post(BoardsController.getColumn);

//get columns
router.route("/boards/:board_id/allcolumns").post(BoardsController.getColumns);

//get all user tasks
router
  .route("/boards/tasks/allTasks")
  .post(
    passport.authenticate("jwt", { session: false }),
    BoardsController.getAllTasks
  );

//get task
router.route("/boards/tasks/:task_id").post(BoardsController.getTask);

//get task
router
  .route("/boards/manage/:id")
  .put(
    passport.authenticate("jwt", { session: false }),
    BoardsController.getBoard
  );

export default router;
