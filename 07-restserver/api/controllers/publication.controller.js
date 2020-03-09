const { PublicationDto } = require("../dtos");
const { PublicationService } = require("../services");
const ImageController = require("./image.controller");
const GenericController = require("./generic.controller");
const mapper = require("automapper-js");

class PublicationController extends GenericController{

    constructor(){
        super(new PublicationService(), PublicationDto);
 
    }

    create(req, res){
        //let fileName = new ImageController().upload(req,res);
        //console.log(fileName)
        let entity = mapper(this._dto, req.body);
        console.log(entity)
        this._service.create(entity).then(response => {
            res.json(response);
        }).catch(err => {
            console.log(err)
            res.status(400);
            res.json(err.message);
        });
    }

    findAllNoPagination(req, res){
        this._service.findAllNoPagination().then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

}

module.exports = PublicationController;