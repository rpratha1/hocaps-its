'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('roles',
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
                hierarchyNo: {
                    type: Sequelize.INTEGER,
                    required: true
                },
                description: {
                    type: Sequelize.TEXT,
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
    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('roles');
    }
};