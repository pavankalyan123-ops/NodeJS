const express=require('express');
//import sampleData from './usersList';
const sampleData=require('./usersList')
const app=express();

// app.get("/users",(req,res)=>{
//     if(Object.keys(req.query).length>0){
//         let searchValue=req.query.search;
//         let data=sampleData.filter(d=>d.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
//         res.json(data);
//     }
//     res.json(sampleData)
// })

app.get("/users", (req, res) => {
    let data = sampleData;
    if (Object.keys(req.query).length > 0 && req.query.search) {
        let searchValue = req.query.search.toLowerCase();
        data = sampleData.filter(d => d.name.toLowerCase().includes(searchValue));
    }
    res.json(data);
});


app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const data=sampleData.filter(d=>d.id==id);
    if(data!==undefined){
        res.json(data)
    }else{
        res.status(404).json({ error: "This ID does not exist" });
    }
})



app.listen(5000,(req,res)=>{
    
    console.log("port is running in 5000")
})