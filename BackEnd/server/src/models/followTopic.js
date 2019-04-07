const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FollowSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'user',
    index: true
  },
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel',
    index: true
  },
  onModel: {
    type: String,
    required: true,
    enum: ['issues', 'ideas', 'repo']
  }
});


const FollowTopic = module.exports = mongoose.model('followTopic', FollowSchema);
