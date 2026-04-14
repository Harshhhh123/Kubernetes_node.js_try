const express = require('express');
const app= express();

app.get('/hello', (req,res)=>{
    res.send('hello from kubernetes');

})

app.get("/api/users",(req,res)=>{
    res.json([
        {name:"Harsh"},
        {name:"Alex"}
    ])
})

const port= 3000;
app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);
})