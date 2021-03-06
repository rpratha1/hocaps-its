'use strict'

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      required: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
  });
  Comment.associate = function (models) {
    Comment.belongsTo(models.user, {
      foreignKey: 'postedBy',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.issue, {
      foreignKey: 'onIssue',
      onDelete: 'CASCADE',
    });
  };

  return Comment;
};
