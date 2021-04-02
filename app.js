const express = require("express");
const app = express();

//const db = require('./config/keys').mongoURI;

const passport = require('passport');
const mongoose = require('mongoose');

const path = require('path');

const server = require("http").createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
