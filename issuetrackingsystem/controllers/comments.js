const Comment = require('../models').comment;

module.exports = {
  create(req, res) {
    return Comment
      .create({
        description:req.body.description,
        onIssue: req.body.onIssue,
        postedBy: req.body.postedBy
      })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
};