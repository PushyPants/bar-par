const db = require("../database/models");
const passport = require("../passport")

// Defining methods for the booksController
module.exports = {
    find: function (req, res) {
        db.EmployeeTable
            .find()
            .populate('avail', null, null, { sort: { dayOfWeek: 1 } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    findOne: function (req, res) {
        db.EmployeeTable
            .find({
                _id: req.params.id
            })
            .populate('avail', null, null, { sort: { dayOfWeek: 1 } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        db.EmployeeTable.findByIdAndDelete({
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
            { $push: { avail: req.body.avail } },
            { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
    updateAvail: function (req, res) {
        db.EmployeeTable.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { avail: req.body.avail } },
            { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }
};