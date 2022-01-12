const express = require('express')
const app = express();
const cookies = require('cookie-parser')

const PORT = process.env.PORT || 3000

app.use(cookies());

let users = {
    name:"John",
    age: 29
}

app.get('/',(req, res ) => {
    res.send("Cookies")
})

app.get('/setUser',(req, res ) => {
    res.cookie("userData",users)
    res.send("userdata added to cookies");
})


app.get('/getUser',(req, res ) => {
    res.send(req.cookies)
})

app.get('/loggedout',(req, res ) => {
    res.clearCookie("userData")
    res.send("User logged out sucess")
})

app.listen(PORT, () => {
    console.log(`Listening the request to http://localhost:${PORT}`);
})
