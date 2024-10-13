const express = require('express');

const router = require('./router/router');
const { SERVER_PORT } = require('./config/config');
const databaseConnection = require('./database/databaseConnection');

const app = express();

//* access to the public files
app.use('/static', express.static('public'));
//* view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
//* extend body req data
app.use(express.urlencoded({ extended: true }));
//* routes logic
app.use(router);
//* database and server logic 
const serverConnection = () => app.listen(SERVER_PORT, () => console.log(`Server is listening on port :  ${SERVER_PORT}`));
databaseConnection(serverConnection)