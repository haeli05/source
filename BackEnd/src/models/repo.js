const mongoose = require('mongoose');
const Schema = mongoose.Schema
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');
import {searchTextPlugin, aggregateTrendingPlugin, addStatsPlugin, addTextPlugin} from './plugins/statistics';
import {votePlugin} from './plugins/vote';


const TrendingSchema = mongoose.Schema({
  score: {
    type: Number,
    index: true,
    default: 0
  },
  date: {
    type: Date,
    index: true,
    default: Date.now
  }
}, {_id: false});

//To-do have unique repository names
const ProjectsSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: [true, 'Project Name is required.']
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  creator_name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    index: true
  },
  description: {
    type: String,
    default: ""
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function() {
        return this.tags.length <= 4;
      },
      message: 'Can not have more than 4 tags.'
    },
    index: true
  },
  idea:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ideas'
  }],
  upvotes: {
    type: Number,
    default: 0
  },
  social : {
    type: String,
    default: [],
  },
  wallet : {
    type: [String],
    default: [],
  }
});

ProjectsSchema.index({ project_name: 'text', description: 'text', labels: 'text'}, {name: 'search_index', weights: {project_name: 10, description: 7, labels: 3}, default_language: 'english'});


ProjectsSchema.plugin(searchTextPlugin);
ProjectsSchema.plugin(aggregateTrendingPlugin);
ProjectsSchema.plugin(addStatsPlugin);
ProjectsSchema.plugin(addTextPlugin);
ProjectsSchema.plugin(votePlugin);




const Repo = module.exports = mongoose.model('repo', ProjectsSchema);
