// Set up basic properties for express server 
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const mainDir = path.join(__dirname, "/public")

// Express configuration
// Creating an "express" server 
const app = express();

// Sets an initial port
var PORT = process.env.PORT || 1996;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connects everything in the "public" folder 
app.use(express.static("public"));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));