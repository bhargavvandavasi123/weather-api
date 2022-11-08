const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("cities", citiesSchema);
