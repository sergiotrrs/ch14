//6. Elabora un algoritmo para leer un número y determinar si es par o impar

let a=parseInt(prompt("Escribe un número: "));

    function moduloDiv (a) {
        return a%2;
    }

    if (moduloDiv(a)==0){
        alert("El número "+ a + " es par");
    }
    else {
        alert("El número "+ a + " es impar");
    }
