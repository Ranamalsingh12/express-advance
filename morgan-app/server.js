const express = require("express");
const morgan = require("morgan");
const { v4 } = require("uuid");
const fs = require("fs");
const path = require("path")
const app = express();

const port = 3000;

morgan.token('id',function getId(req) {
    return req.id;
});

morgan.token('tokens',function (req,res,mayank) {
    return "user id"
})


app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));
// app.use(morgan(':id :token :url :response-time"'),{stream});

app.use(assignId);

// app.use(morgan(':id :url :response-time"'));

app.get('/',(req, res)=>{
    res.end("morgan logger")
})

function assignId(req, res, next) {
    req.id = v4();
    next();
}

app.listen(3000,() => {
    console.log(`Listening on http://localhost${port}`);
})