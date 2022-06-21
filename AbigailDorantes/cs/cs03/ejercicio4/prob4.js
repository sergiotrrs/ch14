
//4.	Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let num1 = prompt("introduce un numero entero entre 100 y 200", 100);
if (num1 >= 100 && num1 <= 200) {
    if (num1 % 3 == 0) {
        console.log("Si es un numero multiplo de 3 ");
    } else { console.log("No es multiplo de 3"); }
} else { console.log("introduce numero valido") }