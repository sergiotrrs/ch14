
let addition = function addition (a, b, c) {
  if ( a == (b + c) ) {
    console.log("La suma de b y c da el mismo resultado de a");
  }
  else if (b == (a + c)) {
    console.log("La suma de a y c da el mismo resultado de b")
  }
  else if (c == (a + b)) {
     console.log("La suma de a y b da el mismo resultado de c")
  }
  else {
        console.log("No se encontró ninguna coincidencia en las sumas")
  }
}
 addition(2,2,4)