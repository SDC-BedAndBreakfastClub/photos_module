// const mongoose = require('mongoose');
//
// let Schema = mongoose.Schema;
//
// let photoSchema = new Schema({
//   id: Number,
//   listings_id: [
//     {type: Schema.Types.ObjectId, ref: 'Listing'}
//   ],
//   image_url: String,
//   description: String,
//   is_verified_photo: Boolean,
//   createdAt: Date,
//   updatedAt: Date
// });
//
// const Photos = mongoose.model('Photos', photoSchema);
//
// module.exports = Photos;