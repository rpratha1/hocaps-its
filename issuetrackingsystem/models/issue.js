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
    Issue.belongsTo(models.User, {
      as: 'createdBy',
      foreignKey: 'createdBy'
    });

    Issue.belongsTo(models.User, {
      as: 'assignedTo',
      foreignKey: 'assignedTo'
    });

    Issue.belongsTo(models.IssueType, {
      foreignKey: 'issueType'
    });
  };
 /* }, {
      classMethods: {
        associate: (models) => {
          Issue.belongsTo(models.User, {
            as: 'createdBy',
            foreignKey: 'createdBy'
          });

          Issue.belongsTo(models.User, {
            as: 'assignedTo',
            foreignKey: 'assignedTo'
          });

          Issue.belongsTo(models.IssueType, {
            foreignKey: 'issueType'
          });
        },
      },*/

    
  return Issue;
};