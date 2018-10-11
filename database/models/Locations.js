var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Locationschema = new Schema({
   type: {
       type: String,
       default: null
   },
   name: {
       type: String,
       default: null
   },
   locations: {
       type: Array,
       default: []
   }
});

var Locations = mongoose.model("Locations", Locationschema);

module.exports = Locations;
