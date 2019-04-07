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
const RepoSchema = new mongoose.Schema({
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
  src_raised: {
    type: Number,
    default: 0
  },
  gitlabID: {
    type: Number,
    required: [true, 'Repo ID is required.']
  },
  star_count: {
    type: Number,
    default: 0
  },
  forks_count:{
    type: Number,
    default: 0
  },
  forked:{
    type: Boolean,
    default: false
  },
  forked_from: {
    type: Number,
  },
  ssh_url:{
    type: String,
    required: [true, "SSH_URL required"]
  },
  http_url:{
    type: String,
    required: [true,"HTTP_URL required"]
  },
  empty:{
    type: Boolean,
    default: true
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
  cid: {
    type: String,
    default: ""
  },
  idea:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ideas'
  }],
  roles: [{
      role: {type: String, required: [true,"Role must have a name"]},
      actions: {type: [Boolean], required: [true,"Role must have a actions"]}
  }],
  trending: { type: TrendingSchema, default: TrendingSchema, select:false },
  popularity: {
    type: Number,
    default: 0,
    index: true,
    select: false
  },
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
  },
  chat_url:{
    type: String,
    required: [true,"HTTP_URL required"]
  },
  admins:{
    type:[Schema.Types.ObjectId],
    ref: "user",
  }
});

RepoSchema.index({ project_name: 'text', description: 'text', labels: 'text'}, {name: 'search_index', weights: {project_name: 10, description: 7, labels: 3}, default_language: 'english'});


RepoSchema.plugin(searchTextPlugin);
RepoSchema.plugin(aggregateTrendingPlugin);
RepoSchema.plugin(addStatsPlugin);
RepoSchema.plugin(addTextPlugin);
RepoSchema.plugin(votePlugin);




const Repo = module.exports = mongoose.model('repo', RepoSchema);
