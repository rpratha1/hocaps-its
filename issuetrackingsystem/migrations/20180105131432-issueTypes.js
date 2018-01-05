'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable('issueTypes',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: {
                    type: Sequelize.STRING,
                    required: true
                },
                description: {
                    type: Sequelize.TEXT,
                    required: true
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
       queryInterface.dropTable('issueTypes');
    }
};