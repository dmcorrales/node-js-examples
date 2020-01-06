const {Router} = require('express');
const UserRoutes = require('./user.routes');
const bodyParser = require('body-parser');
const compression = require("compression");
const cors = require('cors');

module.exports = function(){
    const router = Router();

    router.use(cors())
    .use(compression());



    return router;
}


const express = require("express");
const router = express.Router();
console.log("azerty");
router.use('/user', UserRoutes);
module.exports = router;