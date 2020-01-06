
const mongoose = require('mongoose');
const colors = require("colors");

/*
 * Defaults 'mongoose' connection.
 */
class DatabaseConfiguration {

    constructor(){
            this.connectMongoose();
    } 

    connectMongoose() {
        mongoose.connect("mongodb://localhost:27017/mongoose" , {useNewUrlParser: true} , (err) => {
                if(err){
                    console.error(err);
                }
                console.log("Se ha establecido conexión a la base de datos.".blue);
            });
    }
}

module.exports = DatabaseConfiguration;