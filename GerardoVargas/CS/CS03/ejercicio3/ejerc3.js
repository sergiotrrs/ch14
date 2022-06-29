//Solicitar 3 números (entre el 1 y el 100) y definir el menor de los tres
let limInf = 1
let limSup = 100
let mitad = parseInt ( ( limInf + limSup ) /2 )

for (let i = 0; i < 100 ; i++ ) { 
   
   let respuesta = prompt (" El número que piensas es "+ mitad + " SI/NO");
   //Si acertó
   if ( respuesta.toUpperCase() == "SI"){
      i=100
      console.log ("¡Adivine! el numero es "+ mitad) 
   }
   //Sí no acertó   
   else {
      //Preguntar si es mayor 
      let respuesta = prompt (" Tu numero es mayor a "+ mitad + " SI/NO");
      if ( respuesta.toUpperCase() == "SI"){
      limInf = mitad
      //SI
      console.log ("INF",limInf,"SUP", limSup  );
      mitad = parseInt ( ( limInf + limSup ) /2 )
      console.log ("Tu numero es mayor", mitad );
      }
      else {
      limSup = mitad
      //NO
      console.log ("INF",limInf,"SUP", limSup );
       mitad = parseInt ( ( limInf + limSup ) /2 )
      console.log ("Tu numero es mayor", mitad );
      } 
   }

}