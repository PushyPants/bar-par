var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  
    brand : {type: String, required: true}, 
    product : {type: String, default: null}, 
    volume : {type: Number, required: true}, 
    spirit_type : {type: String, required: true}, 
    spirit_sub_type : {type: String, default: null}, 
    par : {type: Number, default: null}, 
    Distributor : {type: String, default: null}, 
    wholesaler : {type: String, default: null}, 
    cost : {type: Number, default: null}, 
    sku : {type: Number, default: null}

});

var Products = mongoose.model("Products", ProductSchema);

module.exports = Products;