
let numUsuario = alert("Piensa un número del 1 al 100, a continuación adivinaré qué número es.");

let limInf = 1;
let limSup = 100;
let mitad= parseInt ((limInf+limSup)/2);

for (let i = 0; i < 50 ; i++ ) { 
   
   let respuesta = prompt (" ¿Tu número es " +mitad+ "? SI/NO");
   
   if ( respuesta.toUpperCase() == "SI"){
      i=50
      console.log ("Tu número es "+ mitad+" :D"); 
   }
     
   else {
      //si es mayor 
      let respuesta = prompt (" ¿Tu número es mayor a "+ mitad + "? SI/NO");
      if ( respuesta.toUpperCase() == "SI"){
      limInf = mitad
      
      mitad = parseInt ( ( limInf + limSup ) /2 )
      console.log ("¿Tu número es mayor que " +mitad+ "?");
      }
      else {
      limSup = mitad
      
       mitad = parseInt ( ( limInf + limSup ) /2 )
      console.log ("¿Tu número es menor que " +mitad+"?" );
      } 
   }

}