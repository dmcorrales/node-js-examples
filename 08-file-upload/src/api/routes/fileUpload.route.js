const {Router} = require("express");
const router = Router();

router.get("/upload", (req,res) => {
    res.json("Hello!");
})
 
module.exports = router;