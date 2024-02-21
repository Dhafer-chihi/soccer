const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : {type : String , unique : true},
    password : String,
    role : String
})

const user = mongoose.model('User' , userSchema)
module.exports = user