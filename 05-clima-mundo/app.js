const argv = require('./config/yargs').argv;
const axios = require('axios');
const Weather = require('./weather');

init = () => {
    let weather = new Weather();
    let result = weather.get(argv.direccion)
    .then(data => {
        console.log(data)
    });
    console.log(result)
}

init();