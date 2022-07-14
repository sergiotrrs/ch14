console.log("Sesión JS07 API Fetch");
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
  console.log("nombre: " + formulario.elements['apellido'].value);

  //Se le indica la clave y el valor
  localStorage.setItem("Cohorte", "Ch14");
  localStorage.setItem("nombre", formulario.elements['nombre'].value);
  localStorage.setItem("apellido", formulario.elements['apellido'].value);
  //formato jason
  localStorage.setItem("datos", JSON.stringify(
    {
      nombre: formulario.elements['nombre'].value,
      apellido: formulario.elements['apellido'].value
    })

  );
}

function recuperarDatos() {
  const formulario = document.getElementById('formulario');
  console.log("nombre: " + formulario.elements['nombre'].id);
  console.log("nombre: " + formulario.elements['apellido'].value);


  //Se le indica la clave y el valor
  localStorage.setItem("Cohorte", "Ch14");
  // formulario.elements['nombre'].value=localStorage.getItem("nombre");
  // formulario.elements['apellido'].value=localStorage.getItem("apellido");
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`);
  formulario.elements['nombre'].value = datos.nombre;
  formulario.elements['apellido'].value = datos.apellido;
}

// function recuperarDatos() {
//     const formulario = document.getElementById(`formulario`);
//     formulario.elements[`nombre`].value = localStorage.getItem(`nombre`);
//     formulario.elements[`apellido`].value = localStorage.getItem(`apellido`);
//     let datos = JSON.parse(localStorage.getItem("datosUsuario"));
//     console.log(`Datos usuario: ${datos.nombre} ${datos.apellido}`);
//   }
//*********************************************************************************** */

function imprimir(dato) {
  console.log("Es dato es: " + dato);
}

function imprimirHTML(dato) {
  let demo = document.getElementById("demo");
  demo.innerHTML = "Es dato es: " + dato;

}

//Programación asincrona
function suma(a, b, fncMostrar) {
  let suma = a + b;
  fncMostrar(suma);
}

suma(3, 5, imprimir);
suma(2, 8, imprimirHTML);
//******************************************************************************** */
//** Funcion definida */
function funcionCallBack() {
  console.log("2-Se activa la función callBack");
  return "datocualquiere";
}


// no se ponen los parentesis de la funcionCallBack();
//console.log("1-antes de setTimeout");
//setTimeout(funcionCallBack, 3000 )//(Nombre_Función, ms a contar)

//funcion anonima
//setTimeout(function(){console.log("2.1.-Se activa mi funcion anonima ") },3000);
//si la funcion flecha te puede regresar un valor sin la palabar return, solo la necesitas si tene mas de una instruccion
//setTimeout(()=>console.log("2.2.-Se activa la función flecha"),3000);
//console.log("3-despues de setTimeout");
//******************************************Promesas*********************************** */

// miPromesa();

function miPromesa() {
  let promesa = new Promise((resolve, reject) => {
    const expresion = false; //const expresion=true;
    if (expresion) {
      resolve("La promesa se resolvió, la abejita trae polen");
    } else {
      reject("La promesa No se resolvió, la abejita no trajo polen");
    }

  });
  //Vamos a consumir la promesa con .then y .chatch
  //promesa.then().catch()
  //Para guardar la respuesta en una variable
  promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueReject) => console.log(valueReject));
}
//******************************************Promesas*********************************** */

calculos();
async function calculos() {
  // const suma=(a,b)=>{ return (a+b)};
  // console.log("El resultado de la suma es: "+ suma(1,2));
  const resta = (a, b) => a - b;

  //Promesa suma, Mi funcion solo va a sumar siempre y cuenado el resultado sea positivo si
  //se retorna el resultado positivo.
  //si el resultado es negativo, se enviara un mensaje de error


  const suma = (a, b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      //if (a > 0 && b > 0) resolve(a + b);
      if (a > 0 && b > 0) setTimeout(() => resolve(a + b), 3000);
      else reject("Solo se puede sumar numeros positivos");
    });
    return operacionSuma;
  }
  /**
   * 
   * @param {number} a es el valor solicitado
   * @returns si la funcion es par
   */
  const esPar = (numero) => {
    //return ((a%2==0)? true:folse);
    //hacemos promesa
    return new Promise((resolve, reject) => {
      if (numero % 2 == 0) setTimeout(() => resolve(true), 3000);
      else reject("El número no es par");
    })

  }

  suma(5, 6)
    // .then(resultado => {
    //   console.log("Promesa suma: " + resultado);
    //   console.log("Es par?: "+ esPar(resultado));
    // })
    .then(resultado => {
      console.log("Promesa suma: " + resultado);
      return esPar(resultado);
    })
    .then(resultadoEsPar => {//Este .then, consume la promesa de esPar(resultado);
      console.log("Promesa es par? " + resultadoEsPar);
    })
    .catch(error => console.log("Rechazado por: " + error));

    
    //Exites otra forma de cosumir promesas, usado async-await
    //Para usar await, mi función debe se async
    //Si se ejecuta el reject, me parece el reultado (mensaje), No se maneja el error
    console.log("Await El resultado suma: "+ await suma(9,6));

    //Para manejar el error con await, podemos usar los bloques try-catch
    try{
      console.log("Try El resultado suma: "+ await suma(-6,3));
      console.log("Se termino este asunto, vamos por elotes");
    }
    catch(error){
      console.log("Se generó un error por: "+error);
    }
    
    console.log("El resultado de la suma es: " + resta(10, 3));

}

