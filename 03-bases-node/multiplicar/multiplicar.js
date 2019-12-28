const fs = require('fs');
const color = require('colors');

listar = (base, limite = 10) => {
    if(!Number(base) || !Number(limite)){
        throw new Error("La base y el límite deben ser números".green);
    }

    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`.blue);
    }
}

crearArchivo = async (base,limite = 10) => {
    if(!Number(base))
        throw new Error(`El valor ingresado: ${base} no es un número`);

    let cadenaCaracteres='';
    for(let i = 1 ; i <= limite; i++){
        cadenaCaracteres += `${base} * ${i} = ${base*i} \n`;
    }

    fs.writeFile(`multiplicacion-${base}.txt`, cadenaCaracteres, (err) => {
        if(err)
            console.log(err)
        console.log(`Se ha guardado correctamente el archivo para la multiplicación del número ${base}`.rainbow);
    })

}
module.exports = {
    crearArchivo,
    listar
};