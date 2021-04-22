
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Playlist = require('../../models/Playlist');
const Song = require('../../models/Song')
router.get("/", (req, res) => {
   debugger;
   Playlist.find()
   .populate('songs')   
   .then(playlists => {
      debugger;
      res.json(playlists)
   })
   .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
})
module.exports = router;