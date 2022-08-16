console.log("Sesión JS07");

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
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte",14);
    //localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
     {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value
        //expiración: tiempo_en_milisegundos; //1 minutos de tiempo de expiración
     })
    );
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    //formulario.elements['nombre'].value =localStorage.getItem("nombre");
    //formulario.elements['apellido'].value =localStorage.getItem("apellido");
    let datos = JSON.parse(localStorage.getItem("datos") );
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value=datos.nombre;
    formulario.elements['apellido'].value=datos.apellido;
}

// *********************************************************************************

function imprimir(dato){
  console.log("El dato es: " + dato);
}

function imprimirHTML(dato){
  //console.log("El dato es: " + dato);
  let demo =document.getElementById("demo");
  demo.innerHTML = "El dato es: " + dato;
}

function suma (a , b , fncMostrar ){
  let suma = a + b;
  fncMostrar(suma);
}

//suma(3, 5, imprimir);
//suma(2, 8, imprimirHTML);
// *****************************************************************
function funcionCallBack(){
  console.log("2.- Se activa la función CallBack")
  return "dato cualquiera"
}

//console.log("1.- Antes de setTimeout");
//setTimeout( funcionCallBack , 3000 ) //setTimeout( Nombre_funcion , ms a contar )
//setTimeout( function (){ console.log("2.1.- Se activa mi función anónima ") } , 3000 );
//setTimeout (()=>console.log("2.2.- Se activa la función flecha") , 3000 );
//console.log("3.- Después de setTimeout");

// ******************** Promesas ********************** //actúa hasta que la promesa se cumpla
//miPromesa();
function miPromesa(){
  let promesa = new Promise( (resolve, reject ) => { //El nombre no importa
    const expresion = false;
    if (expresion){
      resolve ("La promesa se reolvió, la abejita trae polen");
    }
    else{
      reject ("La promesa no se resolvió, la abejita no trejo polen");
    }

   });

   //Vamos a consumir (leer) la promesa con .then -entonces- y .catch -en caso de rechazo-
   //promesa.then( ).catch( ); (son palabras reservadas)
   let respuesta;
   promesa
    .then( (valueResolve) => {
    respuesta =valueResolve;
    console.log(valueResolve) 
  })
    .catch( (valueReject) => console.log(valueReject) ); //Se usa ; al final de .catch
}

//**********************Promesas, Async-Await, try-Catch************************* */
calculos();
async function calculos(){
  //const suma = (a , b) => { return (a + b)}; //Puede no llevar return por que solo se le indica una acción.
  //console.log("El resultado de la suma es: " + suma(1,2));
  const resta = (a , b) => a - b;
  
  /** 
   * Mi función va a suma, siempre que a y b sean positivos
   * Se retorna el resultado positivo.
   * Si el resultado es negativo, se enviará un mensaje 
   */
  const suma = (a , b) => {
    const operacionSuma = new Promise((resolve, reject) => { //No son reservadas pueden ponerse otro nombre
      //if(a>0 && b>0) resolve (a+b);
      if (a>0 && b>0) setTimeout( () => resolve (a+b), 3000);
      else reject("Solo se pueden sumar números positivos");
    })
    return operacionSuma;
    } 

    /**
    * Se determinará si el número ingresado es par
    * Si es par se retornará true
    * Si no es par, se retorna un mensaje del error.
    */
  const esPar = (numero) => {
  //return (numero%2==0 ? true : false);
  return new Promise((resolve, reject) => {
    if ( numero%2 == 0 ) resolve(true);
    else reject ("El número no es par");
    });    
  }

  //suma(5, 6)
  //.then( resultado => {
      //console.log("Promesa Suma:" + resultado);
      //console.log("Es par?: "+ esPar(resultado));
      //return esPar(resultado);
  //} )
  //.then( resultadoEsPar =>{   //Este .then consume la promesa de esPar(resultado);
    //console.log("Promesa es par? " + resultadoEsPar);
  //}  )
  //.catch( error => console.log("Rechazado por: " + error))

  
  //Existe otra forma de consumir las promesas, usando async-await.
  //Para usar await, mi función debe ser async (103).
  //Si se ejecuta el reject, me aparece el resultado(mensaje), no se maneja (controla) el error.
  //console.log("Await El resultado de la suma: " + await suma(9,6));

  //Para manejar el error con await, podemos usar los bloques try-catch.
  try{
    console.log("Try El resultado suma: " + await suma (-6,3));
    console.log("Se terminó este asunto, vamos por un elote.");
  }
  catch(error){
    console.log("Se generó un error por: " + error);
  }

  console.log("El resultado de la resta es: " + resta(10,3));
}