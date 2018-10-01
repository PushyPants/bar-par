const db = require("../models");

// Defining methods for the booksController
module.exports = {
    find: function (req, res) {
        db.Shifts
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        db.Shifts.remove(req.params.id)
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
            req.params.id,
            req.body,
            { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
};