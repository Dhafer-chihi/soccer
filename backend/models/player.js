const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    name : String,
    poste : String,
    nbr : Number,
    age : Number
})

const player = mongoose.model('Player' , playerSchema)

module.exports = player