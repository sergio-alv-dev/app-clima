const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeUrl}`,
        // timeout: 1000,
        headers: { 'x-rapidapi-key': '8865fc6444msh294a8c4f24a4f0bp15eeeejsn2bea383f4d5a' }
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        throw new Error(`no hay resultados para ${direccion}`);
    }

    const data = resp.data.location;
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
    // cf8338fa503cd803829938a87690985c