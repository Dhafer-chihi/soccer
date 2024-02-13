const express = require('express')
const bodyParser = require('body-parser')
const db_connect = require('./config/db')

//DB connect
// mongoose.connect('mongodb://127.0.0.1:27017/Mean_DB')
// .then(()=>{console.log('Connected')})

db_connect.then()

const app = express()


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

//Security configuration body-parser
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });



app.use(express.json())
// app.use(express.urlencoded({extended : true}))

app.use("/matches" , require('./routes/match.routes'))
app.use("/users" , require('./routes/user.routes'))
app.use("/players" , require('./routes/player.routes'))

console.log("server run")

// app.listen(port , ()=>{
//     console.log('My App run on server' + port)
// })

module.exports = app //