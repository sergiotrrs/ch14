// Determinar si un número es múltiplo de 3 //

//Solicitar un número entre el 100 y el 200
let numero = window.prompt("Inserte un número entre el 100 y el 200: ", "Número")

if (numero >= 100 && numero<=200){
    if (numero%3 == 0){
        console.log(`El número ${numero} es múltiplo de tres`)
    }
    else {
        console.log(`El número ${numero} no es múltiplo	de tres`)
    }
}

else{
    console.log("Tu número no tiene un valor en el rango solicitado")
}