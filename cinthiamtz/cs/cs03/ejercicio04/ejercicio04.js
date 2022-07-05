//Algoritmo 4: Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

//Función que solicita un numeros y verificar que este en el rango entre el 100 y el 200 
function validar(entrada) {
    entrada = parseInt(prompt("Ingrese el valor del numero entre el rango de 100 a 200" ));
    for (let j = 0; j < 1000; j++) {
        if (entrada < 100 || entrada > 200) {
            alert("El valor debe estar entre el rango de 100 y 200");
            entrada = parseInt(prompt("Ingrese nuevo valor entre el rango de 100-200 "));
        }
        else {
            break
        }
    }
    return entrada
}

alert("Programa que solicita un entero (entre el 100 y el 200) y determinar si es múltiplo de 3");
//Declaracion de variable y aplicacion de la funcion de validar para solitar el numero entre 100 y 200
let numEntrada;
numEntrada = validar(numEntrada);

let cociente = numEntrada/3;
let valorB = parseInt(cociente) * 3;
let modulo = numEntrada - valorB;

//Condicion 
if (modulo == 0){
    console.log( "El valor", numEntrada , "SI es multiplo del 3");
    alert('El valor '+ numEntrada + ' "SI" es multiplo del 3');
}
else{
    console.log( "El valor", numEntrada , "NO es multiplo del 3"); 
    alert('El valor '+ numEntrada + ' "NO" es multiplo del 3');   
}

