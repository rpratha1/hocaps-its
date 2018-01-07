const Company = require('../models').company;

module.exports = {
  create(req, res) {
    return Company
      .create({
        name: req.body.name,
        phone: req.params.phone,
        description: req.params.description,
      })
      .then(company => res.status(201).send(company))
      .catch(error => res.status(400).send(error));
  },
};