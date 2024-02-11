const mongoose = require('mongoose')


const db_connect = mongoose.connect('mongodb://127.0.0.1:27017/Mean_DB').then(()=>{
    console.log('Connected')
})


module.exports = db_connect