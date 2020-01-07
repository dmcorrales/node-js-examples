const axios = require('axios');

class Weather{
    constructor() {
    }

    buildAxiosInstance(location){
        return axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(location)}`,
            headers: {'X-RapidAPI-Key':
            '79a80192e1msh5345c68839ea13fp13586fjsn18ca3d8c3036'}
        });
    }

    async get(location){

        try {
            let instance = await this.buildAxiosInstance(location).get();
            let { Results:results, name, lat, lon } = instance.data;
            console.log(name)

            if(results === 0){
                throw new Error("No se encontraron resultados de la localización especificada");
            }

            return {
                name, lat, lon
            }
            
        } catch (error) {
            console.log(error);
        }
    } 
    
};

module.exports = Weather;