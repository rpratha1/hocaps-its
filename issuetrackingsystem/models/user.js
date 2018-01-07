'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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

  });
  User.associate = function (models) {
    User.belongsTo(models.role, {
      foreignKey: 'roleid'
    });

    User.belongsTo(models.company,{
      foreignKey: 'companyid'
    });
  };

  return User;
};