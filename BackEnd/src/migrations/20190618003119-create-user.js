'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
		allowNull: false
      },
      username: {
        type: Sequelize.STRING,
		unique: true,
		allowNull: false
      },
      email: {
        type: Sequelize.STRING,
		unique: true,
		allowNull: false
      },
      password: {
        type: Sequelize.STRING,
		allowNull: false
      },
      bio: {
        type: Sequelize.STRING,
		allowNull: true
      },
      avatar: {
        type: Sequelize.STRING,
		allowNull: false
      },
      popularity: {
        type: Sequelize.INTEGER,
		allowNull: false
      },
      location: {
        type: Sequelize.STRING,
		allowNull: true
      },
      website: {
        type: Sequelize.STRING,
		allowNull: true
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: true
      },
      social: {
        type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: true
      },
      description: {
        type: Sequelize.STRING,
		allowNull: true
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: true
      },
      groupsOwned: {
        type: Sequelize.STRING,
		allowNull: true
      },
      groupsJoined: {
        type: Sequelize.STRING,
		allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
