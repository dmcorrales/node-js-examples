const UserController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

const controller = new UserController();
router.post("/", controller.create);
module.exports = router;