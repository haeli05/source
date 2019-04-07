const mongoose = require('mongoose');


const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Group has to have a name"],
    unique: true
  },
  members: [{type: String,required:[true,"Group must contain a single member"]}],
  repositories: [{type:String}],
  pinned: [{type:String}],
  admins: [{type: String}],
  owners: [{type: String}],
  account_address:{type:String},
  src_raised:{type: Number,default:0},
  contract: {
    enabled: {type:Boolean,default:false},
    distribution: {type:Boolean,default:false},
    permissions: {type:Boolean,default:false},
    address: {type: String},
  },
  info:{
    avatar:{type:String},
    bio: {type:String},
    website: {type:String}
  },
  teams: [{
    names:{
      members: [{type:String}]
    }
  }]
});

const Group = module.exports = mongoose.model('group', GroupSchema);
