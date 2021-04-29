const fs = require("fs");

module.exports = function(app){
    let notes = require("../db/db.json");

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

}