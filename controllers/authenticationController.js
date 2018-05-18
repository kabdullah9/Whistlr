const db = require('../models');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const config = require('./../config');

const isAuthenticated = exjwt({
    secret: config.tokenSecret
});

module.exports = {
    findOne: function (req, res) {
        db.User.findOne({
            email: req.body.email
        }).then(user => {
            user.verifyPassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    let token = jwt.sign({ id: user._id, email: user.email }, config.tokenSecret, { expiresIn: 129600 }); // Sigining the token
                    res.json({ success: true, message: "Token Issued!", token: token, user: user });
                } else {
                    res.status(401).json({ success: false, message: "Authentication failed. Wrong password." });
                }
            });
        }).catch(err => res.status(404).json({ success: false, message: "User not found", error: err }));
    },

    create: function (req, res) {
        db.User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err));
    },

    findId: function (req, res) {
        db.User.findById(req.params.id).then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).send({ success: false, message: 'No user found' });
            }
        }).catch(err => res.status(400).send(err));
    }

}