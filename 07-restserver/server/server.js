require('./config');

const DatabaseConfiguration = require('../config/db/index');
const express = require('express');
const color = require('colors');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../api/routes/index');

console.log(routes)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api',routes);
var _db = new DatabaseConfiguration();


buildStatus = (res,code,message) => {
    res.status(code).json({
        fail:true,
        message
    })
};


app.listen(process.env.PORT, () => {
    console.log("Se ha iniciado, y se está escuchando en el puerto".blue, process.env.PORT);
});