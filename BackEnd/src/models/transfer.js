const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransferSchema = new mongoose.Schema({
  from: {
    type: String,
    required: [true, 'Sender [from] is required.']
  },
  to: {
    type: String,
    required: [true, 'Receiver [to] is required.']
  },
  quantity: {
    type: String,
    required: [true, 'Quantity is required.']
  },
  date: {
    type: Date,
    default: Date.now
  },
  memo: {
    type: String
  },
  txID: {
    type: String,
    required: [true, 'txID is required']
  }
});



const Transfer = module.exports = mongoose.model('transfer', TransferSchema);
