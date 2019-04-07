const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpvoteSchema = new mongoose.Schema({
  key: { //   userID||objectID
    type: String,
    index: true,
    required: [true, 'Key is required']
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'user',
    index: true
  },
  objectId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel',
    index: true
  },
  onModel: {
    type: String,
    required: true,
    enum: ['issues', 'ideas', 'repo', 'issueBlob', 'ideaBlob']
  },
  vote: { // 0 = no vote | < 0  = downvote | > 0 = upvote
    type: Number,
    default: 0
  }
});




const Upvote = module.exports = mongoose.model('upvotes', UpvoteSchema);
