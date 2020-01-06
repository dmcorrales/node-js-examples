const {UserBusiness} = require('../../dal');
const {UserDto} = require("../dtos")
var mapper = require('automapper-js');


class UserController {
    constructor(){
    }

    create(req, res){
         let body = req.body;
         let objectDto = mapper(UserDto, body);
         new UserBusiness().create(objectDto);
         res.json("hola")
    }
}

module.exports = UserController;