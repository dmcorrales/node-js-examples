const User = require('./models/User');
class UserBusiness {
    constructor(){
        
    }

    create(entity, res, result){
            User.create(entity, (err, db) => {
                if(err)
                    console.log(err);
                    else
                    res.json
                    
            }
        );
    }
}

module.exports = UserBusiness;