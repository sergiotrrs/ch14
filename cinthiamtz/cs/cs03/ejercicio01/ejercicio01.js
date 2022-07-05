//Algoritmo: Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor

//Función que solicita un numeros y verificar que este en el rango entre el 1 y el 100 
function validar(entrada, a) {
    entrada = parseInt(prompt("Ingrese el valor del numero " + a));
    for (let j = 0; j < 1000; j++) {
        if (entrada < 1 || entrada > 100) {
            alert("El valor debe estar entre el rango de 1 y 100");
            entrada = parseInt(prompt("Ingrese nuevo valor entre el rango de 1-100 "));
        }
        else {
            break
        }
    }
    return entrada
}

alert("Programa que solicita 3 números (entre el 1 y el 100) y define cuál es el mayor");
//Declaracion de variables10010
let numUno;
let numDos;
let numTres;

//Aplicamos la función validar, para obtener los valores de los tres numero entre el rango de 1 a 100
numUno = validar(numUno, 1);
numDos = validar(numDos, 2);
numTres = validar(numTres, 3);

//Condiciones
if (numUno >= numDos && numUno >= numTres) {
    alert("El numero mayor es " + numUno);
    console.log("El numero mayor es", numUno);
}
else if (numDos >= numUno && numDos >= numTres) {
    alert("El numero mayor es " + numDos);
    console.log("El numero mayor es", numDos);
}
else {
    alert("El numero mayor es " + numTres);
    console.log("El numero mayor es", numTres);
}
