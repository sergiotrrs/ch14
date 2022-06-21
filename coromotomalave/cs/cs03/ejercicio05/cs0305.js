
//5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let addition = function addition (A, B, C) {
  if ( A === (B + C) ) {
    console.log("La suma de B y C da el mismo resultado de A");
  }
  else if (B === (A + C)) {
    console.log("La suma de A y C da el mismo resultado de B")
  }
  else if (C === (A + B)) {
     console.log("La suma de A y B da el mismo resultado de C")
  }
  else {
        console.log("No se encontró ninguna coincidencia en las sumas")
  }
}

addition(4 , 8 , 4);
