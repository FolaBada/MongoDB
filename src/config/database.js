const { config } = require("dotenv");
const mongoose = require("mongoose");

config();


 async function connect(uri){
    try{
        mongoose.connect(uri || process.env.MONGO_DB_LOCAL)
        console.log('Connected to mongoDB')
    }  
    catch(error){
        console.log(error.message)
    }
 }

 module.exports = connect;

