let getNameById = (id , callback)  => {
    if(id == undefined){
        callback('No puede ser nulo el valor de dicho parámetro',id);
    }else{
        callback(null,id);
    }
};


getNameById(null, (err, param) => {
    if(err)
       return console.log(err);

    return console.log(`Este es el usuario encontrado: ${param}`);
    
});