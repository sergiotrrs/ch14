
//2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números.

let minorNumber = function (A, B, C) {

  if(A === B && B === C && A === C) {
    window.alert(`Por favor ingrese distintos nnumeros!`);
    return null;
  }
  let result ; 
  if (A < B) {
     result = A;
  }
  else {
     result = B;
  }
  if (C < result) {
    result = C;
    
  }
  console.log(`${result} es el numero menor`)
   return result;
};

minorNumber(2 , 4, 2)
