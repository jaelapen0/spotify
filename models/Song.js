const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
   title: {
      type: String,
      required: true,
      unique: true
   },
   artist: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
   },
   // album: {
   //    type: Schema.Types.ObjectId,
   //    ref: "Album"
   // },
   description: {
      type: String,
      required: true
   },
   genre: {
      type: String,
      required: true
   },

}, {
   timestamps: true
})

module.exports = Song = mongoose.model('Song', SongSchema);
