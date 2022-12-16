'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const figlet = require('figlet');
const { logErrors, unhandledErrorHandler } = require('./error-handlers/error-handlers');
const app = express();
const routes = require('./handler');
const cors = require('cors');
const port = 8080;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes());
app.use(logErrors);
app.use(unhandledErrorHandler);

app.listen(port, () => {
    return Promise.resolve(true)
        .then(_ => {
            console.log(figlet.textSync('Weather App!', {
                horizontalLayout: 'default',
                verticalLayout: 'default'
            }));
            console.log(`server started at port: ${port}`);
        })
        .catch(err => {
            console.log("error while initializing: ", err);
        });
});
