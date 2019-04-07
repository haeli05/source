const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import {searchText, aggregateTrending, addStats, addText} from './plugins/statistics';
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

const IssueSchema = new mongoose.Schema({
  repoID:{
    type:Schema.Types.ObjectId,
    ref: "repo",
    required: [true, 'Issue must be linked to a project'],
    index: true
  },
  assignees:[{
      type:Schema.Types.ObjectId,
      ref: "user"
  }],
  bounty: {
    type: Number,
    default: 0
  },
  creator: {
    type:Schema.Types.ObjectId,
    ref: "user",
    required:[true,'User is required']
  },
  date: {
    type: Date,
    default: Date.now
  },
  codeLink: {
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function() {
        return this.tags.length <= 4;
      },
      message: 'Cannot have more than 4 tags.'
    },
    index: true
  },
  label: [{
    type: String
  }],
  closed: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  blobs: [{
    type: Schema.Types.ObjectId,
    ref: 'issueBlob',
    default: null
  }],
  search: { //used internally for text search (as index)
    type: String,
    default: '',
    select: false
  },
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
  admins:{
    type:[Schema.Types.ObjectId],
    ref: "user",
    required:[true,'Admin is required']
  }
});



IssueSchema.index({ title: 'text', search: 'text', tags: 'text'}, {name: 'search_index', weights: {title: 10, search: 7, tags: 3}, default_language: 'english'});


IssueSchema.plugin(searchTextPlugin);
IssueSchema.plugin(aggregateTrendingPlugin);
IssueSchema.plugin(addStatsPlugin);
IssueSchema.plugin(addTextPlugin);
IssueSchema.plugin(votePlugin);





var Issues = mongoose.model('issues', IssueSchema);

module.exports ={
   Issues: Issues
 }

/**
-points to specific lines of code on file
  -if no direct code set alert and mention to move to QA

-Chat like system:
  -User who posted
  -Reply to specific issues

-Status of issue: Open,Assigned, Closed
-Author, Labels,Projects, Asignee
-Should be able to be assigned to user

*Issue:{
author: [account name],
chat history: [Converstaion Blobs],
Assignee: [account],
Status: [status_variable],
Labels: [],
pay_to_asignee:[ boolean ]
}
**/
