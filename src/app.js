const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./router/router');
const { SERVER_PORT } = require('./config/config');
const databaseConnection = require('./database/databaseConnection');
const errorHandle = require('./middlewares/errorHandlerMiddleware');

const app = express();

//* access to the public files
app.use('/static', express.static('public'));
//* view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
//* extend body req data
app.use(express.urlencoded({ extended: true }));
//* cookie parser
app.use(cookieParser());
//* routes logic
app.use(router);
//* error handler middleware 
app.use(errorHandle)
//* database and server logic 
const serverConnection = () => app.listen(SERVER_PORT, () => console.log(`Server is listening on port :  ${SERVER_PORT}`));
databaseConnection(serverConnection)