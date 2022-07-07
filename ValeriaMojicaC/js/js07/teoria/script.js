console.log("Sesion JS07");
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
    console.log(`Nombre: ${formulario.elements['nombre'].value}`);
    console.log(`Apellido: ${formulario.elements['apellido'].value}`);
    //Se le indica una clave y un valor, para guardar los datos (string o numerico)
    localStorage.setItem("Cohorte", "CH14");

    //localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    //Guarda los datos como un objeto (se acostumbra guardar datos en formato JSON)
    //localStorage.setItem("datosUsuario",

    //Muestra los datos de un objeto como texto. Guarda los datos en formato JSON
    localStorage.setItem("datosUsuario", JSON.stringify (
        {
            nombre: formulario.elements['nombre'].value,
            apellido: formulario.elements['apellido'].value
            //espiracion: tiempo_en_milisegundos; obtengo el tiempo actual, lo convierto a milisegundo y sumo el tiempo que estoy en la sesion
            //Solo recupera los datos durante un minuto 
            //para saber el tiempo esta dentro del rango hacemos una resta y si el resultado es negativo ya no recupera los datos
        }
    )
    );
}

//recupera los datos guardados en el formulario
function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    //formulario.elements['nombre'].value = localStorage.getItem("nombre");
    //formulario.elements['apellido'].value = localStorage.getItem("apellido");
    //Recuperar los datos del objeto
    //let datos = localStorage.getItem("datosUsuario");

    //
    let datos = JSON.parse(localStorage.getItem("datosUsuario"));
    //Se pueden mandar a llamar de ambas maneras, pero los [] podrian usarse para meter una variable
    console.log(`Datos de usuario: ${datos['nombre']} ${datos.apellido}`);
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
}

//FUNCIONES ASÍNCRONAS
function imprimir (dato){
  console.log(`El dato es: ${dato}`);
}

function imprimirHTML (dato){
  //console.log(`El dato es: ${dato}`);
  let demo = document.getElementById("demo");
  demo.innerHTML = `El dato en HTML es: ${dato}`;
}


function suma(a, b, fncMostrar){
  let suma = a + b;
  //Administra cuando la va a requerir
  fncMostrar(suma);
}

//suma(3, 5, imprimir);
//suma(2, 8, imprimirHTML);

//Funcion setTimeout************************
function funcionCalBack () {
  console.log(`2.Se activa funcion CallBack`);
}

//console.log(`1.Antes del CallBack`);
//Manda a llamar a una funcion despues del tiempo establecido
//No se utilizan las () porque en ese momento se ejecuta la funcion e ignora los 3segundos
//setTimeout(funcionCalBack, 3000) //setTimeout (nombre_funcion, ms a contar)
//setTimeout(function(){console.log(`2.1 Se activa mi funcion Anonima`)}, 3000);
//La funcion flecha no lleva nombre
//Si la funcion flecha solo tiene una instruccion no requiere return
//si se necesita retornar algo y tiene mas de una instruccion si se utiliza el return
//setTimeout(() => console.log(`2.2 Se activa la funcio flecha`), 3000);
//console.log(`3.Despues del setTimeout`);


//Promesas***********************************
//miPromesa();
function miPromesa(){
  //Crear una nueva promesa
  let promesa = new Promise((resolve, reject) => {
    const expresion = false;
    if (expresion) {
      //Resuelve la promesa-
      resolve (`Resolve: La Promesa Se Resolvio, La Abejita Trae Polen`);
    } else {
      //Cuando la promesa no se cumple
      reject (`Reject: La Promesa NO se resolvió, La Abejita No Trajo Polen`)
    }
  });

  //Vamos a consumir (leer) la promesa con .then y .chatch
  //promesa.then().catch();
  promesa
  .then((valueResolve) => console.log(valueResolve)) // y entonces cuando la promesa se cumple haces esto
  .catch((valueReject) => console.log(valueReject)); //si la promesa es rechazada se ejecuta esta parte 
}

//Promesas, Async-Await, Try-Catch*********************

async function calculos() {
  //const suma = (a, b) => {return a + b};
  //console.log(`El resultado de la suma es: ${suma(1, 2)}`);
  const resta = (a, b) => a - b;
  //console.log(`El resultado de la resta es: ${resta(6, 2)}`);

  /**
   * 
   * @param {Number} a 
   * a tiene que ser numero positivo
   * @param {Number} b 
   * 
   * Mi funcion va a sumar siempre que a y b sean positivo
   * Se retorna el resultado positivo.
   * Si el resulto es negativo, se envia un mensaje
  */
  const suma = (a, b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      //if (a > 0 && b > 0) resolve (a + b);
      //                        funcion flecha o callback
      if ( a > 0 && b > 0) setTimeout(() => resolve (a + b ), 3000)
      else reject (`Solo se aceptan numero positivos`);
    })
    return operacionSuma;
  }

  /**
   * @param {number} numero
   * Determinara si el resultado de la suma es par
   * Si es par retornara true
   * De lo contrario (impar) retornara un mensaje de error
   */
  const esPar = (numero) => {
    //return (a % 2 == 0) ? true :false;
    return new Promise((resolve, reject) => {
      if (numero % 2 == 0) setTimeout(() => resolve (true), 3000)
      else reject (`El numero no es par`);
    });
  }

  //Esta es una funcion asincrona
  //Funcion promesa
  suma(6, 6)
  .then(resultado => {
    console.log(`Promesa suma: ${resultado}`);
    //console.log(`Es Par? ${esPar(resultado)}`);
    return esPar(resultado)
  })
  .then( resultadoEsPar => { //Este .then, consume la promesa de esPar(resultado)
    console.log(`Promesa es par? ${resultadoEsPar}`);
  })
  .catch(error => console.log(`Rechazado porque: ${error}`));
  console.log(`El resultado de la resta es: ${resta(6, 2)}`);

  //Existen otra forma de consumir promesas, con async-await
  //Para usar await, mi funcion debe estar declarada como async
  //Si se ejecuta el reject, me aparece el resultado(mensaje), No se maneja el error.
  console.log(`Await. El resultado suma: ${await suma(9,6)}`);

  //Para manejar el errror con await, podemor usar los bloques try-catch
  //Se tiene el contro sobre los errores
  try {
    console.log(`Try. Trae el resultado suma: ${await suma(-6, 3)}`);
    console.log(`Se terminó este asunto, vamos por elotes`);
  } catch (error){
    console.log(`Se generó un error porque:  ${error}`);
  }

  console.log(`Await. El resultado resta: ${resta(-9,6)}`);
}
calculos();

