const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors()) 
const db = require('./config/keys').mongoURI;

const passport = require('passport');
const mongoose = require('mongoose');
const path = require('path');

const server = require("http").createServer(app);

const connect = mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log("Connected to MongoDB successfully"))
   .catch(err => console.log(err));

//ROUTES
const users = require("./routes/api/users");
const playlists = require("./routes/api/playlists");
const aws = require("./routes/api/aws");


if (process.env.NODE_ENV === 'production') {
   app.use(express.static('frontend/build'));
   app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
   })
}

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/playlists", playlists);
app.use("/api/aws", aws);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));


