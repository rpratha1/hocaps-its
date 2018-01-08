var express = require('express');
var router = express.Router();
const issueTypesController = require('../controllers').issueTypes;

/* POST issue type. */
router.post('/', issueTypesController.create);

module.exports = router;