const db = require("../models");

// Defining methods for the booksController
module.exports = {
    find: function (req, res) {
        db.EmployeeTable
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        db.EmployeeTable.remove({
            _id: req.params.id
        }).then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
    create: function (req, res) {
        db.EmployeeTable
            .create(req.body)
            .then(dbModel => res.send(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.EmployeeTable.findOneAndUpdate(
            req.params.id,
            req.body,
            { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
};