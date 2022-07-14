console.log("Sesion JS07")

var x = document.getElementById("demo");

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
    const formulario = document.getElementById("formulario")
    console.log("nombre: " + formulario.elements['nombre'].id)
    console.log("apellido: " + formulario.elements['apellido'].id)
    //S le indica una clave y un valor
    localStorage.setItem("Cohorte", "CH14")
  /*   localStorage.setItem("nombre: " + formulario.elements['nombre'].value)
    localStorage.setItem("apellido: " + formulario.elements['apellido'].value) */
    localStorage.setItem("datos", JSON.stringify(
    {
        "nombre": formulario.elements['nombre'].value,
        "apellido": formulario.elements['apellido'].value
        //expiracion: tiempo_en_milisegundos// -
    })
    );
}

function recuperarDatos(){
    const formulario = document.getElementById("formulario")
/*     formulario.elements['nombre'].value = localStorage.getItem("nombre")
    formulario.elements['apellido'].value = localStorage.getItem("apellido") */
    let datos =JSON.parse( localStorage.getItem("datos") );
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
}
//************************************************************************************ */

function imprimir (dato){
  console.log("")
}

function imprimirHTML (dato){
  //console.log(dato)
  let demo = document.getElementById("demo")
  demo.innerHTML= dato
}
function suma (a,b, fncMostrar){
  let suma = a+b;
  fncMostrar(suma);
}
/* suma (3,5, imprimir)
suma (3,12, imprimirHTML) */

function funcionCallBack(){
  console.log("2.-Se activa la funcion CallBack")
  return "Dato cualquiera"
}

/*funcionCallBack ();
console.log("1.-Antes del setTimeout")
//setTimeout( funcionCallBack ,3000) //setTimeout (nombre_funcion, ms a contar)
//setTimeout( funcion () {console.log("2.1,- Se activa mi funcion aninima") } , 3000);
setTimeout(()=>console.log ("2.2.- Se activa la funcion flecha"), 3000 )
console.log("3.- Despues del setTimeout");*/
///*******************************PROMESA****************************************/
/* 
  //function miPromesa(){
    let promesa= new Promise((resolve, reject)=> {
      const expresion= false;
      if (expresion){
        resolve ("La promesa se resolvio, la abekita trae polen")
      }
      else{
        reject("La promesa no se resolvio, la abejita no trae polen")
      }
    }); 
  //Vamos a consumir la promesa con .then y .catch
  //promesa.then() catch( ); 
  promesa
  let respuesta;
.then( (valueResolve) =>{
  respuesta=valueResolve;
 console.log(valueResolve)}
 )
.catch( (valueReject) => console.log(valueReject) );
//  }

  //****************************Promesas, Async-await, try-catch************************************ */
/*  calculos()
function calculos(){
  //const suma = (a,b) => a+b;
  //console.log.apply("El resultado de la suma es :" +suma(1,2));
  const resta = (a,b) => a-b;
  console.log.apply("El resultado de la suma es :" +resta(4,3)); */
  /**qu
   * Mifuncion va a sumar, siempre a y b sean positivos
   * se retorna el resultado positivo.
   * Si el resultado es negativo,, se enviara un mensaje del error
   */


  const suma = (a,b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
     // if (a>0 && b>0) resolve (a+b);
     if ( a>0 && b>0) setTimeout(()=> resolve(a+b), 3000)
      else reject ("Solo se puede sumar numeros positivos");
     })
     return operacionSuma;
  }
/**
 * Se determinara si un numero ingresado es par
 * Si es par se retornara true
 * Si no es par, se retorna un mensaje del error
 */
const esPar= (a) => {
  return (a%2 ? true:false) ;
}
  suma(5,6)
  .then( resultado => { resultadoEsPar => { // Este .thrn, consume la promesa esPar (resultado)
  }
    console.log("Promesa Suma: "+ resultado);
    console.log("Es par?:v" +esPar(resultado));
  })
 
  .catch(error => console.log("Rechazado por : "+ error))


//Existe otra forma de consumir las promesas, usando async-await
//para usr await, mi funcion debe ser async
//Si se ejecuta el reject, me aparece el resultado(mensaje, no se maneja el error
console.log("Await El resultado de la suma: " await suma(9,6));
//Para manejar el error con wait, podemos usar los bloquees try-catch
try(
  console.log("try es el resultado suma:  " await suma(6,3));
  console.log("Se termino este asunto, vamos por elotes")
)
catch (error){
  console.log("Se genero un error por: "+error)
}
console.log("El resultado de la resta es: " resta(10,3))



