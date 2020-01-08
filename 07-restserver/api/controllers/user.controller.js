const {UserDto} = require("../dtos");
var mapper = require('automapper-js');
const { UserService } = require("../services")
const { ErrorOutput } = require("../domains");

class UserController {
    constructor(){
        this._userService = new UserService();
    }

    async create(req, res){
        let entity = mapper(UserDto, req.body);
        await this._userService.create(entity).then(response => {
            res.json(response);
        }).catch(e => {
            res.status(400);
            res.json(new ErrorOutput(e.message));
        });
    }

    async update(req, res){
        let entity = mapper(UserDto, req.body);
        await this._userService.update(req.params.id, entity).then(response => {
            res.json(response);
        }).catch(e => {
            res.status(400);
            res.json(new ErrorOutput(e.message));
        });
    }

    async findAll(req, res){
        return await this._userService.findAll(req.params.page).then(response => {
            res.json(response);
        }).catch(e => {
            res.status(400);
            res.json(new ErrorOutput(e.message));
        });
    }

    async delete(req, res){
        return await this._userService.delete(req.params.id).then(response => {
            res.json(response);
        }).catch(e => {
            res.status(400);
            res.status(new ErrorOutput(e.message));
        });
    }
}

module.exports = UserController;