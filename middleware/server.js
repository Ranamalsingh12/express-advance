const express = require("express");
const path = require("path");
const fs = require("fs")

const app = express();

const port = process.env.PORT || 3000


app.use(function (req, res) {
    console.log("Request Date" + new Date());
    res.send("Hey")
    next();
})

app.use(function (req, res, next) {
    var filepath = path.join(__dirname,"static",req.url)
    fs.stat(filepath,function (err, fileInfo) {
        if(err){
            next();
            return
        }
        if(fileInfo.isFile()){
            res.sendFile(filepath);
        }
        else{
            next();
        }
    })
})

app.listen(3000,()=>{
    console.log(`Server is running at http://localhost:${port}`)
;})