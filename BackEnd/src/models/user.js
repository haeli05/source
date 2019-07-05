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
		bio: {
			type: DataTypes.STRING,
			allowNull: true
		},
		avatar: {
			type: DataTypes.STRING, 
			defaultValue: "https://s3.amazonaws.com/source-images-xyz/5J2rt6mKx1Fw8cfb3TvbzDs31y9r56MRHHNJzgef7xbnBUMCCQo",
			allowNull: false
		},
		popularity: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		location: {
			type: DataTypes.STRING,
			allowNull: true
		},
		website: {
			type: DataTypes.STRING,
			allowNull: true
		},
		skills: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			validate: {
				max: 100
			},
			allowNull: true
		},
		social: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			validate: {
				max: 10
			},
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tags: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			validate: {
				max: 100
			},
			allowNull: true
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
