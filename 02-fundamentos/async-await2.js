let personas = [{
    id: 1,
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


getPersonById = async(id) => {
        if(!id)
            throw new Error("El id no puede estar vacío")

        let personDB = personas.find(person => person.id === id);
        if(!personDB)
            throw new Error("No se encontró la persona.")

        return personDB;
}

getSalaryByPerson = async person => {
        if(!person)
            throw new Error("No se encontró la persona especificada");

        let salarioDB = salarios.find(salario => salario.id === person.id);
        if(!salarioDB)
            throw new Error("No se encontró salario para la persona especificada");

        return {nombre:person.nombre, salario:salarioDB.valor};
}

getPersonById(2).then(person => getSalaryByPerson(person))
.then(salary => 
    console.log(salary)
).catch(err => console.log(err));