var express = require("express")
var router = express.Router();

const credential = {
    email : "admin@gmail.com",
    password : "admin@123"
}

//login user

router.post('/login',(req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        // res.end("Login Successfull")
        res.redirect('/route/dashboard');
    }
    else{
        res.end("Invalid user")
    }
})

//route for dashboard
router.get('/dashboard',(req, res)=> {
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }
    else{
        res.send("Unauthorise user")
    }
})

module.exports = router ;