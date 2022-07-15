console.log("Sesión JS07");
guardarDatos();
recuperarDatos();

let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function guardarDatos() {
  const formulario = document.getElementById('formulario');
  console.log("nombre: " + formulario.elements['nombre'].id);
  console.log("apellido: " + formulario.elements['apellido'].value);
  //Se le indica una clave y un valor
  localStorage.setItem("Cohorte", "Ch14");
  localStorage.setItem("nombre", formulario.elements['nombre'].value);
  localStorage.setItem("apellido", formulario.elements['apellido'].value);
  // localStorage.setItem("expiracion",formulario.elements['expiracion'].value);
  localStorage.setItem("datosUsuario", JSON.stringify(
    {
      nombre: formulario.elements['nombre'].value,
      apellido: formulario.elements['apellido'].value,
      // expiracion: formulario.elements['expiracion'].value
      //expiracion: tiempo_en_milisegundos; //1 minuto de tiempo de expiración
    })
  );
  // setTimeout(() => {console.log("*Se guardaron datos secretos*")}, 3000);
  // setTimeout(guardarDatos() => {console.log("*Se guardaron datos secretos*")}, 3000);
}
//***HACER RESTA PARA CUMPLIR EL TIEMPO DE 1 MIN */

borrarAlmacen();

function recuperarDatos() {
  const formulario = document.getElementById('formulario');
  // formulario.elements['nombre'].value = localStorage.getItem("nombre");
  // formulario.elements['apellido'].value = localStorage.getItem("apellido");
  let datos = JSON.parse(localStorage.getItem("datosUsuario"));

 if (datos == null){

  // document.getElementsByClassName("alert") = alert("Borramos tus datos por seguridad");
 }else{
  console.log(`Datos de usuario: ${datos['nombre']} ${datos.apellido} `);
  formulario.elements['nombre'].value = datos.nombre;
  formulario.elements['apellido'].value = datos.apellido;
 }
}

function borrarAlmacen(params) {
  setTimeout(() => {
    localStorage.clear();
    // console.log("Ya te borre");
  }, 2000);
}
//**************************************************************************** */


function imprimir(dato) {
  console.log("El dato es: " + dato);
}

function imprimirHtml(dato) {
  // console.log("El dato es: "+dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = "El dato es: " + dato;
}

function suma(a, b, fncMostrar) {
  let suma = a + b;
  fncMostrar(suma);
}

// suma(3, 5, imprimir);
// suma(2, 8, imprimirHtml);

//Función setTime*********************************************************
function functionCallBack() {
  console.log("2. Se activa la función callBack");
  return "dato cualquiera";
}

// functionCallBack();
// console.log("1. Antes de setTimeout");
// setTimeout( functionCallBack , 3000 ); //setTimeout(nombre_función, ms_a_contar)
// //debe ponerse sin () despues de functionCallBack por que de lo contrario la acciona de inmediato
// // setTimeout(function (){ console.log("2.1 Se activa mi función anónima ")} , 3000);
// setTimeout (() => console.log("2.2 Se activa la función flecha"), 3000 );
// // setTimeout(puede poner function o no aqui() => {console.log("ejemplo")}, timeout);
// console.log("3. Despues de setTimeout");

//** Promesas ******************************************************** */
// miPromesa();
function miPromesa() {
  const promesa = new Promise((resolve, reject) => {
    const expresion = false;
    if (expresion) {
      resolve("La promesa se resolvio, la abejita trae polen");
    } else {
      reject("La promesa no se resolvio, la abejita no trajo polen");
    }

  });

  //Vamos a consumir la promesa con .then y .catch
  //  promesa.then().catch();
  promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueReject) => console.log(valueReject));
}

//** Promesas, Async-Await, try-catch ******************************************************** */
calculos();
async function calculos() {
  // const suma = (a,b) => a+b;
  // console.log("El resultado de la suma es: " + suma(1,2));
  const resta = (a,b) => a-b;
  
  /**
   *   Mi función va a sumar siempre que a y b sean positivos
   *   Se retorna el resultado positivo
   *   Si el resultado es negativo, se enviará un mensaje
   */
  const suma = (a,b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      // if(a>0 && b>0) resolve (a+b);
      if(a>0 && b>0) setTimeout (() => resolve (a+b), 3000);
      else reject("Solo se pueden sumar números positivos");
    })
    return operacionSuma;
  }

  /**
   * Se determinará si el número ingresado es par
   * Si es par se retornará true
   * Si no es par, se retorna mensaje de error.
   */
  const esPar = (numero) => {
    // return (a%2==0 ? true : false);
      return new Promise((resolve, reject) => {
        if (numero%2 == 0) setTimeout (() => resolve (true), 3000);
        else reject ("El número no es par");
  });
}

  // suma(5,6)
  // .then(resultado => {
  //   console.log("Promesa suma: " + resultado);
  //   // console.log("Es par?: "+esPar(resultado));
  //   return esPar(resultado);
  // })
  // .then(resultadoEsPar => { //Este .then, consume la promesa de esPar(resultado);
  //   console.log("La promesa es par? " + resultadoEsPar);
  // })
  // .catch(error => console.log("Rechazado por: " + error));

  
  // Existe otra forma de consumir las promesas, suando async-await
  // Para usar await, mi función debe iniciar con async
  // Si se ejecuta el reject, me aparece el resultado(mensaje), No se maneja el error 
  // console.log("Await El resultado suma: " + await suma(9,6));

  // Para mejorar el error con await, podemos usar los bloques try-catch
  try {
    console.log("Try El resultado suma: " + await suma (-6,3));
    console.log("Se terminó este asunto, vamos por elotes");
  } catch (error) {
    console.log("Se generó un error: " + error);

  }
  
  console.log("El resultado de la resta es: " + resta(10,3));
}



