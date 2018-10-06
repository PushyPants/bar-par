var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AvailableSchema = new Schema({
    date: {
        type: String,
        default: null
    },
    dayOfWeek: {
        type: String,
        default: null
    },
    unavailStart: {
        type: String,
        default: null
    },
    unavailEnd: {
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
