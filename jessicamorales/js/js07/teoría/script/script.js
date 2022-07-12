console.log("Sesión JS07 ")

let x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }

// function guardarDatos(){
//     const formulario = document.getElementById('formulario');
//     console.log("nombre: "+formulario.elements['nombre'].id);
//     console.log("apellido: "+formulario.elements['apellido'].value);
//     //Se le indica una clave y un valor
//     localStorage.setItem("Cohorte", "Ch14");
//     localStorage.setItem("nombre",formulario.elements['nombre'].value);
//     localStorage.setItem("apellido",formulario.elements['apellido'].value);
//     //Se acostumbra a guardar como objeto de la siguiente manera:
//     //Va a ser más eficaz para guardar menos datos en comparación a las líneas de arriba que ocupan más espacio
//     //con ese JSONstringify lo guardo en formato JSON
//     localStorage.setItem("datosUsuario",JSON.stringify(
//     {
//         nombre: formulario.elements['nombre'].value,
//         apellido: formulario.elements['apellido'].value
//     })
//     )
// }

// function recuperarDatos(){
//     const formulario = document.getElementById('formulario');
//     formulario.elements['nombre'].value =localStorage.getItem("nombre");
//     formulario.elements['apellido'].value =localStorage.getItem("apellido");
//     //Lo convierto con JSON.parse para que lo lea no como objeto de dato
//     let datos = JSON.parse(localStorage.getItem('datosUsuario'));
//     console.log("Datos"+ datos+['nombre'] + datos.apellido);

// }


// //console.log("1. antes del settimeout");

// //settimeout ya está determinada
// //( nombre de función, ms a contar)
// //La función debe ser
// setTimeout(funcionCallBack ,3000 );
// // setTimeout(funcionCallBack() ,3000 );
// //se pone el nombre de la función sin ()
// //settimeout nos llama la función despues de ese tiempo establecido
// //por eso no tenemos que poner () porque sino 
// //se ejecuta en ese momento la función
// //console.log("3. despues de settimeout")

// function imprimir(dato){
//   console.log("El dato es: " + dato);
// }

// function imprimirHTML(dato){
//   //console.log("El dato es: " + dato);
//   let demo = document.getElementById("demo");
//   demo.innerHTML = dato;
// }

// function suma(a, b, fncMostrar){
//   let suma = a + b;
//   fncMostrar(suma);
// }

// //suma(3, 5, imprimir);
// //suma(2, 8, imprimirHTML);

// //*******Función setTimeout*****************/
// // function funcionCallBack() {
// //   console.log("2. se activa la función CallBack");
// // }

// //console.log("1.- Antes de setTimeout");
// //setTimeout(funcionCallBack, 3000) //setTimeout
// //setTimeout(function(){console.log("2.1.- Se activa mi función anónima")}, 3000);
// setTimeout(()=>console.log("2.2.- Se activa la función flecha"), 3000);
// //console.log("3.- Después de setTimeout");

//*****************Promesas*****************************/
//miPromesa();
function miPromesa(){
  const promesa = new Promise((resolve, reject) =>{ 
    const expresion = true;
    if(expresion){
      resolve("La promesa se resolvió, la abejita trae polen");
    }
    else{
      reject("La promesa NO se resolvió, la abejita no trajo polen");
    }
  });

  //Vamos a consumir la promesa con .then y .catch
  //promesa.the( ).catch( );
  promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueResolve) => console.log(valueResolve));
}

//************************** */
calculos();
async function calculos(){
  //const suma = (a,b) => a + b;
  //console.log("El resultado de la suma es: " + suma(1.2));
  const resta = (a,b) => a - b;
  //console.log("El resultado de la resta es: " + resta(4,3));
/**
 * 
 * Mi función va a sumar, siempre que a y b sean positivo
 * Se retorna el resultado positivo.
 * Si el resultado es negativo, se enviará un mensaje de error
 */
  const suma = (a,b) => {
    const operacionSuma = new Promise((resolve, reject) =>{
      //if(a>0 && b>0) resolve (a+b);
      if(a>0 && b>0) setTimeout(()=>resolve (a+b), 3000);
      else reject("Solo se puede sumar números postivos");
    })
    return operacionSuma;
  }
/**
   * Se determinará si el número ingresado es par
   * Si es par se retornará true
   * Si no es par, se retorna un mensaje del error.
   */
//  const esPar = (numero) => {
//   //return (numero%2==0 ? true : false);
//   return new Promise((resolve, reject) => {
//     if ( numero%2 == 0 ) resolve(true);
//     else reject ("El número no es par");
//   });    
// }
// suma(5, 6)
// .then( resultado => {
//     console.log("Promesa Suma:" + resultado);
//     //console.log("Es par?: "+ esPar(resultado));
//     return esPar(resultado);
//   })
// .then( resultadoEsPar =>{   //Este .the, consume la promesa de esPar(resultado);
//     console.log("Promesa es par? " + resultadoEsPar);
// }  )
// .catch( error => console.log("Rechazado por: " + error));

console.log("El resultado de la resta es: " + resta(4,3));

//Existe otra forma de consumir las primeras, usando async-await
//Para usar await, mi función debe ser async.
//console.log("Await El resultado suma: " + await suma(9,6));

//Para manejar el error con await, podemos usar los bloques try-catch
try{
  console.log("Try El resultado suma: " + await suma (-6,3));
  console.log("Se terminó este asunto, vamos por elotes");
}
catch(error){
  console.log("Se generó un error por: " + error);
}
console.log("El resultado de la resta es: " + resta(10,3));
}