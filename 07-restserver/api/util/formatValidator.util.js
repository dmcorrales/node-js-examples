const fs = require('fs');


class FormatValidatorUtil {
    constructor(){
        // This format extension may change in the future, at the moment 
        // this is the temporal list.
        this._validExtension = ['png','jpg', 'gif', 'jpeg'];
    }

    validate(file){
        if(this._validExtension.indexOf(file) < 0){
            return false;
        }

        return true;
    }


    createOrValidateFolderByDate(){
        let date = new Date();
        console.log(date.getUTCDay())

        let month = new Date().getMonth();
        let day = new Date().getDay();
        month++;
        month = ( '0' + month ).substr( -2 );

       let imagePath = `${process.env.IMAGE_PATH}/${month}`;

       !fs.existsSync(imagePath+"/"+day) && fs.mkdirSync(imagePath+"/"+day);

       return imagePath;

    }

}
module.exports = FormatValidatorUtil;