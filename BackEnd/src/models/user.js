const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
import {searchTextPlugin, aggregateTrendingPlugin, addStatsPlugin, addTextPlugin} from './plugins/statistics';


const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Name must not exceed {ARGS[1]} characters.'
  })
];

const emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Email must not exceed {ARGS[1]} characters.'
  }),
  validate({
    validator: 'isEmail',
    message: 'Email must be valid.'
  })
];

/**
const sshValidator = [
  validate({

  })
]
**/
const ageValidator = [
  // TODO: Make some validations here...
];

const genderValidator = [
  // TODO: Make some validations here...
];

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



// Define the database model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    validate: nameValidator
  },
  username: {
    type: String,
    required: [true, 'Name is required.'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: emailValidator
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, 'Password is required.'],
    select: false
  },
  bio:{
    type: String
  },
  location:{type:String},
  website:{type:String},
  skills:{
    type:[String],
    default: [],
    validate: {
      validator: function() {
        return this.skills.length <= 100;
      },
      message: 'Cannot have more than 100 skills.'
    }
  },
  social: {
    type:[String],
    default: [],
    validate: {
      validator: function() {
        return this.social.length <= 10;
      },
      message: 'Cannot have more than 10 social links.'
    }
  },
  projects:[{
        project: {type: Schema.Types.ObjectId, ref: 'repo'},
        role: {type: String}      //The role of the user (as specified on EOS)
  }],
  wallets: [{type:String}],
  followers:[{type: Schema.Types.ObjectId, ref: 'user'}],
  following: [{type: Schema.Types.ObjectId, ref: 'user'}],
  groupsOwned: [{type:String}],
  groupsJoined: [{type:String}],
  avatar: {
    type: String,
    default: "https://s3.amazonaws.com/source-images-xyz/5J2rt6mKx1Fw8cfb3TvbzDs31y9r56MRHHNJzgef7xbnBUMCCQo"
  },
  tags:{
    type: [String],
    default: [],
    validate: {
      validator: function() {
        return this.tags.length <= 100;
      },
      message: 'Cannot follow more than 100 tags.'
    }
  }
});

UserSchema.index({ username: 'text', name: 'text'}, {name: 'search_index', weights: {username: 10, name: 7}, default_language: 'english'});


UserSchema.plugin(searchTextPlugin);
UserSchema.plugin(aggregateTrendingPlugin);
UserSchema.plugin(addStatsPlugin);
UserSchema.plugin(addTextPlugin);


//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

//authenticate input against database
UserSchema.statics.authenticate = function (Username, password, callback) {
  User.findOne({ username: Username })
    .select('+password')
    .exec(function (err, user) {
      if (err) {
        return callback(err);
      }
      else if (!user) {
        const err = new Error('Username or Password mismatch');
        err.status = 401;
        return callback(err,null);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null,user);
        }
        else {
          const err = new Error('Username or Password mismatch')
          return callback(err,null);
        }
      });
    });
};


// Use the unique validator plugin
UserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

// UserSchema.methods.toJSON = function() {
//   var obj = this.toObject()
//   delete obj.password;
//   // delete obj.privateKey;
//
//   return obj
// }


const User = module.exports = mongoose.model('user', UserSchema);

