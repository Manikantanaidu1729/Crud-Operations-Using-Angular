const express = require('express');

const app = express();

const cors = require('cors');

const db = require('./database.js');

app.use(express.json());

app.use(cors());

app.listen(5000,()=>{
    console.log("server started at port 5000");
})

app.get("/",(request,response)=>{
    response.send("Server Running")
})

app.get("/mobiles",(request,response)=>{
    db.getMobiles().then(function(mobiles){
        response.send(mobiles);
    }).catch(function(error){
        response.send("error");
    })
})

app.post("/mobiles",(request,response)=>{
    db.addMobiles(request.body.name,request.body.price,request.body.ram,request.body.storage).then(function(res){
        response.send(res);
    }).catch(function(error){
        response.send("error");
    })
})

app.put("/mobiles",(request,response)=>{
    db.updateMobiles(request.body.id,request.body.name,request.body.price,request.body.ram,request.body.storage).then(function(res){
        response.send(res);
    }).catch(function(error){
        response.send("error");
    })
})

app.delete("/mobiles/:id",(request,response)=>{
    db.deleteMobiles(request.params.id).then(function(mobiles){
        response.send(mobiles);
    }).catch(function(error){
        response.send("error");
    })
})