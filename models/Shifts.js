var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ShiftsSchema = new Schema({
    date: {
        type: String,
        default: null
    },
    dayOfWeek: {
        type: Number,
        default: null
    },
    shiftStart: {
        type: Number,
        default: 0
    },
    shiftEnd: {
        type: Number,
        default: 0
    },
    isAvail: {
        type: Boolean,
        default: true
    },
    Employee: {
        type: Schema.Types.ObjectId,
        ref: "EmployeeTable"
    }
});

var Shifts = mongoose.model("Shifts", ShiftsSchema);

module.exports = Shifts;
