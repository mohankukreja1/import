const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')

const config=require('./config')
const user=require('./db/deploydb').user
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.use('/',express.static(path.join(__dirname,'public_static')))
app.get('/task',(req,res)=>{
    user.findAll({}).then((user)=>{
        res.send(user)
    }).catch((err)=>{
        console.log(err)
    })
})

app.post('/task',(req,res)=> {
        user.create({
            stuff: req.body.stuff
        }).then((user) => {
            res.redirect('/task')
        })
            .catch((err) => {
                console.log(err)
            })
    }
)
app.listen(config.port,()=>{
    console.log('server has started')
})
