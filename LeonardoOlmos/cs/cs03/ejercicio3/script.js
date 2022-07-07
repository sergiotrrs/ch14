let mensaje = function() {
    alert(`leer con atencion
1.-piensa en un numero
2.-si se puede dividir entre 2 responde "si"
y anota el resultado de la division
3.-si no es divisible entre 2 responde "no" y en este caso
quedate solo con la parte entera


recuerda que este se basa en el sistema binario y no preguntando
tu nmero de 1 por 1. por lo
tanto siempre trabajaremos con el cociente entero de los
resultados de n/2

si quieres salir escribe cancelar`)
}
mensaje()

var respuesta = confirm("esta claro?")

if (respuesta) {
    alert("entonces empezemos! ")
} else {
    while (respuesta != true) {
        let answer = prompt(`si quieres
        ver de nuevo las instrucciones escribe: si
        si quieres ver un ejemplo: ejemplo `)
        if (answer == "si") {
            mensaje();
        } else if (answer == "ejemplo") {
            alert(`escojamos el 9
            es divisible entre 2?.
            no verdad, por que da 4.5.
            es igual a 0?
            tampoco....
            entonces nos quedariamos con el cociente entero
            osea 4.
            este es divisible entre 2?
            si por que 4/2=2
            es igual a 0?
            no...
            entonces nos quedariamos con el dos. y 
            asi sucesivamente`)
        } else {
            alert("no entendi perdon");
        }
        var respuesta = confirm("esta claro ahora si?");

    }


}






let esDivisible = true;
let lista = [];

while (esDivisible == true) {
    let pregunta = prompt("es divisible entre 2")
    if (pregunta == "si") {
        lista.push(0);

    } else if (pregunta == "no") {
        lista.push(1);
    } else if (pregunta == "cancelar") {
        break;
    }
    let respuesta = prompt("el resulktado es igual a cero?")
    if (respuesta == "si") {
        break;
    }
}
let transformacion = function(a = lista) {
    var contador = 0;
    var resultado = 0;
    while (contador < a.length) {
        a[contador] = a[contador] * (2 ** contador)
        resultado = resultado + a[contador]
        contador++;


    }
    alert(`el numero ${resultado} es el que pensaste`)
}

transformacion()