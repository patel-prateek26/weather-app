'use strict';

const { getWeatherDetails} = require('../../controller/weather');

module.exports = () => {
    return (req, res, next) => {
        const location = req.query.location;
        const days = req.query.days;
        if (!location || !days) {
            return res.status(400).send({errorMessage: "location or days parameters are missing in request"});
        }
        return getWeatherDetails(location, days)
            .then(result => {
                console.log(result);
                return res.send(result);
            }).catch(next);
    }
}
