'use strict'

module.exports = (sequelize, DataTypes) => {  
  const IssueType = sequelize.define('issueType', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
  });

  return IssueType;
};