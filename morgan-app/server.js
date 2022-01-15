const express = require("express");
const morgan = require("morgan");
const {v4 : uuidv4} = require("uuid");
const app = express();



const port = 3000;

app.use(morgan(':method '));

app.get('/',(req, res)=>{
    res.end("morgan logger")
})

function assignId(req, res) {
    req.id = uuid4();
    next();
}

app.listen(3000,() => {
    console.log(`Listening on http://localhost${port}`);
})