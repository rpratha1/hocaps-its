const User = require('../models').user;

const bcrypt = require('bcrypt');

module.exports = {
    create(req, res) {
        let hash = bcrypt.hashSync('myPassword', 10);
        return User
            .create({
                username: req.body.username,
                name: req.body.name,
                phone: req.body.phone,
                emailId: req.body.emailId,
                password: hash,
                roleid: req.body.roleid,
                companyid: req.body.companyid
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};