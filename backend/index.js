const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./models/User')

const app=express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/quizDB")

app.post('/SignUp',(req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/signIn',(req,res)=>{
    const{regNo,password} = req.body;
    userModel.findOne({regNo:regNo})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("Password is Wrong")
            }
        } else {
            res.json("No recode existed")
        }
    })
})


app.listen(8070,()=>{
    console.log("Server is running")
})