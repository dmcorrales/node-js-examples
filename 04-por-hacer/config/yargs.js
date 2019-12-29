const descripcion = {
    demand:true,
    alias:'d'
};

const completado = {
    default: true,
    alias:'c'
};

const argv= require('yargs')
.command("crear","Comando de crear", {
    descripcion
})
.command("borrar","Comando de borrar", {
    descripcion
})
.command("listar", "Comando de listar")
.command("actualizar","Comando de actualizar",{
    descripcion,
    completado
})
.help()
.argv;

module.exports = {
    argv
}
