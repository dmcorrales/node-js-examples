const { CategoryBusiness } = require("../../dal");

/**
 * User Service
 * Create connection between 'api' and 'persistence'.
 * @author Daniel M Corrales
 * @version 1.0
 */
class CategoryService {

    constructor(){
        this._categoryBusiness = new CategoryBusiness();
    }

    async create(entity){
        let result = await this._categoryBusiness.create(entity);
        return result;
    }

    async update(id,entity){
        let result = await this._categoryBusiness.update(id,entity);
        return result;
    }

    async findAll(numberPage){
        return await this._categoryBusiness.findAll(numberPage);
    }

    async delete(id){
        return await this._categoryBusiness.delete(id);
    }

}

module.exports = CategoryService;