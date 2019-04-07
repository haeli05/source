const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required.']
  },
  body: {
    type: String,
    required: [true, 'Body is required.']
  },
  date: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  },
  viewed: {
    type: Number,
    default: 0
  },
  username:{
    type: String,
    required: [true, 'Username is required.']
  },
  tags:{
    type: [String],
    default: [],
    validate: {
      validator: function() {
        return this.tags.length <= 4;
      },
      message: 'Can not have more than 4 tags.'
    }
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'answer'
  }],
  edited:{
    type: Boolean,
    default: false
  }
});


const AnswerSchema = new mongoose.Schema({
  body: {
    type: String,
    required: [true, 'Body is required.']
  },
  _questionid: {
    type: Schema.Types.ObjectId,
    ref: 'question'
  },
  date: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  },
  username:{
    type: String,
    required: [true, 'Username is required.']
  },
  comments: {
    type: [String],
    default: []
  },
  edits:{
    type: Boolean,
    default: false
  },
  communityChoice:{
    type: Boolean,
    default: false
  },
  userChoice:{
    type:Boolean,
    default:false
  }
});



module.exports = {
  Question: mongoose.model('question', QuestionSchema),
  Answer:  mongoose.model('answer', AnswerSchema)
};
