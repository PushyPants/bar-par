const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./database') 

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bar-par");
//session
app.use(
  session({
    secret: 'pushdeep',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
  );
  
  app.use(passport.initialize())
  
  app.use(passport.session())
  
  
  app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
