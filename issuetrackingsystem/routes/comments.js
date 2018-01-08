var express = require('express');
var router = express.Router();
const commentsController = require('../controllers').comments;

/* POST comments listing. */
router.post('/', commentsController.create);

module.exports = router;