/**
var uint8ArrayToInt = function(arr) {
	const len = arr.length;
	if (len === 0) { return 0; }

	return arr[len-1] + (uint8ArrayToInt(arr.subarray(0, len-1)) << 8);
};

// Classify as RSA or DSA and extract the key.
const classify = function(key) {
	// See http://crypto.stackexchange.com/a/5948. We also allow DSA.

	if (typeof key !== 'string') { return null; }

	// Remove unix/windows linebreaks.
	key = key.replace(/\r?\n/g, '');

	// RSA/DSA.
	const matches = /AAAAB3NzaC1(yc2E|kc3M)[A-Za-z0-9+\/=]+/.exec(key);

	if ((matches == null)) { return null; }

	key = matches[0];

	switch (matches[1]) {
		case 'yc2E': return { type: 'rsa', key };
		case 'kc3M': return { type: 'dsa', key };
		default: return null;
	}
};

const extract = key =>
	// TODO: Reduce duplcate work.
	__guard__(classify(key), x => x.key)
;

const validate = function(key) {
	let type;
	const classification = classify(key);
	if ((classification == null)) { return 'Invalid key.'; }
	({ type, key } = classification);

	if ((key == null)) {
		return 'Missing header.';
	}

	// TODO: The below code only handles, RSA, we have only the header check for DSA.
	if (type === 'dsa') { return true; }

	const arr = base64binary.decode(key);

	const secondLength = uint8ArrayToInt(arr.subarray(11, 15));
	let lengthSoFar = 4 + 7 + 4 + secondLength;
	const thirdLength = uint8ArrayToInt(arr.subarray(lengthSoFar, lengthSoFar+4));
	lengthSoFar += 4 + thirdLength;

	if (lengthSoFar !== arr.length) {
		return 'Invalid key length.';
	}

	return true;
};

const exposed = { classify, extract, validate };
function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}

or


const isKeyValid = function(rawKey) {

  let keyBytes;
  const getBytesAndSplit = function(bytes) {
    const sizeLen = 4;  // size represent is always 4 bytes in BE
    if (bytes.length < (sizeLen + 1)) { return false; }
    // split integer body size and other bytes(body and other integers)
    const sizeBytes = bytes.slice(0, sizeLen);
    const bytesAndTail = bytes.slice(sizeLen);
    // get body size in bytes (BE)
    const size = (((sizeBytes.charCodeAt(0) << (8 * 3)) +
      (sizeBytes.charCodeAt(1) << (8 * 2))) +
      (sizeBytes.charCodeAt(2) << (8 * 1)) +
      (sizeBytes.charCodeAt(3) << (8 * 0)));
    // fail there is no enough bytes in body
    if (bytesAndTail.length < size) { return false; }
    const integerBytes = bytesAndTail.slice(0, size);
    const tail = bytesAndTail.slice(size);
    // and return body of integer and remaining bytes
    return [integerBytes, tail];
  };

  const checkIntregers = function(num, bytes) {
    // check correct numbers count in binary body
    for (let _intNum = 0, end = num, asc = 0 <= end; asc ? _intNum < end : _intNum > end; asc ? _intNum++ : _intNum--) {
      // try to get one integer
      let _int;
      const result = getBytesAndSplit(bytes);
      if (result === false) { return false; }
      [_int, bytes] = Array.from(result);
    }  // and repeat with tail
    return bytes.length === 0;  // fail if somethink stay in body
  };

  // get human type representation, base64 encoded binary body and
  // optional comment
  const keyTokens = rawKey.trim().split(" ");
  if (keyTokens.length < 2) { return false; }  // fail if no type or body
  const [humanType, keyBase64, _textTail] = Array.from(keyTokens);
  // fail if format is not supported
  if (!["ssh-rsa", "ssh-dss"].includes(humanType)) { return false; }
  try {
    // decode base64 body
    keyBytes = atob(keyBase64);
  } catch (error) {
    return false;
  }
  // parse binary format type
  const typeSizeParse = getBytesAndSplit(keyBytes);
  if (!typeSizeParse) { return false; }  // fail if no parse
  const [_type, keyBody] = Array.from(typeSizeParse);
  switch (humanType) {
    // for RSA body is 2 numbers
    case "ssh-rsa": return checkIntregers(2, keyBody);
    // and 4 for DSA
    case "ssh-dss": return checkIntregers(4, keyBody);
    default: return false;
  }
};

if ((typeof module !== "undefined") && module.exports) {
  var atob = require("atob");
  module.exports.isKeyValid = isKeyValid;
}
**/
