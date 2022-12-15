'use strict';

let routes = require('express').Router({ mergeParams: true });
const weather = require('./getWeather')();

module.exports = () => {
    routes.get('/get', weather);
    return routes;
}
