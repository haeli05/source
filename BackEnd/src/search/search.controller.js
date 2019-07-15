// const Users =require('../models/user.js');
// const Ideas =require('../models/ideas.js').Ideas;
// const Projects =require('../models/repo.js');
import {sanitizeTags} from '../util/helpers.util';
import mongoose from 'mongoose';


/**
* Get 50 results that match the text search, sorted by whatever was specified, includes pagination
* can filter by tag
* @param {String} req.body.text - the text to search for
* @param {String} req.params.sort - trending / popularity / undefined
* @param {Number} req.params.topics - the topics to search by... |users|ideas|projects| -> |0/1|0/1|0/1|
* @param {[String]} req.body.tags - tags to filter by
* @param {Mongoose ID} req.body.userId - the last user ID seen, for pagination (optional)
* @param {Mongoose ID} req.body.ideaId - the last idea ID seen, for pagination (optional)
* @param {Mongoose ID} req.body.projectId - the last project ID seen, for pagination (optional)
* @returns {Array} of search results in JSON
*/
export async function search(req, res) {
  let models = [Users, Ideas, Projects];
  let strings = ['users', 'ideas', 'projects'];
  const text = (req.body.text == undefined) ? "" : req.body.text;
  const tags = sanitizeTags(req.body.tags);
  const userId = (req.body.userId == undefined || !mongoose.Types.ObjectId.isValid(req.body.userId)) ? undefined : req.body.userId;
  const ideaId = (req.body.ideaId == undefined || !mongoose.Types.ObjectId.isValid(req.body.ideaId)) ? undefined : req.body.ideaId;
  const projectId = (req.body.projectId == undefined || !mongoose.Types.ObjectId.isValid(req.body.projectId)) ? undefined : req.body.projectId;
  let ids = [userId, ideaId, projectId];
  const sort = (req.params.sort === 'popularity' || req.params.sort === 'trending' || req.params.sort == undefined) ? req.params.sort : undefined;
  const topics = parseTopics(req.params.topics);
  const topix = topics.split("");
  const toSearch = topix.map((curr, index) => {return ((curr === '1') ? models[index] : null)})
  const promises = [];
  const titles = [];
  let error = [];
  if (tags) {
    models = [Ideas, Projects];
    strings = ['ideas', 'projects'];
    ids = [ideaId, projectId];
  }
  for (let i = 0; i < models.length; i++) {
    if (toSearch[i] == null) {continue;}
    // function(phrase, sorting, paginate, tags, project)
    const promise = models[i].searchText(text, sort, ids[i], tags);
    promises.push(promise);
    titles.push(strings[i]);
  }
  const results = await Promise.all(promises)
      .catch(err => {error =[true, err];});

  if (error[0] == true) {
    res.status(400).json({message: 'Failed search', error: error[1]});
  }
  else {
    const json = {}
    for (let i in promises) { json[titles[i]] = results[i]}
    res.status(200).json(json);
  }
}

function parseTopics(topics) {
  for (let i = 0; i < 3; i++) {
    if (!(topics[i] === '0' || topics[i] === '1')) {
      return topics = '111';
    }
  }
  return topics.slice(0,3);
}





/**
* Get 50 results that match the any of the tags, sorted by whatever was specified, includes pagination
* can filter by tag
* @param {String} req.params.sort - trending / popularity / undefined
* @param {[String]} req.body.tags - tags to filter by
* @param {Mongoose ID} req.body.ideaId - the last idea ID seen, for pagination (optional)
* @param {Mongoose ID} req.body.projectId - the last project ID seen, for pagination (optional)
* @returns {Array} of search results in JSON
*/
export async function searchTags(tags, sort, ideaId, projectId) {
  let models = [Ideas, Projects];
  let strings = ['ideas', 'projects'];
  tags = sanitizeTags(tags);
  ideaId = (ideaId == undefined || !mongoose.Types.ObjectId.isValid(ideaId)) ? undefined : ideaId;
  projectId = (projectId == undefined || !mongoose.Types.ObjectId.isValid(projectId)) ? undefined : projectId;
  let ids = [ideaId, projectId];
  sort = (sort === 'popularity' || sort === 'trending' || sort == undefined) ? sort : undefined;

  const promises = [];
  const titles = [];
  let error = [];
  for (let i = 0; i < models.length; i++) {
    // function(phrase, sorting, paginate, tags, project)
    const promise = models[i].searchText('', sort, ids[i], tags);
    promises.push(promise);
    titles.push(strings[i]);
  }
  const results = await Promise.all(promises)
      .catch(err => {error =[true, err];});

  if (error[0] == true) {
    throw error[1];
  }
  else {
    const json = {}
    for (let i in promises) { json[titles[i]] = results[i]}
    return json;
  }
}
