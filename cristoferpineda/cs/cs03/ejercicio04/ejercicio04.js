//4.-Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
let primerNum , multiploDe3; //Definicion de variables
primerNum = parseInt(prompt("Ingrese un numero entero entre 100 y 200")); //'parseInt'convierte un string y devuelve un entero de la base especificada.

if (primerNum % 3 == 0){
    window.alert(primerNum + " si es multiplo de 3 ");
}
else {
     window.alert(primerNum + " No es multiplo de 3 ");
}