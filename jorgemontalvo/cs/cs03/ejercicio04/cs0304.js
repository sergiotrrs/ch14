/*PROGRAMA QUE SOLICITA UN ENTERO (entre el 100 y el 200) y determinar si es múltiplo de 3"*/

let x = prompt("Ingrese un número para determinar si es múltiplo de 3: ");

if (x >= 100 && x <= 200){
  if (x%3 == 0){
    console.log("El número " ,x, " SÍ es múltiplo de 3.");
  }
else{
    console.log("El número " + x + " NO es múltiplo de 3.");
    }
}
else{
 console.warn( x + " No es un número entre el 100 y el 200.");
}
