const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
   name: {
      type: String,
      required: true,
      unique: true
   },
   songs: [{
      type: Schema.Types.ObjectId,
      ref: "Song"
   }],
   artist: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
   },

}, {
   timestamps: true
})

module.exports = Album = mongoose.model('Album', AlbumSchema);
