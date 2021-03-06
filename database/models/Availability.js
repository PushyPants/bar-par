var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AvailableSchema = new Schema({
    date: {
        type: String,
        default: null
    },
    dayOfWeek: {
        type: Number,
        default: null
    },
    availStart: {
        type: String,
        default: null
    },
    availEnd: {
        type: String,
        default: null
    },
    isAvail: {
        type: Boolean,
        default: false
    },
    Employee: [{
        type: Schema.Types.ObjectId,
        ref: "EmployeeTable"
    }]
});

var Availability = mongoose.model("Availability", AvailableSchema);

module.exports = Availability;
