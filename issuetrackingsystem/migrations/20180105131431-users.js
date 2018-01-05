'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('users',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                username: {
                    type: Sequelize.STRING,
                    required: true
                },
                name: {
                    type: Sequelize.STRING,
                    required: true
                },
                phone: {
                    type: Sequelize.INTEGER
                },
                emailId: {
                    type: Sequelize.STRING,
                    required: true
                },
                password: {
                    type: Sequelize.STRING,
                    required: true
                },
                role: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'roles',
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
    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('users');
    }
};