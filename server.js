<<<<<<< HEAD:server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barpar");
//test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we in this, B");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
=======
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MySchedUL");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
>>>>>>> 66a29db42d8244ad5279c57753b1a8ca48822478:server.js
