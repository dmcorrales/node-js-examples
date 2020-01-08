const jwt = require("jsonwebtoken");
class JwtHelper{
    constructor(){}

    createToken(__id){
        return jwt.sign({
          id: __id,
        }, 'secret-jwt-pixelway', { expiresIn: '1h' });
    }
}

module.exports = JwtHelper;