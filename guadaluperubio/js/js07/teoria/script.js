console.log("teoria sesión js07");


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

function guardarDatos(){
    const formulario = document.getElementById('formulario');
    console.log("nombre: " + formulario.elements['nombre'].id);
    console.log("apellido: " + formulario.elements['apellido'].value);
    //e le indica una clave y un valor (setItem es para guardar datos )
    localStorage.setItem("cochorte", "ch14");                      
    // localStorage.setItem("nombre", formulario.elements['nombre'].value);
    // localStorage.setItem("apellido", formulario.elements['apellido'].value);
    // // // localStorage.setItem("datosUsuario",
    localStorage.setItem("datos", JSON.stringify(   // 06-07-22
    {
        "nombre": formulario.elements['nombre'].value,
        "apellido" : formulario.elements['apellido'].value 

        //expiracion: tiempo mili-segundos//1 minito de tiempo de expiración
    })
    )
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');                   //getItem manda a llamar esos datos guardados.
    // formulario.elements['nombre'].value = localStorage.getItem("nombre");
    // formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = JSON.parse( localStorage.getItem("datos"));                 //06-07-22
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`);
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
}

/***********************************************  checar esta parte, no me quedo****************************************************************************************************** */


// function imprimir(dato){
//   console.log("El dato es: " +dato);

// }

// function imprimirHTML(dato){
//   let demo = document.getElementById("demo");
//   demo.innerHTML= "El dato es :"+dato;
// }

// function suma(a, b , fncMostrar){
//   let suma = a + b;
//   fncMostrar(suma);
// }

// suma (3 , 5, imprimir);
// suma (2,8, imprimirHTML);

/*****************TERMINA EJEMPLO DE COMO PODEMOS HACER NUESTRA PROPIA FUNCION :( NO ENTENDI****************************************************************************** */
/******************************funcion setTimeout************************ */

function funcionCallBack(){
  console.log("2. se activa la funcion CallBack");
  return "dato caulquiera"
}


// console.log("1.- antes del setTimeout");
// // setTimeout(funcionCallBack , 3000 ); //  setTimeout(nombre de la funcion, miliseg a contar)
// // setInterval(function() { console.log ("2.1.- se activa mi funcion anonima")}, 3000);

// //haremos lo mismo pero con funcion flecha
// setTimeout( ()=> console.log("2.2.- Activa la funcion flecha"), 3000); 
// console.log("3.- Después del setTimeout");

/*********************************termina otro ejemplo */

/*********************P R O M E S A S **************************************** */
// miPromesa();
function miPromesa(){
  const promesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
      resolve ("La promesa se resolvió, la abejita trae polen");
    }
    else{
      reject("la promesa no se resolvio, la abejita no trae polen");
    }

  });

    // vamos a consumir la promesa con . then y .catch ( consumir se refiere a que cuando este lista se lee la promesa, no ejecuta en ese momento)
  // promesa.then( ).catch( );
  promesa
    .then( (valueResolve) => console.log(valueResolve))  //estamos utilizando funcion flecha
    .catch( (valueReject) => console.log(valueReject));

}

/***************************TERMINA PROMESA***************************************************************** */

/****************************PROMESAS, ASYNC-AWAIT, TRY-CATCH***************************************** */
calculos();
async function calculos(){
  //  const suma = (a , b) => a + b;
  //  console.log("la suma es " +suma(1,2));

    const resta = (a , b) => a - b;
  //  console.log("la resta es " +resta(4 ,3));


/**
 * mi funcion va a sumar siempre que a y b sen positivos
 * se retorna el resultado positivo
 * si el resultado es negativo, se enviara un mensaje
 * */

   const suma = (a , b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
      // if(a>0 && b>0) resolve (a+b);

      if (a>0 && b>0 )setTimeout(() => {resolve (a+b)}, 3000);
      
      else reject("solo se puede sumar numeros positivos");
    })
    return operacionSuma;
   }


/**
 * se dertminara si el numero ingresado es par
 * si es par se retornara un true
 * si no es par, se retornra un mensaje de error
 */
   const esPar = (numero) => {
    // return (a%2==0 ? true:false);
   return new Promise((resolve, reject) => {
    if (numero%2 == 0)  setTimeout(() => resolve(true), 3000);  
    else reject ("el numero no es par");

   });
    
  }

  

  //  suma(5, 6)
  //  .then( resultado => {

  //   console.log("promesa suma: " +resultado);
  //   // console.log("Es par?: " +esPar(resultado));
  //   return esPar(resultado);
  // })
  //  .then(resultadoEsPar => {   //este .then consume la promes de esPar(resultado) de la linea 162
  //    console.log("promesa es par? " +resultadoEsPar);
  //  })
  //  .catch( error => console.log ("rechazado por " +error));    //plantilla basica para consumir mi promesa desde 135 hasta 137 ( se puede tener mas de un then, mas de un catch no es necesario)

  //  console.log("el resultado es " +resta( 4, 3));

   //existe otra forma de consumir la promesa
   //para usar await, mi funcion debe ser async
   //si se ejecuta el rejec, me aprece el resultado(mensaje), nose maneja el error.
  //  console.log ("await el reultados suma es " +await suma(9, 6));

   //para manejar el error con await, podemos usar los bloques de try-catch
   try {
      console.log("try el resultado suma: " +await suma(-6,3));
      console.log("Se termino este asunto, vamos por elotes")
   } catch (error) {
    console.log("Se genero un error por: " +error)
   }
}
