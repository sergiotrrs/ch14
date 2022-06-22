let num = [1, 2, 4, 5];
let suma = 0;
let multiplicacion = 1;

function operaciones(newArray = num) {
    for(let i = 0; i < newArray.length; i++){
        suma = suma + newArray[i];
        multiplicacion = multiplicacion * newArray[i];
    }
    console.log("La suma del arreglo es: ", suma);
    console.log("La multiplicacion del arreglo es: ", multiplicacion);
}

operaciones();