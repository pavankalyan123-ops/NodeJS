const express=require('express');
import sampleData from './usersList';
const app=express();

app.get("/users",(req,res)=>{
    res.send(sampleData)
})


app.listen(3000,(req,res)=>{
    
    console.log("port is running in 3000")
})