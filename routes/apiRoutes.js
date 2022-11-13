//dependencies
const router = require("express").Router();
const uuid = require("uuid");
const path = require("path")
const fs = require('fs');

//router.get
router.get("/notes",(req, res) => {
   let text = "./db/db.json"
   res.json(text || []);
});



//router.post
 router.post("/notes",(req, res) => {
     fs.readFile(path.join(__dirname,"./db/db.json"),"utf8",(err, data) => {
    if (err) {
    console.error(err);
    return;

    }
    req.body.id = uuid();
    notes.push(req.body);
    var notes = JSON.parse(data);

    fs.writeFile(path.join(__dirname,"./db/db.json"),
        JSON.stringify(notes),(err) => {
            if (err) throw err;
                res.json(req.body);
            }
             );
    });
 });


            
module.exports = router;