const {UserDto} = require("../dtos");
var mapper = require('automapper-js');
const { UserService } = require("../services")

class UserController {
    constructor(){
        this._userService = new UserService();
    }

    async create(req, res){
        let entity = mapper(UserDto, req.body);
        let result = await this._userService.create(entity);
        return result;
    }

    async update(req, res){
        return await this._userService.update(req.params.id, req.body);
    }
}

module.exports = UserController;