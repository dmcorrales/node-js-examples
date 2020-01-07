const { UserBusiness } = require("../../dal");
const { UserOutput } = require("../domains");
const mapper = require("automapper-js");
class UserService {

    constructor(){
        this._userBusiness = new UserBusiness();
    }

    async create(entity){

        let result = await this._userBusiness.create(entity);
        result = JSON.parse(JSON.stringify(result));
        console.log(result.name)
        let obj = new UserOutput();
        obj.name = result.name;
        obj.email = result.email;
        obj.role = result.role;
        obj.google = result.google;
        
        return obj;
    }

}

module.exports = UserService;