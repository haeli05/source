const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
import {votePlugin} from './plugins/vote';

//To-do: Create code datatype
const IssueBlobSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    autopopulate: {select:'_id name username avatar'}
  },
  date: {
    type: Date,
    default: Date.now
  },
  /**
  code:{
    type: Code,
  }
  **/
  issueID: {
    type: Schema.Types.ObjectId,
    ref: 'issues'
  },
  body:{
  },
  edited:{
    type: Boolean,
    default: false
  },
  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
});

const IdeaBlobSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true,'User required to post a blob'],
    autopopulate: {select:'_id name username avatar'}
  },
  date: {
    type: Date,
    default: Date.now
  },
  /**
  code:{
    type: Code,
  }
  **/
  ideaID:{
    type: Schema.Types.ObjectId,
    ref: 'ideas',
    required:[true,"Idea reference required to post a blob"]
  },
  body:{
  },
  edited:{
    type: Boolean,
    default: false
  },
  upvotes: {
    type: Number,
    default: 0
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

IssueBlobSchema.plugin(autopopulate);

IdeaBlobSchema.plugin(autopopulate);
IdeaBlobSchema.plugin(votePlugin);
IdeaBlobSchema.pre('save', function(next) {
  if (this.deleted == true) {
    this.body = 'deleted';
    next();
  }
  else {
    next();
  }
})


module.exports={
  IssueBlob : mongoose.model('issueBlob', IssueBlobSchema),
  IdeaBlob: mongoose.model('ideaBlob',IdeaBlobSchema)
}
