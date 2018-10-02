const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: null },
    img_link: { type: String, default: null },
    user_role: { type: String, default: null },
    security_level: Number,
});

const User = mongoose.model('User', user);

module.exports = User;
