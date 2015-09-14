'use strict';
module.exports = function(sequelize, DataTypes) {
  var action = sequelize.define('action', {
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    commitmentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.action.belongsTo(models.commitment)
      }
    }
  });
  return action;
};