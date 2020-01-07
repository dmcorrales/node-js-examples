const UserController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

const controller = new UserController();
router.post("/", (req, res) => {
    try{
        controller.create(req,res).then(response => {
            res.json(response);
        }).catch(err => 
            console.log(err))
    }catch(err){
        console.log(err);
    }
    
});

router.get("/hola", (req,res) =>{
    res.json("hola")
})
module.exports = router;