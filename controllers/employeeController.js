const db = require("../models");

// Defining methods for the booksController
module.exports = {
    find: function (req, res) {
        db.EmployeeTable
            .find()
            .populate('unavail', null, null, { sort: { dayOfWeek: 1 } })
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
            {_id: req.params.id},
            { $push: { unavail: req.body.avail } },
            { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
    updateAvail: function (req, res) {
        db.EmployeeTable.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { unavail: req.body.avail } },
            { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
};