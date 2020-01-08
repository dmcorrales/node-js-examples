const UserController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
const controller = new UserController();

router.post("/", (req, res) => {
    controller.create(req,res);
});

router.put("/:id", (req,res) => {
    controller.update(req,res);
});

router.get("/page/:page", (req,res) => {
    controller.findAll(req,res);
});

router.delete("/:id", (req,res) => {
    controller.delete(req,res);
});

module.exports = router;