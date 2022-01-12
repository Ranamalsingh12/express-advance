const express = require("express");
const path = require('path');
const bodyparser = require('body-parser');
const session = require("express-session");
const app = express();
const {v4: uuidv4} = require("uuid")

const router = require('./router')

const PORT = process.env.PORT || 3000

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.set("view engine","ejs");

//load static asset
app.use('/static', express.static( path.join(__dirname,'Public')));
app.use('/assets', express.static(path.join(__dirname,'Public/assets')))

app.use(session({
    secret : uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.use('/route',router)

//home route
app.get('/',(req, res) => {
    res.render('header',{title : "Login System"});
})


app.listen(PORT,() => {
    console.log("Listening to the server on http://localhost:3000");
})