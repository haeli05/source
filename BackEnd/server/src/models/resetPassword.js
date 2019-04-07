const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResetPasswordSchema = new mongoose.Schema({
  expiry: {
    type: String,
    required: [true, 'Expiry is required']
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'user id is required'],
    index: true
  },
  used: {
    type: Boolean,
    default: false
  },
  token: {
    type: String,
    required: [true, 'Password reset token is required'],
    index: true
  }
});

const ResetPassword = module.exports = mongoose.model('resetPassword', ResetPasswordSchema);
