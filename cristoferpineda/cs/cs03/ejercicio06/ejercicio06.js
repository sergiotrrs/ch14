//6.-Elaborar un algoritmo para leer un numero y determinar si es par o impar
let primerNum , multiploDe3; //Definicion de variables
primerNum = parseInt(prompt("Ingrese un numero entero ")); //'parseInt'convierte un string y devuelve un entero de la base especificada.

if (primerNum % 2 == 0){
    window.alert(primerNum + " es par ");
}
else {
     window.alert(primerNum + " es impar ");
}