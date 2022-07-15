console.log("Sesión JS07")

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
    console.log("nombre: " + formulario.elements['nombre'].value);
    console.log("apellido: " + formulario.elements['apellido'].value);
    //Se le indica un clave y un valor
    localStorage.setItem("Cohorte","CH14");
    // localStorage.setItem("nombre",formulario.elements['nombre'].value);
    // localStorage.setItem("apellido",formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(

    {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value,
        tiempo: date()//Expiracion: tiempo_en_milsegundos;
    })
    )
  }

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    // formulario.elements['nombre'].value = localStorage,getItem("nombre");
    // formulario.elements['apellido'].value = localStorage,getItem("apellido");
    let datos = JSON.parse(localStorage.getItem("datos"));
    console.log(`Datos usuarios: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
}

//*********************************************************** */


// funcionCallBack()



function funcionCallBack(){
  console.log("2.-Se activa la función CallBack");
}
// console.log("1.- Antes de setTimeout");
// setTimeout( funcionCallBack, 3000) 
// // setTimeout( Nombre-funcion , ms a contar )
// setTimeout(function(){ console.log("2.1- Se activa mi funcion anonima ") } , 3000)
// setTimeout(()=>console.log("2.2.- Se activa la función flecha"), 3000)
// console.log("3.- Despues de setTimeout");

//***********************PROMESAS******************** */
// miPromesa();
function miPromesa(){
  const promesa = new Promise( (resolve, reject) => {
    const expresion = false ;
    if (expresion){
      resolve ("La promesa se resolvió, la abejita trae polen")
    }
    else{
      reject ( "La promesa NO se resolvío, la abejita no trajo polen");
    }

  });

  //Vamos a consunir la promesa con .then y .catch
  //promesa.then().catch();
  promesa
  .then( (valueResolve) => console.log(valueResolve))
  .catch( (valueReject) => console.log(valueReject));

}

// ********************************************Promesas, Async-Await, try-catch**************/
calculos();
async function calculos(){
// const suma = (a,b) => a+b;
// console.log("El resultado de la suma es: " + suma(1,2));
const resta = (a,b) => a-b;

/**
 * Mi funcion va a sumar siempre que a y b sean positivo
 * Se retorna el resultado positivo
 * Si el resultado es negativo, se enviará un mensaje de error
 */
const suma = (a,b) => { 
  const operacionSuma = new Promise((resolve, reject) => {
    // if(a>0 && b>0) resolve(a+b);
    if (a>0 && b>0) setTimeout(()=> resolve(a+b), 3000);
    else reject("Solo se puede sumar números positivos");
  })
  return operacionSuma;
}

/**
 * Se determinara si el número ingresado es par 
 * Si es par retornará true
 * Si no es par, se retorna un mensaje del error
 */
const esPar =  (numero) => {
  // return a%2==0 ? true : false;
  return new Promise((resolve, reject) => {
    if(numero%2==0) setTimeout(()=> resolve(true), 3000);
    else reject("El número no es par");
  })
}

suma(5,5)
.then( resultado=> {
  console.log("Promesa suma: " +resultado)
  // console.log("Es par?: " + esPar(resultado))
  return esPar(resultado)
})
.then(resultadoEsPar =>{ //Este .then consume la promesa de esPar(resultado)
  console.log("Promesa es par? " +resultadoEsPar);
})
.catch(error => console.log("Rechazado por: " +error));


//Existe otra forma de consumir las promesas, usando async-await
//Para usar await, mi function debe ser async
//Si se ejectua el reject me aparece el resultado(mensaje) No se maneja el error.
console.log("Await El resultado de suma: " + await suma(9,6));

//Para manejar el error con await, podemos usar los bloque try-catch
try {
  console.log("Try El resultado suma: " + await suma (6,3));
  console.log("Se termino este sasunto vamos por elotes");
} catch (error) {
  console.log("Se generó un error por: " + error);
}

console.log("El resultado de la resta es: " + resta(4,3));
}