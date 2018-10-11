const EmployeeTable = require('../database/models/EmployeeTable')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
	
		console.log("Reached the strat")
		EmployeeTable.findOne({ email: email }, (err, user) => {
			console.log(user);
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.comparePassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
			
		})
	}
)

module.exports = strategy
