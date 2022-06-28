/*Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3*/

let numero1;
numero1 = parseInt(prompt("Ingrese un numero entero entre 100 y 200")); 

if (numero1 % 3 == 0){
    window.alert(numero1 + " si es multiplo de 3 ");
}
else {
     window.alert(numero1 + " No es multiplo de 3 ");
}