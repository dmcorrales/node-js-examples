let getNombre = async() => {
    return "Daniel Corrales";
}

let getPromise = async() =>{
    let nombre = await getNombre();
    return nombre;
}



getPromise().then(data => {
    console.log(data)
})