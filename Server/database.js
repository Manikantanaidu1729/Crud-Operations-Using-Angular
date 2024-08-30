const sql = require('mysql2');

const mobiles = sql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'root1729',
    database: 'mobiles'
   }
)

function getMobiles(){
    return new Promise(function(success,reject){
        mobiles.query('select * from mobiles',(error,rows,columns)=>{
            if(error){
                reject(error);
            }
            else{
                success(rows);
            }
        });
    })
}

function addMobiles(name,price,ram,storage){
    return new Promise(function(success,reject){
        mobiles.query(`Insert into mobiles(name,price,ram,storage) values(?,?,?,?)`,[name,price,ram,storage],(error,response)=>{
            if(error){
                reject(error);
            }
            else{
                success(response);
            }
        })
    })
}

function updateMobiles(id,name,price,ram,storage){
    return new Promise(function(success,reject){
        mobiles.query(`update mobiles set name=?,price=?,ram=?,storage=? where id=?`,[name,price,ram,storage,id],(error,response)=>{
            if(error){
                reject(error);
            }
            else{
                success(response);
            }
        })
    })
}

function deleteMobiles(id){
    return new Promise(function(success,reject){
        mobiles.query(`delete from mobiles where id=?`,[id],(error,response)=>{
            if(error){
                reject(error);
            }
            else{
                success(response);
            }
        })
    })
}

module.exports = {
    addMobiles,updateMobiles,deleteMobiles,getMobiles
}