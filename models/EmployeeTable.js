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
        type: String,
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
    unavail: [{
        type: Schema.Types.ObjectId,
        ref: "Availability"
    }]
});

var EmployeeTable = mongoose.model("EmployeeTable", EmployeeSchema);

module.exports = EmployeeTable;
