const {FormatValidatorUtil} = require('../util');

class ImageController {
    constructor(){
        this._formatValidatorUtil = new FormatValidatorUtil();
    }    

    async upload(req, res){

        if(!req.files)
            return res.status(400).json("No files found to upload");
        
         let fileUpload = req.files.fileUpload;
         let arrayFile = fileUpload.name.split('.');
         let isValidExtension =this._formatValidatorUtil.validate(arrayFile[1]);
         
         if(!isValidExtension)
             return res.status(500).json("Extensión no permitida");
         
         let folder = this._formatValidatorUtil.createOrValidateFolderByDate();
         console.log(folder)
         fileUpload.mv(`${folder}/${new Date().getTime()}.${arrayFile[1]}`, (err) => {
             if(err)
                 return res.status(500).json("Error al subir archivo");
         });
 
         return res.status(200)
     }



}

module.exports = ImageController;