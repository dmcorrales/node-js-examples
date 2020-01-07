const argv= require('./config/yargs').argv;
const colors = require("colors");
const porHacer = require('./por-hacer/por-hacer');
let commands = argv._[0];

switch(commands){
    case 'crear':
        console.log("Comando para crear");
        let contenido = porHacer.crear(argv.descripcion);
        console.log(JSON.stringify(contenido))
        porHacer.persistencia(contenido);
    break;  

    case 'listar':

        var listadoPorHacer = porHacer.listar();

        for(let tarea of listadoPorHacer ){
            console.log("=================".green);
            console.log("Tarea".red);
            console.log("Descripción:".red + " " + tarea.descripcion );
            console.log("Terminado:".red + " " + tarea.terminado );
            console.log("=================".green);
        }

    break;

    case 'actualizar':
       var listadoPorHacer = porHacer.actualizar(argv.descripcion);
       porHacer.persistencia(listadoPorHacer);
    break;

    case 'borrar':
        var listadoPorHacer = porHacer.borrar(argv.descripcion);
        porHacer.persistencia(listadoPorHacer);

    break;
    default:
        console.log("Comando no reconocido");
        break;
}