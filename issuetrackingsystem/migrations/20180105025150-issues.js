'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('issues',
            {
                "id": {
                    "type": "CHAR(36) BINARY",
                    "primaryKey": true,
                    "defaultValue": {}
                },
                "username": {
                    "type": "VARCHAR(255)",
                    "required": true
                },
                "name": {
                    "type": "VARCHAR(255)",
                    "required": true
                },
                "phone": {
                    "type": "INTEGER"
                },
                "emailId": {
                    "type": "VARCHAR(255)",
                    "required": true
                },
                "password": {
                    "type": "VARCHAR(255)",
                    "required": true
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                }
            })
        })

        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('issues');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};