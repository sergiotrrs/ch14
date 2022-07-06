let numberUser = parseInt(prompt("Ingresa un número entre el 100 y el 200: "));

if(numberUser>= 100 && numberUser <= 200 ){
    if(numberUser % 3 == 0 ){
        console.log("El número ingresado es multiplo de 3")
    }
    else{
         console.log("El número ingresado  no es multiplo de 3")
    }
}
else{
    console.log("El número ingresado no está en el rango del 100 al 200: ");
}