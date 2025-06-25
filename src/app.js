const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importing the admin routes
const adminRoutes = require('./routes/admin.routes');

app.use("/admin", adminRoutes);


module.exports = app;