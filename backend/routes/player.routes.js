const express = require('express')
const route = express.Router()
const Player = require('../models/player')

route.post('/' , (req ,res)=>{
    const data = new Player({
        name : req.body.name,
        poste : req.body.poste,
        nbr : req.body.nbr,
        age : req.body.age  
    })
    data.save().then(()=>{
        res.json({message : 'player added with success'})
    })
})

route.get('/' , (req ,res)=>{
    Player.find().then((objectfinded)=>{
        res.status(200).json({players : objectfinded})
    })
})

route.get('/:id' , (req ,res)=>{
    Player.findOne({_id : req.params.id}).then((objectfinded)=>{
        if (objectfinded){
            res.status(200).json({player : objectfinded})
        }else {
            res.status(400).json({message : 'Player not found'})
        }
    })
})

route.delete('/:id' , (req , res)=>{
    
    Player.deleteOne({_id : req.params.id}).then((objectfinded)=>{
            res.status(200).json({message : 'Player deleted with success'})
    })
})

route.patch('/:id' , (req ,res)=>{
    Player.updateOne({_id : req.body._id} , req.body).then(()=>{
        res.status(200).json({message : 'Player edited with success'})
    })
})


module.exports = route