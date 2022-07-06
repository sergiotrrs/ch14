/*Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el mayor*/

let nUmero1 ;
let nUmero2 ;
let nUmero3 ;
let nUmeroTemporal ;
let mAyorNumero ;

nUmero1 = parseInt(prompt("Ingresa el numero 1"));
nUmero2 = parseInt(prompt("Ingresa el numero 2"));
nUmero3 = parseInt(prompt("Ingresa el numero 3"));

if (nUmero1 > nUmero2){
    nUmeroTemporal = nUmero1;
}
else {
    nUmeroTemporal =nUmero2;
}

if (nUmeroTemporal > nUmero3 ){
    mAyorNumero = nUmeroTemporal;
}
else{
    mAyorNumero = nUmero3;
}

console.log("El  numero mayor es " + mAyorNumero);