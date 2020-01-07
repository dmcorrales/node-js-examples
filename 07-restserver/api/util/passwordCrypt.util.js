const bcrypt = require("bcrypt");
const StringUtil  = require("./string.util");

class PasswordCryptUtil {

    constructor(){
        this._stringUtil = new StringUtil();
    }   

    crypt(value, saltRounds = 10){
        
        if(this._stringUtil.isEmpty(value))
            throw new Error("El valor a encriptar es vacío");

        return bcrypt.hashSync(value, saltRounds);
    }

}

module.exports = PasswordCryptUtil;