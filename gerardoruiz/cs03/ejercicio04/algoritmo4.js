/* Algoritmo 4
Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3 */

let num =prompt("Ingresa un número entre 100 y 200, se determinará si es multiplo de 3");

if (num < 100 || num >200){
    document.write("Número fuera de rango")
}  else if (isNaN(num)){
    document.write("Ingresa solo números")
}else if ( num%3==0){
    document.write("Sí es multiplo de 3")
}else {
    document.write("No es multiplo de 3")
}