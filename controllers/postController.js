const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Post
            .find(req.query)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err))
    },

    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}