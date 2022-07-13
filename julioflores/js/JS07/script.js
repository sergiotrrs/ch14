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
  const formulario = document.getElementById('formulario');
  console.log("nombre: " + formulario.elements['nombre'].id);
  console.log("apellido: " + formulario.elements['apellido'].value);
  //Se le indica una clave y un valor
  localStorage.setItem("Cohorte",14);
  //localStorage.setItem("nombre", formulario.elements['nombre'].value);
  //localStorage.setItem("apellido", formulario.elements['apellido'].value);
  localStorage.setItem("datos", JSON.stringify(
   {
      nombre: formulario.elements['nombre'].value,
      apellido:formulario.elements['apellido'].value
      //expiración tiemo en milisegundos
   })
  );
}


function recuperarDatos(){
  const formulario = document.getElementById('formulario');
 // formulario.elements['nombre'].value = localStorage.getItem("nombre");
 // formulario.elements['apellido'].value = localStorage.getItem("apellido");
  let datos = JSON.parse( localStorage.getItem("datos") );
  console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
  formulario.elements['nombre'].value = datos.nombre;
  formulario.elements['apellido'].value = datos.apellido ;
}

function funcionCallBack(){
  console.log("2. Se activa la función CallBack")
}

//console.log("1. Antes del setTimeout");
//setTimeout( funcionCallBack , 3000) //setTimeout(nombre_función, ms a contar) /Si no le pongo parentesis después de la función no me la lleva a llamar inmediatamente

//setTimeout(()=>console.log("2.2 Se activa la función flecha") , 3000);
//console.log("3. Después del setTimeout");

//miPromesa();
function miPromesa(){
    let promesa = new Promise( (resolve, reject) => {
      const expresion = true;
      if (expresion){
        resolve ("La promesa se resolvió, la abejita trae polen") //Con promesa no se usa return sino resolve
      }
      else{
        reject ("La promesa NO se resolvió, la abejita no trajo polen");
      }
    });
    //Vamos a consumir la promesa
    promesa
    .then( (valueResolve) => console.log(valueResolve) )
    .catch((valueReject) => console.log(valueReject)); //nos entrega el resultado de la promesa
}

calculos();
async function calculos (){
  //const suma = (a, b) => a + b;
  //console.log("El resultado de la suma es: " + suma(1,2));
  const resta = (a, b) => a - b;
  console.log("El resultado de la resta es: " + resta(4,3));

  //Mi función va a sumar siempre que a y b sean positivos
  //Se retorna el resultado positivo
  //Si el resultado es negativo, se enviaráun mensaje
  const suma = (a,b) => {
    const operacionSuma = new Promise((resolve, reject) => {
    //if (a>0 && b>0) resolve (a+b);
    if (a>0 && b>0) setTimeout ( ()=> resolve(a+b), 3000);
      else reject("Sólo se puede sumar números positivos");
    })
    return operacionSuma;
  }

/**
 * Se determinará si el número ingresado es par
 * Si es par se retornará true
 * Si no es par se retornará error
 */
const esPar = (numero) => {
  //return (a%2==0 ? true:false);
  return new Promise((resolve, reject) => {
    if (numero%2==0) setTimeout(()=>resolve (true),3000);
    else reject ("El número no es par");
  })
}
/*
  suma(5,5)
  .then(resultado=> {console.log("Promesa Suma: " + resultado)
  //console.log("esPar? " + esPar(resultado)); 
  return esPar(resultado);
})
.then (resultadoEsPar =>{
  console.log("Promesa es par? " + resultadoEsPar);
})
  .catch(error => console.log("Rechazado por: " + error));
*/
  
  //Existe otra forma de consumr las promesas, usando async-await
  //Para usar await, mi función debe ser async
  //Si se ejecuta el reject, me aparece el resultado (mensaje), NO se maneja el error (no tenemos control)
  //console.log("Await El resultado suma: "+ await suma(6,3));
  //console.log ("Resta es: " + resta(9,6));

  //Para manejar el error con await, podemos usar los bloques try-catch
  try{
    console.log("Try El resultado suma: " + await(-6,3));
    console.log("Se terminó este asunto, vamos por elotes");
  }
  catch (error){
    console.log("Segeneró un error por: " + error);
  }
  console.log("El resultado de la resta es: " + resta(9,2));
}



/*
function imprimir(dato){
  console.log("El dato es " + dato);
}

function imprimirHTML(dato){
  //console.log("El dato es" + dato)
  let demo = document.getElementById("demo");
  demo.innerHTML =dato;
}

function suma(a, b, fcnImprimir){
  let suma = a+b;
  fcnImprimir (suma);
} 

suma(3,5, imprimir);
suma(2,8, imprimirHTML);
*/