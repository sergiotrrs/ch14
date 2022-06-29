//Funcion flecha suma
const suma = () => {
    let A = document.getElementById("valorA").value;
    let B = document.getElementById("valorB").value;
    return document.getElementById("resultado").innerHTML = (Number(A)*10 +Number(B)*10)/10 ;
   
  };
  
  //Funcion flecha resta
  const resta = () => {
    let A = document.getElementById("valorA").value;
    let B = document.getElementById("valorB").value;
    return document.getElementById("resultado").innerHTML =  ((A)*10 - (B)*10)/10 ;
  };
  
  //Funcion flecha multiplicación 
  const multiplicacion = () => {
    let A = document.getElementById("valorA").value;
    let B = document.getElementById("valorB").value;
    return document.getElementById("resultado").innerHTML = A*B ;
  };
  
  //Funcion flecha división
  const division = () => {
    let A = document.getElementById("valorA").value;
    let B = document.getElementById("valorB").value;
    return document.getElementById("resultado").innerHTML = A/B ;
  };

//   function leerDatos(){
//     const a=parseInt(document.getElementById("A").value);
//     const b=parseInt(document.getElementById("B").value);
//     return {a: a, b:b};
// }
// function suma(){
//     dato = leerDatos();
//     document.getElementById("C").innerHTML = dato.a +dato.b;
// }
