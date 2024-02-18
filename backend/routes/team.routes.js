const express = require('express')
const Team = require('../models/team')
const team = require('../models/team')

const route = express.Router()


route.post('/' , (req , res)=>{
    const data = new Team({teamName , teamCountry}=req.body)
    data.save().then(()=>{
        res.status(200).json({message : 'team added' , data})
    })
})


route.get('/' , (req , res)=>{
    Team.find().then((findedObject)=>{
        res.status(200).json({teams : findedObject})
    })
})




module.exports = route