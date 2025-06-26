const mongoose = require('mongoose');
const config = require('../config/config');

const  connect = ()=>{
        mongoose.connect(config.DB_URL)
        .then(() => {
            console.log("Connected to the database successfully");
        })
     .catch((err)=>{
        console.error("Error connecting to the database:", err);
    })
}
module.exports = connect;