import { Router } from "express";
import * as ProjectsController from "./projects.controller";
// import passport from '../util/passport';

const router = new Router();

//get all ideas
router.route("/projects").post(ProjectsController.getAll);

//get single project
router.route("/projects/show/:id").get(ProjectsController.getProject);

// //create idea
router.route("/projects/new").post(ProjectsController.newProject);

//edit a project
router.route("/projects/edit/project/:id").post(
  // passport.authenticate("jwt", { session: false }),
  ProjectsController.editProject
);

// //delete an idea
// // router.route('/projects/delete/:id').post(passport.authenticate('jwt',{session:false}),ProjectsController.deleteIdea);
router.route("/projects/delete/:id").post(ProjectsController.deleteProject);

// //delete a comment
// // router.route('/projects/deleteBlob/:ideaID').post(passport.authenticate('jwt',{session:false}),ProjectsController.deleteBlob);
// router.route("/projects/deleteBlob/:ideaID").post(ProjectsController.deleteBlob);

// //comment on an idea
// // router
// //   .route("/projects/comment/:id")
// //   .post(
// //     passport.authenticate("jwt", { session: false }),
// //     ProjectsController.newBlob
// //   );
// router.route("/projects/comment/:id").post(ProjectsController.newBlob);

// router
//   .route("/projects/edit/idea/:id")
//   .post(
//     passport.authenticate("jwt", { session: false }),
//     ProjectsController.editProject
//   );

// router.route("/projects/edit/idea/:id").post(ProjectsController.editProject);
// //edit a comment
// // router
// //   .route("/projects/edit/comment/:id")
// //   .post(
// //     passport.authenticate("jwt", { session: false }),
// //     ProjectsController.editBlob
// //   );

// router.route("/projects/edit/comment/:id").post(
//   // passport.authenticate("jwt", { session: false }),
//   ProjectsController.editBlob
// );

// //up/down-vote
// router
//   .route("/projects/vote/:which/:up/:id")
//   .post(passport.authenticate("jwt", { session: false }), ProjectsController.vote);
// router.route("/projects/vote/:which/:up/:id").post(ProjectsController.vote);

export default router;
