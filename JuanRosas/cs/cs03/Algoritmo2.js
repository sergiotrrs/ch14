let numeroA = 50;
let numeroB = 50;
let numeroC = 45;

if (numeroA > 0 && numeroA < 100) {
  console.log("Tu numero A puede usarse");
  if (numeroB > 0 && numeroB < 100) {
    console.log("Tu numero B puede usarse");
    if (numeroC > 0 && numeroC < 100) {
      console.log("Tu numero C puede usarse");
      if (numeroA !== numeroB && numeroB !== numeroC && numeroA !== numeroC) {
        console.log("Se comprobo que son diferentes.");
        if (numeroA < numeroB) {
          if (numeroA < numeroC) {
            console.log('A es el menor');
          } else {
            console.log('C es menor');
          }
        } else {
          if (numeroB < numeroC) {
            console.log('B es menor');
          }else{
            console.log('C es menor');
          }
        }
      }else{
        if (numeroA === numeroB && numeroB === numeroC && numeroA === numeroC) {
          console.log('Todos son iguales');
        } else {
          console.log("Algunos son iguales");
          if (numeroA === numeroB) {
            if (numeroA < numeroC) {
              console.log("Los numeros A y C son menores:", +numeroA+ ", " +numeroB);
            } else {
              console.log("El numero menor es C", numeroC);
            }
          } else {
            if (numeroA === numeroC) {
              if (numeroA < numeroB) {
                console.log("Los numeros A y C son menores:", +numeroA+ ", " +numeroC);
              } else {
                console.log("El numero B es menor:", numeroB);
              }
            } else {
              if (numeroC === numeroB) {
                if (numeroC < numeroA) {
                  console.log("Los numeros C y B son los menores:", +numeroB+ ", " +numeroC);
                }
              }
            }
          }
        }
      }
    } else {
      console.log("Tu numero C no se puede usar por que no esta en un rango de 0 a 100");
    }
  } else {
    console.log("Tu numero B no se puede usar por que no esta en un rango de 0 a 100");
  }
} else {
  console.log("Tu numero A no se puede usar por que no esta en un rango de 0 a 100");
}