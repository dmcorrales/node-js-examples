const User = require('./models/User');
class UserBusiness {
    constructor(){
        
    }

    async create(entity){
        var gnr = new User(entity);
        let result = await gnr.save();
        return result;
    }
}

module.exports = UserBusiness;