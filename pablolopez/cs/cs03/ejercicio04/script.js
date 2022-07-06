/*
4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
   -Obtener el número
   -Dividir el número entre 3, en caso de que el residuo sea 0, el número es múltiplo de 3, en caso contrario no es múltiplo de 3.
   -Dar el resultado.
*/
let num = parseInt(prompt("Escribe el número al que se determinará si es múltiplo de tres."));
let residuo = num%3;

if(residuo==0){
    console.log("El número es múltiplo de tres");
    
}
else{
    console.log("El número no es múltiplo de tres");
}
