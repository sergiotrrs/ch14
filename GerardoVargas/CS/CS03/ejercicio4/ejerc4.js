//Solicitar un número entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let numero1 = 150;
let numero2 = 3;
let modulo = numero1 % numero2;

if (modulo == 0){
    console.log("El número es multiplo de 3");
}

else if(modulo > 0){
    console.log("El número no es multiplo de 3");
}