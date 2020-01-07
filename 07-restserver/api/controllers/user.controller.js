const {UserDto} = require("../dtos");
var mapper = require('automapper-js');
const { UserService } = require("../services")

class UserController {
    constructor(){
        this._userService = new UserService();
    }

    async create(req, res){
        console.log("pass1", UserDto);
        console.log("pass2", req.body);
        let entity = mapper(UserDto, req.body);
        let result = await this._userService.create(entity);
        console.log(result)
        return result;
    }
}

module.exports = UserController;