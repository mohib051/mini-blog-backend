const app = require('./src/app');
const connect = require('./src/db/db');
connect()

const config = require('./src/config/config.js');

app.listen(config.PORT, () => {
    console.log('Server is running on port 8080');
} );