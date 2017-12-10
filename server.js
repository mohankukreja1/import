const express=require('express')
const path=require('path')
const config=require('./config')
const app=express()

app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.use('/',express.static(path.join(__dirname,'public_static')))

app.listen(config.port,()=>{
    console.log('server has started')
})
