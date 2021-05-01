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

    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        if (notes.length === 0){
            newNote.id = 1
        } else {
            newNote.id = (notes[notes.length-1].id + 1);
        }
        notes.push(newNote);
        let jsonNotes = JSON.stringify(notes)
        fs.writeFile("./db/db.json", jsonNotes, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        })
        res.json(true)
    })

    

}