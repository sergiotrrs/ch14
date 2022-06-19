console.log("Código");
//Se pide al usuario un número
nume=window.prompt("Dame un número entre 100 y 200");
//Se convierte en número
num=parseInt(nume);


if(num<=200 && num>=100){//Se valida si está en el rangp
    if(num%3==0){//Determina si es mútiplo de 3
        console.log("Es cierto que el número "+num+" es múltiplo de 3");
    } else{
        console.log("Es falso que el número "+num+" es múltiplo de 3");
    }
} else {
    console.log("Para el algoritmo 4 se requiere un número entre 100 y 200");
}