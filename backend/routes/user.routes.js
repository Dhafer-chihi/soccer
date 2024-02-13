const express = require('express')
const route = express.Router()
const User = require('../models/user')

route.post('/' , (req, res)=>{
    const data = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    })
    data.save().then(()=>{
        res.json({message : 'user added with success'})
    })
})



module.exports = route
