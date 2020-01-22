const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand: true
    }
}).argv;

const location = require('./location/location');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {

        const cord = await location.getLLL(argv.direccion);
        const temp = await clima.getClima(cord.lat, cord.lon);

        return `EL CLIMA DE ${cord.nombre} ES DE ${temp} ° CENTIGRADOS`
    } catch (error) {
        return `NO SE PUDO DETERMINAR EL CLIMA DE ${cord.nombre}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);