var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const bcrypt = require("bcrypt-nodejs");

var EmployeeSchema = new Schema({
  firstName: {
    type: String
    // required: true,
  },
  lastName: {
    type: String
    // required: true,
  },
  isAdmin: {
    type: String
    // default: false
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
    // required: true,
  },
  phone: {
    type: String
  },
  password: {
    type: String
    // required: true,
  },
  unavail: [
    {
      type: Schema.Types.ObjectId,
      ref: "Availability"
    }
  ],
  shifts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Shifts"
    }
  ]
});

//password encryption for user storage
EmployeeSchema.pre("save", function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;

      next();
    });
  });
});

EmployeeSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var EmployeeTable = mongoose.model("EmployeeTable", EmployeeSchema);

module.exports = EmployeeTable;
