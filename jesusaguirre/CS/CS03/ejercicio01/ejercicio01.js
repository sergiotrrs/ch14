//funcion que define el mayor de tres numeros
function numeroMayor() {
    alert("programa que define el mayor de 3 numeros");
    let numero1 = parseInt( prompt("ingersa un numero del 1 al 100"));
    let numero2 = parseInt( prompt("ingersa un segundo numero del 1 al 100"));
    let numero3 = parseInt( prompt("ingersa un tercer numero del 1 al 100"));
    let mayor;
    if( numero1>numero2 && numero1>numero3 ){
        mayor = numero1;
    }
    else if( numero2>numero1 && numero2>numero3 ){
        mayor = numero2
    }
    else{
        mayor = numero3;
    }
    alert(`El numero 1=${numero1}\nEl numero 2=${numero2}\nEl numero 3=${numero3}
    El numero mayor es ${mayor}`);
    return mayor;
}

console.log(`El numero mayor es ${numeroMayor()}`);