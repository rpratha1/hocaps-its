'use strict'

module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('issue', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    summary: {
      type: DataTypes.STRING,
      required: true
    },

    description: {
      type: DataTypes.STRING,
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

    modifiedAt: {
      type: DataTypes.DATE
    },

  }, {
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
      },

    });

  return Issue;
};