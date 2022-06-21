// Método de búsqueda binaria //

// Comenzamos solicitando un número entre el 1 y el 100
let numero = window.prompt("Inserte un número entre el 1 y el 100: ", "Número")

if (numero >= 1 && numero<=100){
    const numeros = [];
    for (let i=1; i<=100; i++){
        numeros.push(i);
    }

    let limIzquierdo = 0;
    let limDerecho = numeros.length;

    for (; limIzquierdo <= limDerecho; ){
        let mitad = Math.trunc((limIzquierdo + limDerecho)/2);

        if (numero == numeros[mitad]){
            console.log(`El número es ${numeros[mitad]}`);
            break;
        }

        else if (numero < mitad){
            limDerecho = mitad - 1;
        }

        else {
            limIzquierdo = mitad + 1;
        }
    }
}

else{
    console.log("Tu número no tiene un valor dentro del rango solicitado")
}