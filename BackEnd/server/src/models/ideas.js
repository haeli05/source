const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import {searchTextPlugin, aggregateTrendingPlugin, addStatsPlugin, addTextPlugin} from './plugins/statistics';
import {votePlugin} from './plugins/vote';
const autopopulate = require('mongoose-autopopulate');


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


const IdeasSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  body: {
  },
  stringBody: {
    type: String
  },
  edited:{
    type: Boolean,
    default: false
  },
  creator: {
    type:Schema.Types.ObjectId,
    ref: "user",
    required: [true, 'User is required'],
    autopopulate: {select:'username'}
  },
  date: {
    type: Date,
    default: Date.now,
    index: true
  },
  link: {
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
  blobs: {
    type: [],
    default: []
  },
  project: {
    type: [Schema.Types.ObjectId],
    ref: 'repo',
    default: []
  },
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
  deleted: {
    type: Boolean,
    default: false
  },
  upvotes: {
    type: Number,
    default: 0
  }
});

IdeasSchema.index({ title: 'text', search: 'text', tags: 'text'}, {name: 'search_index', weights: {title: 10, search: 7, tags: 3}, default_language: 'english'});


IdeasSchema.plugin(searchTextPlugin);
IdeasSchema.plugin(aggregateTrendingPlugin);
IdeasSchema.plugin(addStatsPlugin);
IdeasSchema.plugin(addTextPlugin);
IdeasSchema.plugin(votePlugin);
IdeasSchema.plugin(autopopulate);




const Ideas = mongoose.model('ideas', IdeasSchema);


module.exports ={
   Ideas: Ideas
 }
