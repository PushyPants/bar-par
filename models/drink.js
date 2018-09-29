const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drink = new Schema({
    brand: { type: String, required: true },
    productName: { type: String, required: true },
    type: { type: String, required: true },
    volume: { type: Number, default: null },
    productCost: { type: Number, default: null },
    alcoholPricing: {type: Number, default: null}
});

const Drink = mongoose.model('Drink', drink);

module.exports = Drink;
