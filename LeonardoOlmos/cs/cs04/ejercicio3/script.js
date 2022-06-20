let nArray2 = [1, 2, 3, 4]

function SumaYProductos(array = nArray2) {

    var suma = 0;
    var multiplicacion = 1;

    for (let i = 0; i < array.length; i++) {

        suma += array[i];
        multiplicacion = multiplicacion * array[i];


    }
    alert(`el resultado de la suma es ${suma} y 
    de la multplicacion ${multiplicacion}`)


}
SumaYProductos();