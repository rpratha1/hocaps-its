'use strict'

module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('issue', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      required: true
    },

    description: {
      type: DataTypes.TEXT,
      required: true
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },

    status: {
      type: DataTypes.STRING,
      required: true
    },

    priority: {
      type: DataTypes.STRING,
      required: true
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },

  
  });
  Issue.associate = function (models) {
    Issue.belongsTo(models.user, {
      as: 'createdBy',
      foreignKey: 'createdByUser'
    });

    Issue.belongsTo(models.user, {
      as: 'assignedTo',
      foreignKey: 'assignedToUser'
    });

    Issue.belongsTo(models.issueType, {
      foreignKey: 'issueTypeID'
    });
  };

    
  return Issue;
};