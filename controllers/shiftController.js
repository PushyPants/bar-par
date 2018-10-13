const db = require("../database/models");

// Defining methods for the booksController
module.exports = {
    find: function (req, res) {
        db.Shifts
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        db.Shifts.remove(
            {_id: req.params.id}
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
    insert: function (req, res) {
        db.Shifts.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    update: function (req, res) {
        db.Shifts.findOneAndUpdate(
            { _id: req.params.id },
            req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
};