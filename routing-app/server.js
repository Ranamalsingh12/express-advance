const express = require('express');
const app = express();
const bodyParser= require("body-parser")

app.use(bodyParser.urlencoded({extended : false}));

const port = process.env.PORT || 3000;

const route = require("./router")
app.use('/api',route)

//home route
app.get('/',(req, res) => {
    res.end("Routing app")
})

app.listen(3000,()=>{
    console.log(`Listening the server on http://localhost${port}`);
});