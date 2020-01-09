const { RoleService } = require("../services");
const mapper = require("automapper-js");
const { RoleDto } = require("../dtos");
class PermissionController{

    constructor(){
        this._rolService = new RoleService();
    }

    create(req, res){
        let entity = mapper(RoleDto, req.body);
        this._rolService.create(entity).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    update(req, res){
        let entity = mapper(RoleDto, req.body);
        this._rolService.update(req.params.id, entity).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    findAll(req, res){
        let page = req.params.page;
        this._rolService.findAll(page).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    delete(req, res){
        this._rolService.delete(req.params.id).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

}

module.exports = PermissionController;