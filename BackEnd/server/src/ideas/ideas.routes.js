import {Router} from 'express';
import * as IdeasController from './ideas.controller';
import passport from '../util/passport';

const router = new Router();

//get all ideas
router.route('/ideas').post(IdeasController.getAll);

//get single idea
router.route('/ideas/show/:id').get(IdeasController.getIdea);

//delete an idea
router.route('/ideas/delete/:id').post(passport.authenticate('jwt',{session:false}),IdeasController.deleteIdea);

//delete a comment
router.route('/ideas/deleteBlob/:ideaID').post(passport.authenticate('jwt',{session:false}),IdeasController.deleteBlob);

//create idea
router.route('/ideas/new').post(passport.authenticate('jwt',{session:false}), IdeasController.newIdea);

//comment on an idea
router.route('/ideas/comment/:id').post(passport.authenticate('jwt',{session:false}), IdeasController.newBlob);

//edit an idea
router.route('/ideas/edit/idea/:id').post(passport.authenticate('jwt',{session:false}),IdeasController.editIdea);

//edit a comment
router.route('/ideas/edit/comment/:id').post(passport.authenticate('jwt',{session:false}),IdeasController.editBlob);

//up/down-vote
router.route('/ideas/vote/:which/:up/:id').post(passport.authenticate('jwt',{session:false}),IdeasController.vote);

export default router;
