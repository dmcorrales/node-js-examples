//Objeto literal
let persona = {
    nombre:'Daniel',
    apellido:'Corrales',
    //Funcion dentro de objeto
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
};

//Destructuración
let { nombre , apellido } = persona;
console.log(nombre, apellido)