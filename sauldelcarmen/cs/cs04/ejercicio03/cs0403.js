let arrays = [ 5, 10, 15, 20, 25];
function sumayproductos(array = arrays) {

    var suma = 0;
    var multiplicacion = 1;

    for (let i = 0; i < array.length; i++) {

        suma += array[i];
        multiplicacion = multiplicacion * array[i];


    }
    console.log(`el resultado de la suma es ${suma} y 
    de la multplicacion ${multiplicacion}`)


}
sumayproductos();
