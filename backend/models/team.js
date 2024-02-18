const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    teamName : String,
    teamCountry : String
})

const team = mongoose.model('Team' , teamSchema)
module.exports = team