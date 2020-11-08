const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección en la ciudad',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {

        const ub = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(ub.lat, ub.lon);
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);