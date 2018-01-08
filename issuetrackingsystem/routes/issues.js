var express = require('express');
var router = express.Router();
const issuesController = require('../controllers').issues;

/* POST issue type. */
router.post('/', issuesController.create);

module.exports = router;