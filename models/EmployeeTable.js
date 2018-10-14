var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    isAdmin: {
        type: Number,
        // default: false
    },
    email: {
        type: String,
        // required: true,
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        // required: true,
    },
    avail: [{
        type: Schema.Types.ObjectId,
        ref: "Availability"
    }],
    // shifts: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Shifts"
    // }]
});

var EmployeeTable = mongoose.model("EmployeeTable", EmployeeSchema);

module.exports = EmployeeTable;
