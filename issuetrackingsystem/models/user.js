'use strict'

module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('issue', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      required: true
    },

    name: {
      type: DataTypes.STRING,
      required: true
    },

    phone: {
      type: DataTypes.INTEGER
    },

    emailId: {
      type: DataTypes.STRING,
      required: true
    },

    password: {
      type: DataTypes.STRING,
      required: true
    },
  }, {
      classMethods: {
        associate: (models) => {
          Issue.belongsTo(models.Role, {
            foreignKey: 'role'
          });
        },
      },
    });


  return Issue;
};