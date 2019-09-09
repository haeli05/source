import {Router} from 'express';
import * as StorageController from './storage.controller';
import passport from '../util/passport';

const router = new Router();

//get all ideas
// router.route('/storage').post(StorageController.getAll);
//
//Post an image

//router.route('/storage/upload').post(passport.authenticate('jwt',{session:false}),StorageController.upload);
router.route('/storage/upload').post(StorageController.upload);

export default router;
