 'use strict';

let routes = require('express').Router({ mergeParams: true });
const weather = require('./weather');

module.exports = () => {
    routes.use('/weather', weather());
    return routes;
}
