/*3. Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de 
pasos posibles.*/

let titulo=alert("Juguemos a adivinar un número que pienses entre 1 y 100");
let limInf = 1;
let limSup = 100;
let mitad = parseInt ( ( limInf + limSup ) /2 );

for (let i = 0; i < 25 ; i++ ){ 
   
   let respuesta = prompt ("El número que piensas es "+ mitad + " responde: SI/NO");
   //Primera opción adivina el numero
   if ( respuesta.toUpperCase() == "SI"){
      i=25
      console.log ("He adivinado el numero es "+ mitad) 
   }
   // si todavia no adivina el numero    
   else {
      //le pregunta si es mayor 
      let respuesta = prompt (" Tu numero es mayor a "+ mitad + " responde: SI/NO");
      if ( respuesta.toUpperCase() == "SI"){
      limInf = mitad
      //console.log("SI")
      console.log ("INF",limInf,"SUP", limSup  );
      mitad = parseInt ( ( limInf + limSup ) /2 )
      console.log ("Tu numero es mayor", mitad );
      }
      else {
      limSup = mitad
      //console.log ("NO", mitad );
      console.log ("INF",limInf,"SUP", limSup );
       mitad = parseInt ( ( limInf + limSup ) /2 )
      console.log ("Tu numero es mayor", mitad );
      } 
   }

}