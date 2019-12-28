
const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l'
    }
};

const argv = require('yargs')
.command('listar', 'Esta es la descripción del comando', params)
.command('crear', 'Creación de archivos según el comando especificado', params)
.help().argv;

module.exports = {argv};