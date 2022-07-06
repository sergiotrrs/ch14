//5.-Elaborar un algoritmo para leer 3 numeros y determinar si uno es la suma de los otros dos
let primerNum , segundoNum , tercerNum ; //Definicion de variables
primerNum = parseInt(prompt("Ingrese un numero entero ")); //'parseInt'convierte un string y devuelve un entero de la base especificada.
segundoNum = parseInt(prompt("Ingrese un numero entero "));
tercerNum = parseInt(prompt("Ingrese un numero entero "));
if (primerNum == segundoNum + tercerNum){
    window.alert(primerNum + " es igual a la suma de " + segundoNum + " y " + tercerNum);
}
else if 
    (segundoNum == primerNum + tercerNum){
     window.alert(segundoNum + " es igual a la suma de " + primerNum + " y " + tercerNum);
} else if 
    (tercerNum == primerNum + segundoNum){
     window.alert(tercerNum + " es igual a la suma de " + primerNum + " y " + segundoNum);
} else{
     window.alert("No se cumple la funcion ");
}