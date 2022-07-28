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
    "datos",
    JSON.stringify({
      nombre: formulario.elements["nombre"].value,
      apellido: formulario.elements["apellido"].value,
      //expiracion: tiempo _en _milisegundos;
    })
  );
}

function recuperarDatos() {
  const formulario = document.getElementById("formulario");
  // formulario.elements['nombre'].value =localStorage.getItem("nombre");
  //formulario.elements['apellido'].value =localStorage.getItem("apellido");
  //Lo convierto con JSON.parse para que lo lea no como objeto de dato
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log("Datos usuario " + datos + ["nombre"] + datos.apellido);
  formulario.elements["nombre"].value = datos.nombre;
  formulario.elements["apellido"].value = datos.apellido;
}

//*************************************************************************** */

function imprimir(dato) {
  console.log("El dato es :" + dato);
}

function imprimirHTML(dato) {
  //console.log("El dato es :" + dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = "El dato es :" + dato;
}

function suma(a, b, fncmostrar) {
  let suma = a + b;
  fncmostrar(suma);
}

//suma(3, 5,imprimir);
//suma(2, 8 , imprimirHTML);
//**********************funcion setTimeOut*****************************

// function funcionCallBack(){
//   console.log("2.-Se activa la funcion CallBack")
// }

// console.log("1.-Antes de setTimeout");
// //setTimeout( funcionCallBack, 3000) //PARAMETROS FUNCION SET TIME OUT(NOMBRE FUNCION, MILISEGUNDOS A CONTAR)

// //setTimeout(function(){console.log("2.1.-Se activa mi funcion anonima")}, 3000)
// setTimeout(()=>console.log("2.2.- Se activa la funcion flecha"), 3000);
// console.log("3.-Despues de setTimeOut");

//********************promesa**********************************
//miPromesa();
function miPromesa() {
  const promesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
      resolve("la promesa se resolvio, la abejita trae polen");
    } else {
      reject("la promesa no se resolvio, la abejita no trajo polen");
    }
  });

  //vamos a consumir la promesa con then y chatch
  //promesa.then().catch()
  promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueReject) => console.log(valueReject));
}

//*************************promesas, async-Await, try-catch */****************** */
calculos();
async function calculos() {
  //const suma = (a, b)=> a + b;
  // console.log("El resultado de la suma es: " + suma(1, 2));
  const resta = (a, b) => a - b;

  /**
   *  Mi funcion va a sumar siempre que a y b  sean positivos
   * se retorna el resultado positivo
   * si el resultado es negativo se enviara un mensaje
   *  */
  const suma = (a, b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      //if(a>0 && b>0) resolve (a+b);
      if (a > 0 && b > 0) setTimeout(() => resolve(a + b), 3000);
      else reject("Solo se puede sumar números positivos");
    });
    return operacionSuma;
  };
  /**
   * se determinara si el numero ingresado es par
   * si es par se retornara true
   * si no es par se retornara un mensaje de error
   */

  const esPar = (numero) => {
    //return (a%2==0 ? true : false);
    return new Promise((resolve, reject) => {
      if (numero % 2 == 0) setTimeout(() => resolve(true), 3000);
      else reject("El numero no es par");
    });
  };

  suma(5, 6)
    .then((resultado) => {
      console.log("Promesa Suma:" + resultado);
      //console.log("Es par?: " + esPar(resultado));
      return esPar(resultado);
    })
    .then((resultadoEsPar) => {
      //este .then consume la promesa de espar(resultado);
      console.log("Promesa es par? " + resultadoEsPar);
    })
    .catch((error) => console.log("Rechazado por: " + error));

    
    //Existe otra forma de consumir las promesas, usando async-await**
    //para usar await mi funcion debe ser asyc. async function calculo()
    //si se ejecuta el reject, me aparece el resultado (mensaje), no se maneja el error.
    //console.log("await el resultado es suma: " + await suma(9 , 6)); 

//para manejar el error con await , podemos utiizar los bloques try-catch
try{
console.log("Try el resultado suma: " + await suma(-6, 3));
console.log("se termino este asunto, vamos por elotes");
}
catch (error){
console.log("se genero un error por:" + error);
}

    console.log("El resultado de la resta es: " + resta(4, 3));
  
  
  
  }

