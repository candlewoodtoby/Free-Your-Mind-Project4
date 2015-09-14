'use strict';
module.exports = function(sequelize, DataTypes) {
  var commitment = sequelize.define('commitment', {
    description: DataTypes.STRING,
    actionable: DataTypes.BOOLEAN,
    trash: DataTypes.BOOLEAN,
    someday: DataTypes.BOOLEAN,
    reference: DataTypes.BOOLEAN,
    lessThanTwo: DataTypes.BOOLEAN,
    doItNow: DataTypes.BOOLEAN,
    doItLater: DataTypes.BOOLEAN,
    doItWhenever: DataTypes.BOOLEAN,
    delegate: DataTypes.BOOLEAN,
    delegateName: DataTypes.STRING,
    calendar: DataTypes.DATE,
    completed: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.commitment.belongsTo(models.user),
        models.commitment.hasMany(models.action)
      }
    }
  });
  return commitment;
};