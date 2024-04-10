const express=require('express');
import sampleData from './usersList';
const app=express();

app.get("/users",(req,res)=>{
    res.send({name:"pavan"})
})


app.listen(5000,(req,res)=>{
    
    console.log("port is running in 5000")
})