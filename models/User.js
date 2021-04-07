const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   playlists: [{
      type: Schema.Types.ObjectId,
      ref: "Playlist"
   }],
   liked_songs: [{
      type: Schema.Types.ObjectId,
      ref: "Song"
   }]
   
}, {
   timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
