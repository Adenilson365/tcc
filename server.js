const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    res.send({msg:"Hello World"})
})

app.listen(80, ()=>{
    console.log("Ouvindo na 80")
})