'use strict'

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      required: true
    },

    phone: {
      type: DataTypes.INTEGER
    },

    address: {
      type: DataTypes.TEXT,
    },

  },
  { freezeTableName: true });
  return Company;
};