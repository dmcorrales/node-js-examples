let personas = [{
    id: 1,
    nombre: "Daniel",
    apellido: "Corrales",
    nombreCompleto : function(){
        return `${this.nombre} ${this.apellido}`
    }
},
{
    id: 2,
    nombre: "Mauricio",
    apellido: "Corrales"
}
]

let salarios = [{
    id:1,
    valor:5000000
},
{
    id:2,
    valor:2000000
}]

//General find operations
console.log(personas.find(persona => persona.id == 1))

findPersonById = (id, callback) => {
    if(!id)
        callback('No puede ser vacío el valor del ID');
    
    let result =  personas.find(persona => persona.id === id);
    if(!result)
        callback('No se encontró el usuario especificado');

        callback(null, result);
}

findSalarioByPersonaId  = (id, callback) => {
    let personaResult = personas.find(persona =>  persona.id == id);
    console.log("resultado", personaResult)

    if(!personaResult)
        callback('No se encontró la persona especificada');

    let salarioResult = salarios.find(salario => salario.id == id);

    if(!salarioResult)
        callback('No se encontró el salario especificado');

    callback(null, result = {
        nombre: personaResult.nombre,
        salario: salarioResult.valor
    })
}


findSalarioByPersonaId(1, (err, msg) => {
    if(err)
        console.log(err)

    console.log(msg)
})

findPersonById(1, (err, msg) => {
    if(err) console.log(err)
})