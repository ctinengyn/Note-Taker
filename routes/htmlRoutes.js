// Dependencies
const path = require("path");

// Routing
module.exports = function(app){

    // HTML GET Requests
    // When users "visit" page
    // Each cases the user is shown an HTML page

    // Route to notes page
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Route to index page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}