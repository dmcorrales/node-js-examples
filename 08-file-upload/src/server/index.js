const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload({useTempFiles: true}));
app.use('/', require("../api/routes"));

app.listen(8000, () => {
    console.log("Se ha iniciado el servicio en el puerto: 8000");
});