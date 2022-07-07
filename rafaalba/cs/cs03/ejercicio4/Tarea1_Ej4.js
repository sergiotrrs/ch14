//4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3.
//Sumados a los números anteriores, estos son: 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198
//FUNCIONA

let number = 0;
number = prompt("Escribe un número entero entre el 100 y el 200");
   //console.log(number)

  function module(number) {
      return number % 3;
  }
    if (module(number)!= 0) {
        console.log(number + " no es multiplo de 3 ");
    }
    else {
        console.log(number + " es multiplo de 3 ");
    }
