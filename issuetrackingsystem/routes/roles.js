var express = require('express');
var router = express.Router();
const rolesController = require('../controllers').roles;

/* POST roles listing. */
router.post('/', rolesController.create);

module.exports = router;