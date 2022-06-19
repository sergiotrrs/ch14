/**6.-Elabora un algoritmo para leer un número y determinar si es par o impar.**/

function asigna(nu){
    /*Esta funcion guarda y a asigna espacio a la variable
    en nu (es el nombre de la variable de la funación)*/
    nu=prompt("Ingresa un número","Número entero");
    nu=parseInt(nu);
    return nu;
}

function veriPar(par){
    //Esta función determina si un numero es par o impar
    if((par%2)==0){
        console.log(`El número ${par} es par`);
        titulo=alert(`El número ${par} es par`);
    }else{
        console.log(`El número ${par} es impar`);
        titulo=alert(`El número ${par} es impar`);
    }
}
    

let tituli=alert("Este programa verifica si un número es par o impar un numero");
let numero;

numero=asigna(numero);
numero=veriPar(numero);