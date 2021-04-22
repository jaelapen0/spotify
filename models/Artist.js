const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
   name: {
      type: String,
      required: true,
      unique: true
   },
   songs: [{
      type: Schema.Types.ObjectId,
      ref: "Song"
   }],
   // albums: [{
   //    type: Schema.Types.ObjectId,
   //    ref: "Album"
   // }],

}, {
   timestamps: true
})

module.exports = Artist = mongoose.model('Artist', ArtistSchema);
