'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('comments',
            {
                "id": {
                    "type": "CHAR(36) BINARY",
                    "primaryKey": true,
                    "defaultValue": {}
                },
                "description": {
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
            return queryInterface.dropTable('comments');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};