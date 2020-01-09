const { PermissionService } = require("../services");
const mapper = require("automapper-js");
const { PermissionDto } = require("../dtos");
class PermissionController{

    constructor(){
        this._permissionService = new PermissionService();
    }

    create(req, res){
        let entity = mapper(PermissionDto, req.body);
        this._permissionService.create(entity).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    update(req, res){
        let entity = mapper(PermissionDto, req.body);
        this._permissionService.update(req.params.id, entity).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    findAll(req, res){
        let page = req.params.page;
        this._permissionService.findAll(page).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    delete(req, res){
        this._permissionService.delete(req.params.id).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

}

module.exports = PermissionController;