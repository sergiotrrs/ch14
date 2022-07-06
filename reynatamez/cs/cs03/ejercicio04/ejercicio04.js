//Solicitar un número entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let numero1 = 101; //Dividendo número entero entre el 100 y el 200
let numero2 = 3; //Divisor
let modulo = numero1 % numero2; //Residuo

if (modulo == 0){
    console.log("El número es multiplo de 3");
}

else if(modulo > 0){
    console.log("El número no es multiplo de 3");
}