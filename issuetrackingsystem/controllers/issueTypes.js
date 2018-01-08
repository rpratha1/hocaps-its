const IssueType = require('../models').issueType;

module.exports = {
    create(req, res) {
        return IssueType
            .create({
                name: req.body.name,
                description: req.body.description
            })
            .then(issueType => res.status(201).send(issueType))
            .catch(error => res.status(400).send(error));
    },
};