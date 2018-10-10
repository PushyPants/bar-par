const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('./passport');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
//session
app.use(
  session({
    secret: 'pushdeep',
    resave: false,
    saveUninitialized: false
  })
);

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  next()
});

app.post('/user', (req, res) => {
  console.log('user signup');
  req.session.username = req.body.username;
  res.end()
});

app.use(passport.initialize())

app.use(passport.session())

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barpar");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
