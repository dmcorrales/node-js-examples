const fs = require('fs');

let listadoPorHacer = [];
cargar = () => {
    try {
        listadoPorHacer = require("../db/data.json");     
    } catch (error) {
        listadoPorHacer = [];
    }
}

persistencia = (contenido) => {
    fs.writeFile("./db/data.json",`${JSON.stringify(contenido)}`, (err) => {
        if(err)
            throw new Error("Vaya! No se ha podido escribir el archivo");
            
        console.log("El archivo se ha creado correctamente")
    });
}

crear = (descripcion) =>{
    cargar();
    let obj = {
        descripcion,
        terminado:false
    }

    if(!descripcion)
        throw new Error("Debes añadir una descripción");

    listadoPorHacer.push(obj)
    console.log("Se ha creado correctamente la tarea");

    return listadoPorHacer;
};

listar = () => {
    cargar();
    return listadoPorHacer;
}

actualizar = (descripcion , terminado = true) => {
   cargar();

   let index = listadoPorHacer.findIndex( elem => elem.descripcion == descripcion);
    console.log(index)
   if(index != -1)
    listadoPorHacer[index].terminado = terminado;
    return listadoPorHacer;
}

borrar = (descripcion) =>{
    if(!descripcion)
        throw new Error("No se puede borrar ya que no se especificó la descripción");

     cargar();
     let nuevoArreglo = listadoPorHacer.filter(elem => elem.descripcion !== descripcion);

     if(nuevoArreglo.length === listadoPorHacer.length)
        console.log("No se ha eliminado ningún elemento");
    else
        listadoPorHacer = nuevoArreglo;
     return listadoPorHacer;
}

module.exports = {
    crear,persistencia,listar,actualizar, borrar
}