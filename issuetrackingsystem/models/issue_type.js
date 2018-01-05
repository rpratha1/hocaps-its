'use strict'

module.exports = (sequelize, DataTypes) => {  
  const IssueType = sequelize.define('issueType', {
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
    description: {
      type: DataTypes.TEXT,
      required: true
    },
  });

  return IssueType;
};