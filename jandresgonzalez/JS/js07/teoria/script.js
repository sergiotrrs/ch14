/**
 * Script realizado el 05/07/22
 * @GenMX
 * Probando API Fetch. Testeando backend.
 */

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
    const formulario = document.getElementById("formulario");
    console.log("nombre " + formulario.elements["nombre"].id);
    console.log("apellido " + formulario.elements["apellido"].value);
    //Se le indica una clave y un valor
    localStorage.setItem("cohorte", "ch14");
    //localStorage.setItem("nombre", formulario.elements["nombre"].value);
    //localStorage.setItem("apellido", formulario.elements["apellido"].value);
    
    let dayData = Date.now();
    //se pone con ms
    let expiration = dayData + 45000;

    //JSON stringify string del objeto convertido a JSON
    localStorage.setItem("datos", JSON.stringify({   
        "nombre": formulario.elements["nombre"].value,
        "apellido": formulario.elements["apellido"].value,
        "expiration": expiration,
        "ingreso": dayData
      }
    ))
 }

 function recuperarDatos() {
    const formulario = document.getElementById("formulario");
    //formulario.elements["nombre"].value = localStorage.getItem("nombre");
    //formulario.elements["apellido"].value = localStorage.getItem("apellido");
    
    //JSON.parse convierte un JSON a objeto
    let datos = JSON.parse(localStorage.getItem("datos"));
    let dayData = Date.now();
       
//El siguiente if/else revisa que los datos de expiración no hayan caducado
//Se revisa la fecha de expiración de almacenamiento. Si se ha cumplido, se borra la info
//En caso de que la información no haya expirado, se muestran los últimos datos ingresados
    if (datos.expiration < Date.now()) {
      console.log("Expira: ", datos.expiration > Date.now())
      console.log("Expiró");
      datos.nombre = "----";
      datos.apellido = "----";
      datos.expiration = 0;
    }
    else {
      console.log("No expira: ", datos.expiration < Date.now())
      console.log("No expira");
      console.log("Datos del usuario: ", datos['nombre'] , datos.apellido)
      console.log("Así se ve el string", datos);
    }
    formulario.elements["nombre"].value = datos.nombre;
    formulario.elements["apellido"].value = datos.apellido;
    
 }
 function imprimir(dato) {
   console.log(dato);
}

function imprimirHTML(dato) {
  let demo = document.getElementById("demo");
  demo.innerHTML = "El dato es " + dato;
}

function suma(a, b, fncMostrar) {
  let suma = a + b;
  fncMostrar(suma);
}

//suma(3 , 5, imprimir);
//suma(9, 9, imprimirHTML)

//forEach también sería asíncrona


//Calback: se pasa un parámetro como función, para realizar operación asíncronas

function funcionCallBack() {
  console.log("Función callback");
}


/*

funcionCallBack();
console.log("Antes de timeout");
//setTimeout(  funcionCallBack  , 3000)  //No se utilizan los paréntesis,  para no ejecutarse hasta después de los milisegundos en 2do param
//setTimeout(function(){console.log("Se inició función anónima luego de 3 s")}, 3000)
setTimeout(() => {console.log("Se activa la función flecha")}, 3000)
console.log("Esto se hace antes de Timeout");

*/

//--------------------------------P R O M E S A S ---------
//myPromise();
function myPromise() {
  let promesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
      resolve ("La promesa se kunplio, KONSUMIDISIMA");
    }
    else {
      reject ("No hubo pa hacer la promesa");
    } 

  });

  //Vamos a consumir la promesa con .then y .catch
  //promesa.then().catch();
  promesa
    .then( (valueResolve) => {
      console.log(valueResolve);
    } )
    .catch( (valueReject) => console.log(valueReject));


}

//prometeVasolote();
//Ejemplo 2
function prometeVasolote() {
  let senioraVasolotesXangari = true;
  const promesa = new Promise((resolve, reject) => {
    if (senioraVasolotesXangari) console.log("Regresamos con datos de que sí hay vasolote");    
    else {
      console.log("No estaban los vasolotes");
    }
  });

  promesa
    .then ( (valueResolve) => {
      console.log(valueResolve);
    })
    .catch((valueReject) => console.log(valueReject))
}

// Promeas, Async-Await, try-Catch
calculos();
async function calculos() {
  //const suma = (a,b) => a+b;
  //console.log("El resultado de la suma es: " + suma(1,2));
  const resta = (a,b) => a-b;
  
  
  /**
   * funcion sumará siempre que resultado sea positivo
   * retorna resultado positivio
   * un resultado negativo envía mensaje
   * @param {num} a Numero 1
   * @param {num} b Numero 2
   * @returns Regresa la suma
   */
  const suma = (a,b) => {
    const operacionSuma = new Promise((resolve, reject) => {
      //if(a>0 && b>0) resolve (a+b);
      if (a>0 && b>0) setTimeout(()=> resolve (a+b), 3000)
      else reject ("Sólo admite números positivos");
    })
    return operacionSuma;
  }

  /**
   * Se determinará si el número es par
   * Si es par, se retornará true
   * de lo contrario, retorna mensajer error
   */
  const esPar = (num) => {
    //return (num%2 == 0) ? true : false;
    return new Promise ((resolve, reject) => {
      setTimeout(()=> {
      if (num%2 == 0) resolve(true);
      else reject (`El numero ${num} no es par`)}, 1500);
    })
  }


//se consume la promesa

/*   
suma(5,6)
    .then( resultado => {
       console.log("Quedó así: " + resultado) 
       //console.log("Es par?: " + esPar(resultado));
       return esPar(resultado); //Una vez consumida una promesa, se puede realizar otro solicitando
       //que regrese el valor
      })
    .then (resultadoEsPar => {   //Este .then consume la promesa esPar
      console.log("Promesa es par? " + resultadoEsPar);
    })
    .catch( mensaje => console.log("Rechazado: " + mensaje) ); 
    */

    
    
    //Existe otra forma de consumir promesas: async-await
    //Para usar await, la función debe ser asíncrona (async)
    //Si se ejecuta el reject, aparece mensaje. No se maneja el error
    //console.log("Await. El resultado suma: " + await suma(9, 6));

    //Para manera el error con await, podemos usar los bloques try-catch
    try {
      console.log("Try El resultado suma: " + await suma(-6, 3));
      console.log("Keda. Chascapizza yommi");
    }
    catch (error) {
      console.log("Se generó un error por: " + error);
    }

    //El await detiene el código hasta que se cumpla la promesa.

    //Pasa lo mismo con try - catch ^^^^^^^
    //Sólo cumplida la promesa, avanza    
    console.log("El resultado de la resta es: " + resta(5,3));
}