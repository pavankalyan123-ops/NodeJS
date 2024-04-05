const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send({
        name:"pavan",
        age:25
    })
})

app.listen(3000,(req,res)=>{
    
    console.log("port is running in 3000")
})