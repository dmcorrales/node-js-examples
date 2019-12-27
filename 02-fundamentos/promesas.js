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

findPersonById = id => {
    return new Promise((resolve, reject) => {
        let empleadoDB = personas.find(persona => persona.id === id);
        if(!empleadoDB)
            reject(`No existe el emplado con el ID ${id}`);
        else
            resolve(empleadoDB)
    })
}

getSalarioByPerson = (id) => {
    return new Promise( (resolve, reject) =>{
          let personDB = personas.find(person => person.id === id);

          if(personDB){
            let salarioDB = salarios.find(salario => salario.id === personDB.id);
            if(!salarioDB)
                reject(`No existe salario para ${personDB.nombreCompleto}`);
            else    
                resolve({nombre:personDB.nombre, salario:salarioDB.valor});
          }
            
    });
} 

getSalarioByPerson(1).then(resultado => {
    console.log(resultado)
}, err => { console.log(err) })

findPersonById(55).then(empleado => {
    console.log(`Resultado: ${empleado.id}`)
},err => {
    console.log(err)
})