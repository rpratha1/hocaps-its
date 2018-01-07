'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable('issues',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                summary: {
                    type: Sequelize.STRING,
                    required: true
                },
                description: {
                    type: Sequelize.TEXT,
                    required: true
                },
                status: {
                    type: Sequelize.STRING,
                    required: true
                },
                priority: {
                    type: Sequelize.STRING,
                    required: true
                },
                createdByUser: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                },
                assignedToUser: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'users',
                        key: 'id'
                    },
                },
                issueTypeID: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'issueTypes',
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
         queryInterface.dropTable('issues');
    }
};