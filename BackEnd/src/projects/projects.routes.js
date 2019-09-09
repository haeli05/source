import { Router } from "express";
import * as ProjectsController from "./projects.controller";
import passport from "../util/passport";

const router = new Router();

//get all ideas
router.route("/projects").post(ProjectsController.getAll);

//get single project
router
  .route("/projects/show/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    ProjectsController.getProject
  );

// //create idea
router
  .route("/projects/new")
  .post(
    passport.authenticate("jwt", { session: false }),
    ProjectsController.newProject
  );

//edit a project
router
  .route("/projects/edit/project/:id")
  .post(
    passport.authenticate("jwt", { session: false }),
    ProjectsController.editProject
  );

// //delete an idea
router
  .route("/projects/delete/:id")
  .post(
    passport.authenticate("jwt", { session: false }),
    ProjectsController.deleteProject
  );

export default router;
