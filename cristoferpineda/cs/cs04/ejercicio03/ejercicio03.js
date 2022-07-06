//Exercise #3
let cadena=[1, 2, 3, 4];
let total1=0; total2=1;
function suma(a) {
  for (let i = 0; i <a.length; i++){
    total1=total1+a[i];
  }
  console.log("La suma es: "+total1);
  
}
function multiplicacion(a) {
  for (let i = 0; i < a.length; i ++){
    total2=total2*a[i];
  }
  console.log("La multiplicacion es: "+total2);
}
suma(cadena);
multiplicacion(cadena);