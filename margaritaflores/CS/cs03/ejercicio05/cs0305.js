//Elaborar un algoritmo para leer 3 numeros y determinar sí uno es la suma de los otros dos //

let numeroJ= 50;
let numeroK= 5;
let numeroP= 45;


if ( numeroJ == numeroK + numeroP ) {
 console.log ( " Numero J es la sumatoria de numero K y  P ");
   if ( numeroJ != numeroK + numeroP)
    console.log (" Numero J no es la sumatoria de numero K y P ");
}
 
else if ( numeroK == numeroJ + numeroP ){
console.log ( " Numero K es la sumatoria de numero J y  P ");
  if ( numeroK != numeroJ + numeroP)
    console.log (" Numero K no es la sumatoria de numero K y P ");
}

else if ( numeroP == numeroJ + numeroK ){
console.log ( " Numero P es la sumatoria de numero J y  K");
}
else {
 console.log (" Numero P no es la sumatoria de numero J y K ");
}

    


