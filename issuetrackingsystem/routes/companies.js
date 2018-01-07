var express = require('express');
var router = express.Router();
const companiesController = require('../controllers').companies;

/* POST roles listing. */
router.post('/', companiesController.create);

module.exports = router;