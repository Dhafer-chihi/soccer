const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    eamil : String,
    password : String
})

const user = mongoose.model('User' , userSchema)
module.exports = user