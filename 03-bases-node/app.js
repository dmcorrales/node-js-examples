const {crearArchivo,listar} = require('./multiplicar/multiplicar');
const argv  = require('./config/yargs').argv;

let command = argv._[0];
switch(command){
    case 'listar':
        listar(argv.base, argv.limite)
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(result => {
            console.log(result)
        }).catch((err)=>console.log(err));
    break;

    default:
        console.log("El parámetro especificado no existe.");
    break;
}

//let argv = process.argv;
//console.log(argv[2])