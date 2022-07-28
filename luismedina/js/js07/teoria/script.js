console.log("Sesion js07");

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
  const formulario = document.getElementById(`formulario`);
  console.log("Nombre: " + formulario.elements[`nombre`].id);
  console.log("Apellido: " + formulario.elements[`apellido`].value);
  //Se le indica una clave y un valor
  localStorage.setItem("Cohorte", "Ch14"); // aqui se estan guardando datos
  localStorage.setItem("nombre", formulario.elements[`nombre`].value);
  localStorage.setItem("apellido", formulario.elements[`apellido`].value);



  //se acostumbra a duardar como objetos que es de la siguiente manera
  // localStorage.setItem("datosUsuario", {
  localStorage.setItem("datos", JSON.stringify({

    nombre: formulario.elements[`nombre`].value,
    apellido: formulario.elements[`apellido`].value,
  }));

  borrarAlmacen();

}

function recuperarDatos() {
  const formulario = document.getElementById('formulario');
  // formulario.elements['nombre'].value = localStorage.getItem("nombre");
  // formulario.elements['apellido'].value = localStorage.getItem("apellido");
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log("quiero ver que hay despues de borrar null " + datos);

  if (datos == null) {
    /**Con esto ya medio funcionaba
     * const nuevoElemento = document.createElement("div","alert alert-warning alert-dismissible fade show");
     * 
    nuevoElemento = document.createElement("button");
    nuevoElemento.innerHTML = "Este es un nuevo parrafo";
    document.body.appendChild(nuevoElemento);
    nuevoElemento.className = "alert alert-warning alert-dismissible fade show";
    // nuevoElemento = document.createElement("button");
    nuevoElemento.className = "btn-close";
    nuevoElemento.setAttribute("data-bs-dismiss","alert");
    nuevoElemento.setAttribute("aria-label","Close");
    // nuevoElemento.setAttribute("type",button);

     */

    alert("Por tu seguridad borramos la informacion");


  } else {
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
  }
}



//Tarea tenemos que ponerle una expiracion: tiempo en milisegundos.
// mp mps debe dejar leer los datos despues de un minuto





function imprimir(dato) {
  console.log("El datos es " + dato);
}

function imprimirHTML(dato) {
  // console.log("El datos es "+dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = "El datos es " + dato;
}

function suma(a, b, mostrar) {
  let suma = a + b;
  mostrar(suma);
}

// suma(3, 5, imprimir);
// suma(2,8, imprimirHTML);


function funcionCallBack() {
  console.log("2. Se activa la funcion CallBack");
}
// // funcionCallBack();
// console.log("1. Funcion antes de setTimeout");
// // setTimeout(funcionCallBack, 3000) //(nombre_funcion, ms a contar)
// // setTimeout(function(){console.log("2.1. Se activa la funcion anonima")},3000);
// setTimeout(()=>console.log("2.2. Se activa la funcion flecha"), 3000);
// console.log("3. Funcion despues de setTimeout");

// //No se le puede poner nombre
// setTimeout(() => {
//   console.log(`Esta es mi prueba de flecha`);
//   return "Cualquier dato";
// }, 3000);

/**Promesas */
// miPromesa();
function miPromesa() {
  const promesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
      resolve("La promesa se resolvio con exito");
    }
    else {
      reject("La promesa no se resolvio");
    }

  });

  //vamos a consumor la promesa con .then y .chatch
  // promesa.then().catch()
  promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueReject) => console.log(valueReject));

}

function borrarAlmacen() {
  setTimeout(() => {
    localStorage.clear();
    console.log("Ya te borre");
  }, 10000);
}
/**
 * Promesas, Async-Await, try-Cathc
 */

calculos();

async function calculos() {
  // const suma = (a, b) => a + b;
  // console.log("El resultado de la suma es " + suma(1, 2));
  const resta = (a, b) => a - b;

  /**
 * Mi funcion va a sumar siempre que a y b sean positivos
 * Se retorna el resultado positivo
 * Si el resultado es negativo se enviara un mensaje de error
 */
  const suma = (a, b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      // if (a > 0 && b > 0) resolve(a + b);
      if (a > 0 && b > 0) setTimeout(() => resolve(a + b), 3000);
      else reject("Solo se puede sumar numeros positivos");
    })
    return operacionSuma; //Como son varias cosas lo que se hace en la funcion se tiene que retornar este valor para que se pueda tomas mas abajo con el then y catch
  }


  /**
   * Se determinara si el numero ingresado es par o impar
   * Si es par se retorara true 
   * si no es par se retornara un mensaje de error.
   */
  const esPar = (a) => {
    // return (a % 2 == 0 ? true : false);
    return new Promise((resolve, reject) => {
      if (a % 2 == 0) setTimeout(() => resolve(true), 3000);
      else {
        reject("El numero no es par")
      }
    })
  }


  // suma(5, 6)
  //   .then(resultado => {
  //     console.log("El resultado de la promesa suma es: " + resultado);
  //     // console.log("Es par?: " + esPar(resultado));
  //     return esPar(resultado);
  //   })
  //   .then(resultadoEsPar => { //Este .the consume la promesa si es par
  //     console.log("Promesa es par?= : " + resultadoEsPar);
  //   })
  //   .catch(error => console.log("Rechazado por: " + error));


  // console.log("El resultado de la resta es " + resta(4, 3));

  //Existe otra forma de consumir las promesas, usando async-await
  //Para usar await mi funcion debe ser asyn que se le pone antes de la palabra reservada function
  // si se ejecuta el reject me aparece el resultado (mensaje)
  // console.log("Await El resultado de suma: "+ await suma(9,6));

  //Para manejar el error con wait podemos usar los bloques de try-catch
  try {
    console.log("Try El resultado suma: " + await suma(-6, 3));
    console.log("Se termino este asunto");
  } catch (error) {
    console.log("Se genero un error por: " + error);
  }
  console.log("El resultado de la resta es " + resta(4, 3));
}
