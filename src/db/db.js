const mongoose = require('mongoose');

const  connect = ()=>{
        mongoose.connect("mongodb://localhost:27017/miniblog")
        .then(() => {
            console.log("Connected to the database successfully");
        })
     .catch((err)=>{
        console.error("Error connecting to the database:", err);
    })
}
module.exports = connect;