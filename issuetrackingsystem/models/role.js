'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Role = sequelize.define('role', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
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
      type: DataTypes.STRING,
      required: true
    },
  });

  return Role;
};
