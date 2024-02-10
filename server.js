const app=require('./backend/app')
const port = 3000

app.listen(port , ()=>{
    console.log("Open on this port " + port)
})