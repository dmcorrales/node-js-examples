const { UserBusiness } = require("../../dal");

/**
 * User Service
 * Create connection between 'api' and 'persistence'.
 * @author Daniel M Corrales
 * @version 1.0
 */
class UserService {

    constructor(){
        this._userBusiness = new UserBusiness();
    }

    async create(entity){
        let result = await this._userBusiness.create(entity);
        return result;
    }

    async update(id,entity){
        let result = await this._userBusiness.update(id,entity);
        return result;
    }

    async findAll(numberPage){
        return await this._userBusiness.findAll(numberPage);
    }

    async delete(id){
        return await this._userBusiness.delete(id);
    }

}

module.exports = UserService;