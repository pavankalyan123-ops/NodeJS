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
    let data=sampleData;
    if (Object.keys(req.query).length > 0 && req.query.search) {
        let searchValue = req.query.search.toLowerCase();
        data = sampleData.filter(d => d.name.toLowerCase().includes(searchValue));
        if(!data)
        {
            res.status(404).send("search value could not find")
        }
    }
    res.send(data);
});

app.post("/users",(req,res)=>{

})

app.get("/users/:id",(req,res)=>{
    const data=sampleData.find(d=>d.id===parseInt(req.params.id));
    console.log(data);
    console.log(!data)
    if(!data)
    {
        res.status(404).send({error:"id is not found that you entered"})
    }
   res.send(data)
})



app.listen(5000,(req,res)=>{
    
    console.log("port is running in 5000")
})