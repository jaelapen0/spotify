const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
   title: {
      type: String,
      required: true,
      unique: true
   },
   songs: [{
      type: Schema.Types.ObjectId,
      ref: "Artist"
   }],
   creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
   }

}, {
   timestamps: true
})

module.exports = Playlist = mongoose.model('Playlist', PlaylistSchema);
