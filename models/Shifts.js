var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ShiftsSchema = new Schema({
    date: {
        type: String,
        default: null
    },
    dayOfWeek: {
        type: String,
        default: null
    },
    shiftStart: {
        type: String,
        default: null
    },
    shiftEnd: {
        type: String,
        default: null
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
