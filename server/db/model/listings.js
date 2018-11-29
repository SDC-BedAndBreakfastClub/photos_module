const mongoose = require('mongoose');

let listingSchema = new mongoose.Schema({
  id : Number,
  name: String
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
