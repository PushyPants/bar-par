var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Locationschema = new Schema({
   location_id: {
       type: String,
       default: null
   },
   name: {
       type: String,
       default: null
   },
   parent_location: {
       type: String,
       default: null
   },
   positions: {
       type: Array,
       default: []
   }
});

var Locations = mongoose.model("Locations", Locationschema);

module.exports = Locations;
