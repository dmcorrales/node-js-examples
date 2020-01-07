const {UserDto} = require("../dtos");
var mapper = require('automapper-js');
const {UserOutput} = require("../domains");
const {UserBusiness} = require('../../dal');


class UserController {
    constructor(){
        this._userBusiness = new UserBusiness();
    }

    hola(){
        console.log("hola")
    }

    create(req, res){
        this.hola();
        
         let objectDto = mapper(UserDto, req.body);
         let result = "";
         let entity = this._userBusiness.create(objectDto , res, result);
         console.log(result)
         //let resultSet = mapper(UserOutput, result);
         //console.log(resultSet)
         res.json("hola")
    }

    prepareResponse(db,res){
        res.json(mapper(UserOutput,db));
    }
}

module.exports = UserController;