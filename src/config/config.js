const dotenv = require('dotenv');
dotenv.config();

const _config = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}

 const config = Object.freeze(_config);

module.exports = config;
