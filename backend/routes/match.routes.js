const express = require('express')
const Match = require('../models/match')

const route = express.Router()


//Add match 
route.post('/' , (req , res)=>{
    const data = new Match({teamOne , teamTwo , scoreOne , scoreTwo } = req.body)
        // teamOne : req.body.teamOne,
        // teamTwo : req.body.teamTwo,
        // scoreOne : req.body.scoreOne,
        // scoreTwo : req.body.scoreTwo
        
    
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
route.patch('/', (req , res)=>{
    console.log("req" , req.body);

    Match.updateOne({_id : req.body._id} , req.body).then(()=>{
        res.status(200).json({message : "Match edited with success"})
    })
})




module.exports = route