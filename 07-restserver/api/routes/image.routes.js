const express = require("express");
const router = express.Router();
const { ImageController  } = require('../controllers');
const controller = new ImageController();

router.put("/", (req, res) => {
    console.log("HEY")
    controller.upload(req,res);
});

module.exports = router;