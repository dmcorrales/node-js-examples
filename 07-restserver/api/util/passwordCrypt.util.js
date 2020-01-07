const bcrypt = require("bcrypt");

class PasswordCryptUtil {

    crypt(value, saltRounds = 10){
        return bcrypt.hashSync(value, saltRounds);
    }

}

module.exports = PasswordCryptUtil;