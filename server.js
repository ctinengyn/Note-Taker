// Set up basic properties for express server //
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const mainDir = path.join(__dirname, "/public")

// Creating an "express" server //
const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connects everything in the "public" folder //
app.use(express.static("public"));

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(mainDir, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(mainDir, 'notes.html')));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));