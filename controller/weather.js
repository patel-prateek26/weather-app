const {callWeatherApi} = require('../api');

const getWeatherDetails = (location, days) => {
    return callWeatherApi(location, days)
    .then(data => {
        const location = {
            name: data.location.name,
            lat: data.location.lat,
            lon: data.location.lon
        }
        const currentConditions = {
            temp_c: data.current.temp_c,
            temp_f: data.current.temp_f,
        }
        const forecastDay = data.forecast.forecastday.map(item => {
            return {
                date: item.date,
                date_epoch: item.date_epoch,
                day: getDayDetails(item.day),
                hour: getHourDetails(item.hour),
            };
        });
        return {
            location,
            currentConditions,
            forecastDay
        };
    });
};

const getDayDetails = (day) => {
    return {
        maxtemp_c: day.maxtemp_c,
        maxtemp_f: day.maxtemp_f,
        mintemp_c: day.mintemp_c,
        mintemp_f: day.mintemp_f,
    };
};

const getHourDetails = (hour) => {
    return hour.map(h => {
        return {
            time_epoch: h.time_epoch,
            time: h.time,
            temp_c: h.temp_c,
            temp_f: h.temp_f
        };
    });
};

module.exports = {
    getWeatherDetails
};