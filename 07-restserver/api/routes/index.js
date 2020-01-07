const {Router} = require('express');
const UserRoutes = require('./user.routes');
const bodyParser = require('body-parser');
const compression = require("compression");
const cors = require('cors');
const express = require("express");
const router = express.Router();
router.use('/user', UserRoutes);
module.exports = router;