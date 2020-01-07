const UserController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
const controller = new UserController();
const { ErrorOutput } = require("../domains");

router.post("/", (req, res) => {
        controller.create(req,res).then(response => {
            res.json(response);
        }).catch(e => {
            res.status(400);
            res.json(new ErrorOutput(e.message));
        });
});

router.put("/:id", (req,res) => {
    controller.update(req,res).then(response => {
        res.json(response);
    }).catch(e => {
        res.status(400);
        res.json(new ErrorOutput(e.message));
    });
});

router.get("/page/:page", (req,res) => {
    controller.findAll(req,res).then(response => {
        res.json(response);
    }).catch(e => {
        res.status(400);
        res.json(new ErrorOutput(e.message));
    });
});

module.exports = router;