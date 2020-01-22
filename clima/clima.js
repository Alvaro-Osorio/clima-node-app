const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`htpps://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c10761acee2d65e96fecea4635113ee8&units=metric`)
    const temperatura = resp.data.main.temp;

    return temperatura;
}

module.exports = {
    getClima
}