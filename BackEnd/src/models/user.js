const validator = require('validator');
const bcrypt    = require('bcrypt');

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
		groupsOwned: {
			type: DataTypes.STRING,
			validate: {
				len: [3,60]
			},
			allowNull: true
		},
		groupsJoined: {
			type: DataTypes.STRING,
			validate: {
				len: [3,60]
			},
			allowNull: true
		},
	}, {});

	User.associate = function(models) {
		// associations can be defined here
		User.hasMany(User, {as: 'follower'});
		User.hasMany(User, {as: 'following'});
	};

	// Hashing password before saving it to the database
	User.beforeCreate((user, options) => {
		bcrypt.hash(user.password, 10, function (err, hash) {
			if (err) {
				return next(err);
			}
			user.password = hash;
		});
	});

	return User;
};
