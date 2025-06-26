const dotenv = require('dotenv');
dotenv.config();

const _config = {
    PORT: process.env.PORT || 8080,
    DB_URL: process.env.DB_URL || 'mongodb+srv://mohib_051:DM3rXXellGvZvM4b@cluster0.ae6nd.mongodb.net/miniblog',
}

 const config = Object.freeze(_config);

module.exports = config;