const express = require('express')
const route = express.Router()
const Match = require('../models/match')


//Add match 
route.post('/' , (req , res)=>{
    const data = new Match({
        teamOne : req.body.teamOne,
        teamTwo : req.body.teamTwo,
        scoreOne : req.body.scoreOne,
        scoreTwo : req.body.scoreTwo
        
    })
    data.save().then(()=>{
        res.status(200).json({message : 'match added with success' , data})
    })
})


//get all matches
route.get('/' , (req ,res)=>{
    Match.find().then((findedObject)=>{
        res.status(200).json({
            matches : findedObject
        })
    })
})


//get match by id
route.get('/:id' , (req , res)=>{
    Match.findOne({_id : req.params.id}).then((findedObject)=>{
        if(findedObject){
            res.status(200).json({match : findedObject})
        }else{
            res.status(400).json({message : 'match not found'})
        }
        
    })
})


//delete match by id 
route.delete('/:id' , (req , res)=>{
     Match.deleteOne({_id : req.params.id}).then(()=>{
        res.status(200).json({message : 'match deleted with success'})
     })
})


//Edit match 
route.patch('')




module.exports = route