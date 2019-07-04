//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `El clima de ${coordenadas.dir} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    //esto no funciona es solo como lo habia pensado
    // return new Promise((resolve, reject) => {
    //     const place = lugar.getLugarLatLng(direccion)
    //         .then(console.log);

    //     clima.getClima(place.lat, place.lon)
    //         .then(resp => {
    //             resolve(`El clima de ${direccion} es de ${resp}`);
    //         })
    //         .catch(reject(`No se pudo determinar el clima de ${direccion}`));
    // });
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);