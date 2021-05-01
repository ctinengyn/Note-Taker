const fs = require("fs");

// Routing
module.exports = function(app){
    // Connect routes to notes data
    let notes = require("../db/db.json");

    // GET request
    app.get("/api/notes", (req, res)=>{
        
        return res.json(notes)
    })

    app.get("/api/notes/:id", (req, res) => {

        const id = req.params.id;
        let found;
        notes.forEach(n => {
            if (id == n.id){
                found = n;
                return res.json(n)
            }
        })
        return res.json(false)
    })

    // API POST request
    app.post("/api/notes", (req, res) => {

        // New note from request body
        const newNote = req.body;
        if (notes.length === 0){
            newNote.id = 1
        } else {
            newNote.id = (notes[notes.length-1].id + 1);
        }

        // Pushed new note in notes file 'db.json'
        notes.push(newNote);
        let jsonNotes = JSON.stringify(notes)

        // Written notes data to 'db.json' file
        fs.writeFile("./db/db.json", jsonNotes, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        })

        // Send response
        res.json(true)
    })

    // API DELETE request
    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        let found;
        notes.forEach((n, index) => {
            if(id == n.id){
                notes.splice(index,1)
                const notesCopy = notes.slice();
                let jsonNotes = JSON.stringify(notesCopy)
                fs.writeFile("./db/db.json", jsonNotes, function(err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Success!");
                })
            }
        })
        res.json(true)
    })
}