const axios = require('axios');

const getClima = async(lat, long) => {
    const instance = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b53e3b36585fe967af6cb36da5a70ecf&units=metric`);

    return instance.data.main.temp;
}

module.exports = {
    getClima
}