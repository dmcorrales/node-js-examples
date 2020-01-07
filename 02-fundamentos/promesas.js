let personas = [{
    id: 1,
<<<<<<< HEAD
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
=======
    nombre: 'Daniel',
    apellido: 'Corrales',
    edad: 15
},
{ 
    id: 2,
    nombre: 'Natalia',
    apellido:'Latorre',
    edad: 19
}];

let salarios = [{
    id:1,
    valor:20000000
},
{
    id:2,
    valor:30000000
}];


getPersonById = (id) => {
    return new Promise((resolve, reject) => {
        if(!id)
            reject(`El id no puede estar vacío`);

        let personDB = personas.find(person => person.id === id);
        if(!personDB)
            reject(`La persona con el id ${id}. No se encontró`);

        resolve(personDB);
    })
}

getSalaryByPerson = person => {
    return new Promise((resolve, reject) => {
        if(!person)
            reject("No se encontró la persona especificada");

        let salarioDB = salarios.find(salario => salario.id === person.id);
        if(!salarioDB)
            reject("No se encontró salario para la persona especificada");

        resolve({nombre:person.nombre, salario:salarioDB.valor});

    });
}

getPersonById(2).then(person => getSalaryByPerson(person))
.then(salary => 
    console.log(salary)
).catch(err => console.log(err));
>>>>>>> 4ece8db38e78326f9fcbcbb36e8b9086d85b453e
