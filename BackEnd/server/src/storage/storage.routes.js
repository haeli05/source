import {Router} from 'express';
import * as StorageController from './storage.controller';
import passport from '../util/passport';

const router = new Router();

//get all ideas
// router.route('/storage').post(StorageController.getAll);
//
//Post an image
router.route('/storage/getToken').post(passport.authenticate('jwt',{session:false}),StorageController.awsToken);

export default router;
