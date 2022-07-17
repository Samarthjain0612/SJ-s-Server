const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", 'ejs');
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/userdata", function(req, res){
    fs.appendFile("./data.txt", `Name : ${req.query.username}\nDOB : ${req.query.dob}\nMobile : ${req.query.mob}\nE-mail : ${req.query.email}\n\n`, function(err){
        if(err) throw err
        res.render("submitted", {name : req.query.username})
    })
})
app.listen(3000, function(){
    console.log("SJ's Server started...");
})