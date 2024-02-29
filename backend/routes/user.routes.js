const express = require('express')
const brypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const route = express.Router()
const User = require('../models/user')



const secretKey = 'your-secret-key'



// Signup 

route.post('/' , (req, res)=>{

    brypt.hash(req.body.password , 8 ,(err , hash)=>{
       if(err){
        console.log(err)
       }else {
        const data = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : hash,
            role : req.body.role
        })
        data.save().then(()=>{
            res.json({message : 'user added with success'})
        })
       }
    })

})

// Login

route.post('/login' , (req , res)=>{
    User.findOne({email : req.body.email}).then(async (findedUser)=>{
       if(!findedUser){
        res.status(200).json({message : "Email not valid" })
       }
       let trusted = await brypt.compare(req.body.password , findedUser.password)
       if (!trusted) {
        res.status(200).json({message : "Password not valid" })
       } else {
        const token = jwt.sign({user : findedUser} , secretKey)
        res.status(200).json({message : "Welcom" , user : token})
       }
    })
    
})



module.exports = route
