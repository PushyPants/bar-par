const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const location = new Schema({
    parent_location: { type: String, required: true },
    child_location: { type: String, required: true },
    location: { type: String, required: true },
});

const Location = mongoose.model('Location', location);

module.exports = Location;
