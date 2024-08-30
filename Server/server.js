const express = require('express');

const app = express();

app.listen(4500,()=>{
    console.log("Server Started");
    console.log(__dirname);
})

app.get('/mobiles/:mobileName/:ram',(request,response)=>{
    if(request.query.city){
        response.send(`Hello welcome to ${request.query.city}`)
    }
    else if(request.params.mobileName){
        response.send(`These are the mobiles related to ${request.params.mobileName}`)
    }
    else if(request.params.ram){
        response.send(`These are the mobiles related to ${request.params.ram}`)
    }
    else{
        response.send("Hello, we are received your get request");
    }
})