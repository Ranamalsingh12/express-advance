const express = require("express");
const morgan = require("morgan");
const app = express();

const port = 3000;

app.use(morgan(':method :status'));


app.get('/',(req, res)=>{
    res.end("morgan logger")
})

app.listen(3000,() => {
    console.log(`Listening on http://localhost${port}`);
})