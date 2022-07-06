/*Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números*/

let nUmero1 ;
let nUmero2 ;
let nUmero3 ;
let nUmeroTemporal ;
let mEnorNumero ;

console.log ("Ingrese las numereaciones");

nUmero1 = parseInt(prompt("Ingresa el numero 1"));
nUmero2 = parseInt(prompt("Ingresa el numero 2"));
nUmero3 = parseInt(prompt("Ingresa el numero 3"));

if (nUmero1 < nUmero2){
    nUmeroTemporal = nUmero1;
}
else {
    nUmeroTemporal =nUmero2;
}

if (nUmeroTemporal < nUmero3 ){
    mEnorNumero = nUmeroTemporal;
}
else{
    mEnorNumero = nUmero3;
}

console.log("El  numero menor es " + mEnorNumero);