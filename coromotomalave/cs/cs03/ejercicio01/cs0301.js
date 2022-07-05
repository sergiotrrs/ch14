
//1. Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el mayor.

let biggerNum = function (A, B, C) {
  if(A === B && B === C && A === C) {
    window.alert(`Por favor ingrese distintos numeros!`);
    return null;
  }
  let result ;
  if (A > B) {
    result = A;
  }
  else {
     result = B;
  }
  if (C > result) {
    result = C;
  }
  console.log(`${result} es el numero mayor`);
  return result;
};
biggerNum(90 , 90, 90);
