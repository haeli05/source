import {Router} from 'express';
import * as SearchController from './search.controller';
import passport from '../util/passport';

const router = new Router();

//  Search a particular topic or combination of topics
//  sort: (popularity, trending, undefined)
//  |users|ideas|projects| -> |0/1|0/1|0/1|
//  To search for users, projects but not ideas, topics = 101
//  To search for ideas, projects but not users, topics = 011
//  To search for users, ideas, and projects,    topics = 111
//  for pagination, specify id of last element seen:
//     body paramerters: userId / ideaId /  projectId
router.route('/search/:topics/:sort').post(SearchController.search);

export default router;
