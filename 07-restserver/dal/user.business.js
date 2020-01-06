const User = require('./models/User');
class UserBusiness {
    constructor(){
        
    }

    create(data){
            User.create(data, (err, db) => {
                if(err)
                    console.log(err);
                    else
                    console.log(db);
            }
        );
    }
}

module.exports = UserBusiness;