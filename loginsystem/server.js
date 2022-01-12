const express = require("express");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000

app.set("view engine","ejs");

//load static asset
app.use('/static', express.static( path.join(__dirname,'Public')));
app.use('/assets', express.static(path.join(__dirname,'Public/assets')))

//home route
app.get('/',(req, res) => {
    res.render('base',{title : "Login System"});
})


app.listen(PORT,() => {
    console.log("Listening to the server on http://localhost:3000");
})