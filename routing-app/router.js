const express = require("express");
const route = express.Router();
const accounts = require("./dataabase")

//Get request
route.get('/accounts',(req,res)=>{
    res.json({ userData : accounts})
})

//POST request
route.post('/accounts',(req, res) => {
    const incomingAccount = req.body 
    accounts.push(incomingAccount)
    res.json(accounts)
})

route.get('/accounts/:id',(req,res) => {
    const accountid = Number(req.params.id)
    const getAccount = accounts.find((account)=>{
        account.id === accountid
    })

    if(!getAccount){
        res.status(500).send("Account not found")
    }
    else{
        res.json({ userData : [getAccount]})
    }
})


//PUT http method
route.put('/accounts/:id',(req, res)=>{
    const accountid = Number(req.params.id)
    const body = req.body;
    const account = accounts.find((account) => account.id === accountid)
    const index = accounts.indexOf(account);
    if(!account){
        res.status(500).send("Account not found")
    }
    else{
        // const update = {...account ...body}
        console.log(account);
        // accounts[index] = 
        res.end()
    }
})

module.exports = route;