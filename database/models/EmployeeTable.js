var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");

mongoose.promise = Promise;

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
  avail: [
    {
      type: Schema.Types.ObjectId,
      ref: "Availability"
    }
  ],
  // shifts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Shifts"
  //   }
  // ]
});

EmployeeSchema.methods = {
  comparePassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

//password encryption for user storage
EmployeeSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})


var EmployeeTable = mongoose.model("EmployeeTable", EmployeeSchema);

module.exports = EmployeeTable;
