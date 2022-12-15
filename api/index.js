const axios = require('axios');

const callWeatherApi = (location, days) => {
    const baseUrl = 'https://api.weatherapi.com/v1/forecast.json';
    const url = `${baseUrl}?key=0b354f71f12b4f91b6674531220107&q=${location}&days=${days}&aqi=no&alerts=no`;
    return axios.get(url,
    { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    }
    ).then(result => {
        console.log('result: ', result.data);
        return result.data;
    }).catch(error => {
        console.error(error.stack);
        throw error;
    });
}

// q=Bengaluru&days=3
module.exports = {
    callWeatherApi
}