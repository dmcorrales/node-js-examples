const User = require('./models/User');
const { StringUtil, PasswordCryptUtil } = require('../api/util');
/**
 * User Business
 * @author Daniel M Corrales
 * @version 1.0
 */
class UserBusiness {
    constructor(){
        this._stringUtil = new StringUtil();
        this._passwordCryptUtil = new PasswordCryptUtil();
    }

    async create(entity){

        if(this._stringUtil.isEmpty(entity.name))
            throw new Error("El nombre no puede estar vacío");

        if(this._stringUtil.isEmpty(entity.password))
            throw new Error("La contraseña no puede estar vacía");

        //Let's Crypt.
        entity.password = this._passwordCryptUtil.crypt(entity.password,10);
        var user = new User(entity);
        return await user.save();
    }

    async update(id, entity){

        if(this._stringUtil.isEmpty(entity.name))
            throw new Error("El nombre no puede estar vacío");

        if(this._stringUtil.isEmpty(entity.password))
            throw new Error("La contraseña no puede estar vacía");
            
        if(this._stringUtil.isEmpty(entity.email))
            throw new Error("El correo electrónico no puede estar vacío");

        return await User.findOneAndUpdate(id, entity, { new:true, runValidators: true });
    }

    async findAll(numberPage){
        numberPage--;
        let limit = 5;
        let skip = limit*numberPage;

        return await User.find({  })
        .skip(skip)
        .limit(limit)
        .exec();
    }
}

module.exports = UserBusiness;