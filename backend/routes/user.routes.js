const express = require('express')
const brypt = require('bcrypt')
const route = express.Router()
const User = require('../models/user')





route.post('/' , (req, res)=>{

    brypt.hash(req.body.password , 10 ,(err , hash)=>{
       if(err){
        console.log(err)
       }else {
        const data = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : hash
        })
        data.save().then(()=>{
            res.json({message : 'user added with success'})
        })
       }
    })

    
    
})



module.exports = route
