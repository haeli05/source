'use strict';
module.exports = (sequelize, DataTypes) => {
	const Project = sequelize.define('Project', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		board: DataTypes.JSON,
		contactMethod: DataTypes.ARRAY(DataTypes.STRING)
	}, {});
	Project.associate = function(models) {
		// associations can be defined here
		Project.belongsTo(User, {as: 'creator'});
	};
	return Project;
};
