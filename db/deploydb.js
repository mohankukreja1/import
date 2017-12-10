const sequelize=require('sequelize')
const config=require('../config')
const datatype=sequelize.DataTypes
const db = new sequelize(config.databaseuri)
const user=db.define('task',{
    id:{
        type:datatype.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    stuff:{
        type:datatype.STRING
    }
})
user.sync({force:true}).then(()=>{
    console.log('table created')
})
.catch((err)=>{
    console.error(err)
})
exports=module.exports={
    user
}