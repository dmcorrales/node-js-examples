console.log("El programa inició");

setTimeout( function(){
    console.log("primer timeout");
}
, 3000 )

setTimeout( function(){
    console.log("segundo timeout");
}
, 0 );

console.log("Fin del programa");