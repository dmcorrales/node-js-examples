const nodemon = require("nodemon");
const ExtensionHelper = require("../helpers/extension.helper");
class FileUploadController{
    constructor(){
        this._extensionHelper = new ExtensionHelper();
    }

    async uploadFile(req, res){
       if(!req.files)
           return res.status(400).json("No files found to upload");
       

        let fileUpload = req.files.fileUpload;
        let arrayFile = fileUpload.name.split('.');
        let isValidExtension =this._extensionHelper.validateExtension(arrayFile[1]);
        
        if(!isValidExtension)
            return res.status(500).json("Extensión no permitida");
        
        fileUpload.mv(`./uploads/${new Date().getTime()}.${arrayFile[1]}`, (err) => {
            if(err)
                return res.status(500).json("Error al subir archivo");
        });

        return res.json("Se ha subido correctamente el archivo");
    }
}

module.exports =  FileUploadController;