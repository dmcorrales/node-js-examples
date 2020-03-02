const {FormatValidatorUtil} = require('../util');

class ImageController {
    
    constructor(){
        this._formatValidatorUtil = new FormatValidatorUtil();
    }    

    upload(req, res){

        if(!req.files)
            res.status(400).json("No files found to upload");
        
         let fileUpload = req.files.image;
         let arrayFile = fileUpload.name.split('.');
         let isValidExtension = this._formatValidatorUtil.validate(arrayFile[1]);
         
         if(!isValidExtension)
             res.status(500).json("Extensión no permitida");
         
         let folder = `${process.env.IMAGE_PATH}`;
         
         let fileName = `${new Date().getTime()}.${arrayFile[1]}`;
         console.log(`${folder}/${fileName}`)
         fileUpload.mv(`${folder}/${fileName}`, (err) => {
             if(err)
                 res.status(500).json("Error al subir archivo");
         });
         res.status(200).json("Archivo procesado");
         return fileName;
     }



}

module.exports = ImageController;