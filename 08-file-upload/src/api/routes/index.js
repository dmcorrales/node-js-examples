const {Router} = require("express");
const router = Router();
const fileUpload = require("../routes/fileUpload.route");
router.use('/file', fileUpload);

module.exports = router;
