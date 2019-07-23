const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autopopulate = require('mongoose-autopopulate');
import {votePlugin} from './plugins/vote';

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
  ideaID:{
    type: Schema.Types.ObjectId,
    ref: 'ideas',
    required:[true,"Idea reference required to post a blob"]
  },
  body:{
    type: String
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
  IdeaBlob: mongoose.model('ideaBlob',IdeaBlobSchema)
}
