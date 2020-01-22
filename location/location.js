const axios = require('axios');

const getLLL = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '9e236fe78bmsh7cfbd54220953edp1f21a9jsn851b42097824' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const nombre = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        nombre,
        lat,
        lon
    }
}

module.exports = {
    getLLL
}