let numero = parseInt(prompt("Ingresa un numero entre 1 y 100"));
let inicio = 0;
let fin = 100;
//let contador = 100;
let mitad = Math.floor(fin / 2);


for(let i = 0; i != 100; i++){
    
    if(numero == mitad){
        //Si el numero ingresado es igual a la mitad
        //Un ejemplo, el numero es 50.
        console.log(`Tu numero es: ${mitad}`);
        break;

    } else if (numero == inicio){
        //Si el numero es igual a inicio
        //Un ejemplo, el numero ingresado es 0
        console.log(`Tu numero es: ${inicio}`); 
        break;

    } else if (numero == fin){
        //Si el numero ingresado es igual a fin.
        //Un ejemplo, si el numero es 100
        console.log(`Tu numero es: ${fin}`);
        break;

    } else if (numero > mitad){
        //Toma el rango entres 50 a 100.
        //El inicio ahora vale mitad (50).
        inicio = mitad;

        //Mitad ahora representa las unidades de diferencia entre en 50 y 100 entre 2.
        //un ejemplo, si el numero es 75
        mitad = inicio + Math.floor((fin - inicio) / 2);

        //Para conocer las iteraciones que va haciendo
        console.log("Primera condicion " + mitad);

    }else if(numero < mitad && inicio == 0){
        //Toma el rango de 0 a 50
        //Fin toma el valor de mitad (50)
        fin = mitad;

        //Mitad ahora vale la diferencia de unidades de 0 y 50 entre dos.
        //Son 25 unidades de diferencia
        mitad = Math.floor((inicio + fin) / 2);

        //Para ver las iteraaciones
        console.log("Segunda condicion " + mitad);
        
    }else if (numero < mitad && inicio !== 0){
        //Toma el rango de 25 a 50 (Suponiendo que el numero sea mayor a inicio)
        //Toma el valor de 50 pero del rango principal
        fin = mitad;

        //Mitad ahora vale la diferencia de unidades de 25 y 50 entre dos.
        //Son 12 unidades de diferencia
        mitad =inicio + Math.floor((fin - inicio) / 2);

        //Para ver las iteraaciones
        console.log("Tercera condicion " + mitad);
    }

}