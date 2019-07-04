const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '6cd54b5c8fmsh5f653624275e705p1de747jsn98a92d38f745' }
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('Error ', err);
    //     });
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}