'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    description: {
      type: DataTypes.STRING,
      required: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      foreignKey: 'postedBy',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.Issue, {
      foreignKey: 'onIssue',
      onDelete: 'CASCADE',
    });

  };

  return Comment;
};
