'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable('comments',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                description: {
                    type: Sequelize.TEXT,
                    required: true
                },
                postedBy: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                },
                onIssue: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'issues',
                        key: 'id'
                    },
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })
    },
    down: function(queryInterface, Sequelize) {
    queryInterface.dropTable('comments');
    }
};