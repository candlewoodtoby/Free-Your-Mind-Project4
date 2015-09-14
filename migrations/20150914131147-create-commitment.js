'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('commitments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      actionable: {
        type: Sequelize.BOOLEAN
      },
      trash: {
        type: Sequelize.BOOLEAN
      },
      someday: {
        type: Sequelize.BOOLEAN
      },
      reference: {
        type: Sequelize.BOOLEAN
      },
      lessThanTwo: {
        type: Sequelize.BOOLEAN
      },
      doItNow: {
        type: Sequelize.BOOLEAN
      },
      doItLater: {
        type: Sequelize.BOOLEAN
      },
      doItWhenever: {
        type: Sequelize.BOOLEAN
      },
      delegate: {
        type: Sequelize.BOOLEAN
      },
      delegateName: {
        type: Sequelize.STRING
      },
      calendar: {
        type: Sequelize.DATE
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('commitments');
  }
};