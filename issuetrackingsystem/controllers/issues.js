const Issue = require('../models').issue;

module.exports = {
    create(req, res) {
        return Issue
            .create({
                summary: req.body.summary,
                description: req.body.description,
                status: req.body.status,
                priority: req.body.priority,
                createdByUser: req.body.createdByUser,
                assignedToUser: req.body.assignedToUser,
                issueTypeID: req.body.issueTypeID
            })
            .then(issue => res.status(201).send(issue))
            .catch(error => res.status(400).send(error));
    },
};