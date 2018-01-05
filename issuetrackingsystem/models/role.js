'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Role = sequelize.define('role', {
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
    hierarchyNo: {
      type: DataTypes.INTEGER,
      required: true
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  return Role;
};
