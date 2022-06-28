//leer un numero y determinar si un numero es par e impar
function parImpar(numero) {
    if( numero%2==0 ){
        console.log(`${numero} es numero par`);
        alert(`${numero} es numero par`);
    }
    else{
        console.log(`${numero} es numero impar`);
        alert(`${numero} es numero impar`);
    }
}
alert(`programa para saber si un numero es par o impar`)
let numero = parseInt( prompt("ingersa un numero "));
parImpar(numero);