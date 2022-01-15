const express = require("express");
const morgan = require("morgan");
const { v4 } = require("uuid");
const app = express();

const port = 3000;

morgan.token('id',function getId(req) {
    return req.id;
});

morgan.token('mayank',function (req,res,mayank) {
    return "user id"
})

app.use(assignId);

app.use(morgan(':id :mayank :url :response-time"'));

app.get('/',(req, res)=>{
    res.end("morgan logger")
})

function assignId(req, res, next) {
    req.id = v4();
    console.log('id ', req.id); 
    next();
}

app.listen(3000,() => {
    console.log(`Listening on http://localhost${port}`);
})