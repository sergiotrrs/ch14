//3.-Realizar un algoritmo para adivinar un numero entre el 1 y el 100 en el menor número de pasos posibles
let primerNum;
primerNum = parseInt(prompt("Ingrese un numero entero de entre 1 y 100 "));
let esDivisible = true;
let lista = [];

while (esDivisible == true) {
    let pregunta = prompt("es divisible entre 2")
    if (pregunta == "si") {
        lista.push(0);

    } else if (pregunta == "no") {
        lista.push(1);
    }
    let respuesta = prompt("el resultado es igual a cero?")
    if (respuesta == "si") {
        break;
    }
}
let transformacion = function(a = lista) {
    let contador = 0;
    let resultado = 0;
    while (contador < a.length) {
        a[contador] = a[contador] * (2 ** contador)
        resultado = resultado + a[contador]
        contador++;


    }
    alert(`el numero ${resultado} es el que pensaste`)
}
transformacion();

