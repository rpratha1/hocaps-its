const Role = require('../models').role;

module.exports = {
  create(req, res) {
    return Role
      .create({
        name: req.body.name,
        hierarchyNo: req.body.hierarchyNo,
        description:req.body.description
      })
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
};