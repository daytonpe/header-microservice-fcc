var mongoose = require("mongoose");
var HeaderSchema = new mongoose.Schema({
  unix: Number,
  natural: String
});
mongoose.model("Header", HeaderSchema);

module.exports = mongoose.model("Header");
