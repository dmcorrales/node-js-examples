const { UserBusiness } = require("../../dal");
const { UserOutput } = require("../domains");
const mapper = require("automapper-js");
class UserService {

    constructor(){
        this._userBusiness = new UserBusiness();
    }

    async create(entity){

        let result = await this._userBusiness.create(entity);
        console.log(JSON.stringify(result))
        
        return new UserOutput(result);
    }

}

module.exports = UserService;