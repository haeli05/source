import validator from 'validator';
import bcrypt from 'bcrypt';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
	  name: {
		  type: DataTypes.STRING, 
		  validate: {
			  // Check name only contains characters
			  is: ["^[a-z]+$",'i'],
			  len: [1,30]
		  },
		  allowNull: false
	  },
	  username: {
		  type: DataTypes.STRING, 
		  validate: {
			  len: [2,16]
		  },
		  allowNull: false,
		  unique: true
	  },
	  email: {
		  type: DataTypes.STRING, 
		  validate: {
			  isEmail: true,
			  max: 50
		  },
		  allowNull: false,
		  unique: true
	  },
	  password: {
		  type: DataTypes.STRING,
		  validate: {
			  len: [8,42]
		  },
		  allowNull: false
	  },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
