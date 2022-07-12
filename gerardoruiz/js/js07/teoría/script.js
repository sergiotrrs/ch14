console.log("Sesión JS07 ");

let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function guardarDatos() {
  const formulario = document.getElementById("formulario");
  console.log("nombre: " + formulario.elements["nombre"].id);
  console.log("apellido: " + formulario.elements["apellido"].value);
  //Se le indica una clave y un valor
  localStorage.setItem("Cohorte", "Ch14");
  localStorage.setItem("nombre", formulario.elements["nombre"].value);
  localStorage.setItem("apellido", formulario.elements["apellido"].value);
  //Se acostumbra a guardar como objeto de la siguiente manera:
  //Va a ser más eficaz para guardar menos datos en comparación a las líneas de arriba que ocupan más espacio
  //con ese JSONstringify lo guardo en formato JSON
  localStorage.setItem(
    "datosUsuario",
    JSON.stringify({
      nombre: formulario.elements["nombre"].value,
      apellido: formulario.elements["apellido"].value,
    })
  );
}

function recuperarDatos() {
  const formulario = document.getElementById("formulario");
  formulario.elements["nombre"].value = localStorage.getItem("nombre");
  formulario.elements["apellido"].value = localStorage.getItem("apellido");
  //Lo convierto con JSON.parse para que lo lea no como objeto de dato
  let datos = JSON.parse(localStorage.getItem("datosUsuario"));
  console.log("Datos usuario " + datos + ["nombre"] + datos.apellido);
}

/* function imprimir(dato) {
  console.log("el dato es " + dato);
}

function imprimirHTML(dato) {
  let demo = document.getElementById("demo");
  demo.innerHTML = dato;
}

function suma(a, b, fncImprimir) {
  let suma = a + b;
  fncImprimir(suma);
}

suma(3, 5, imprimir);
suma(2, 8, imprimirHTML);
 */

/* function funcionCB() {
  console.log("2-. Se activa función callback");
  return "cualquier dato"
} */

/*  console.log("1-. Antes de SetTimeout")
//setTimeout( function (){console.log("2.1 Se activa mi función anónima ") },  3000)   // setTimeOut ( Nombre_función, milisegundos a contar )

setTimeout(() => 
  console.log("2.2 Se activa la función flecha")
, 3500);

console.log("3-. Despues de setTimeOut"); 
 */
//Promesas

//miPromesa();
function miPromesa() {
  let promesa = new Promise((res, rej) => {
    const expresion = true;
    if (expresion) {
      res("La promesa se resolvió con éxito, la abejita trajo el polen");
    } else {
      reject("La promesa no se resolvió, la abejita no trajo polen :( ");
    }
  });

  //Vamos a consumir la promesa  con .then y .catch
  promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueReject) => console.log(valueReject));
}

//Promesasm, async, await, try-catch

calculos();
async function calculos() {
  /* const suma = (a, b) => a + b;
  console.log("El resultado de la suma es: " + suma (1,2)); */
  const resta = (a, b) => a - b;
  //console.log("El resultado de la resta es: " + resta (7,2));
  /* Mi función va a sumar, siempre que el a y b sean positivos
  Se retorna el resultado positivo
  Si el resultado es negatiivo, enviará un mensaje  de error*/
  const suma = (a, b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      if (a > 0 && b > 0) setTimeout(() => resolve(a + b), 3000);
      else reject(" Solo se puede sumar números positivos");
    });
    return operacionSuma;
  };
  /* Se determinará si el número ingresado es par
Si es par retornará true, si no es par, se retornará un mensaje de error*/
  const esPar = (num) => {
    //return num % 2 ? true : false;
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) resolve (true);
      else reject ("El número no es par")
    })
  };
  /* suma(5, 6)
    .then((resultado) => {
      console.log("Promesa Suma:" + resultado);
      //console.log(`Es par? ${esPar(resultado)}`);
     return esPar(resultado)
    })
    .then( resultadoEsPar =>{ //Este .then consume la promesa de esPar(Resultado)
      console.log("Promoesa es Par ? " + resultadoEsPar)
    } )
    .catch((error) => console.log("Rechazado por: " + error)); */
 

  //Para usar await, mi función debe ser async
 // console.log("Await el resultado de la suma" + await suma(2,3))

  try {
    console.log("Try el resultado de la suma " + await suma(6,3))
    console.log("Se terminó este asunto, vamos por elotes")
  }
  catch(error){
    console.log("Se genero un error por: " + error )
  }
console.log("El resultado de la resta es: " + resta(10, 3));
}