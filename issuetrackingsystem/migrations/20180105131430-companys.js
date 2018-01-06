'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('companys',
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
                phone: {
                    type: Sequelize.INTEGER
                },
                address: {
                    type: Sequelize.TEXT
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
        queryInterface.dropTable('companys');
    }
};