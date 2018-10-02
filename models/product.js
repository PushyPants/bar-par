const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    brand: { type: String, required: true },
    product_name: { type: String, required: true },
    volume: { type: Number, default: null },
    spirit_type: { type: String, required: true },
    spirit_sub_type: { type: String, required: true },
    par: { type: Number, required: true },
    distributor: { type: String, default: null },
    wholesaler: { type: String, default: null },
    cost: { type: Number, default: null },
    sku: { type: Number, default: null },
});

const Product = mongoose.model('Product', product);

module.exports = Product;
