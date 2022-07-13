console.log("hola");
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

/**** */
function guardarDatos(){
  const formulario =document.getElementById('formulario');
  console.log("nombre" + formulario.elements['nombre'].id)
  console.log("nombre" + formulario.elements['apellido'].value)
  //se le indica una clave y un valor
  localStorage.setItem("cohorte","Ch14");
  //localStorage.setItem("nombre", formulario.elements['nombre'].value);
  //localStorage.setItem("apellido", formulario.elements['apellido'].value);
  localStorage.setItem("datos", JSON.stringify(
  {
  nombre: formulario.elements['nombre'].value,
  apellido: formulario.elements['apellido'].value
  //expiracion: tiempo_en_milisegundos; 1 minuto de tiempo de expiracion.
  //7Tiempo actual +1 min. get days
  })
  );
}

function recuperarDatos(){
  const formulario =document.getElementById('formulario');
  //formulario.elements['nombre'].value =localStorage.getItem("nombre");
  //formulario.elements['apellido'].value=localStorage.getItem("apellido");
  //Convertir a jaiso
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log(`Datos de usuario: ${datos['nombre']} ${datos.apellido}`)
  formulario.elements['nombre'].value =datos.nombre;
  formulario.elements['apellido'].value=datos.apellido;
}

/********************************* */
function imprimir(dato){
console.log("el dato es" + dato);
}

function imprimirHTML(dato){
  //console.log("el dato es" + dato);
let demo= document.getElementById("demo");
demo.innerHTML=dato;  
}

function suma(a, b, fncMostrar){
  let suma = a+ b;
  fncMostrar(suma);
}

// suma (3,5,imprimir)
// suma (2,8,imprimirHTML)

///*************Funcion set timeoit */
function funcionCallBack(){
  console.log("2.-se activa la funcion callBack");
}
//funcion que la encuentre un tiempo determinado para que me dispare una funcion
// console.log("1.- antes de set timeout");
//setTimeout(funcionCallBack , 3000)//(Nombre_funcion, ms acontar) Funcion si parentesis
//setTimeout(function(){console.log("2.1.- se activa mi funcion anonima")   },3000  );
// //con funcion fecha:
// setTimeout(() => {console.log("2.2 se activa la funcion fleca")  
// }, 3000);
// console.log("3.-despues de set timeout");
/****************************PROMESAS****************************** */
//miPromesa();
function miPromesa(){
  const promesa = new Promise( ( resolve , reject ) => {
    const expresion = false;
    if(expresion){
      resolve ("La promesa se resolvio, la abejita trae polen");
    }
    else {
      reject ("la promesa no se resolvio, la abejita no trajo polen");
    }
  });
  //Vamos a consumir la promesa con .then(resolve) y .catch
  //promesa.then().catch();
  promesa
  .then( (valueResolve) => console.log(valueResolve) )// aqui va el ., hasta el catch
  .catch( (valueReject) =>console.log (valueReject) );
}

/*************Promesas, async-await, try - Catch */
calculos();
async function calculos(){
  // const suma = (a,b) => a+b;
  // console.log("El resultado de la suma es " + suma(1,2));
  
  const resta = (a,b) => a-b;
  
  /**
   *   //haciendo promesa a la suma: Mi funcion va a sumar, siempre que a y b sea positivo  *
   * Se retorna el resultado positivo
   * Si el resulatdo es negativo, se enviara un mensaje de error
   */
  const suma=(a , b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
      //if(a>0 && b>0) resolve(a+b);
      if(a>0 && b>0) setTimeout( ()=>resolve(a+b),3000 );
      
      else reject("Solo se puede sumar numeros positivos");      
    })
    return operacionSuma;
  }

  const esPar =(numero)=>{
    //return (numero%2==0 ? true : false);
    //const operacionEsPar =new Promise((resolve, reject) => {
      // en vez de declarar una variabl se pone un return 
    return new Promise((resolve, reject) => {
      if(numero%2==0) resolve (true);
      else reject("El numero no es par")
    })
    
  }
  
  suma(5,6)
  .then(resultado => {
    console.log("Promesa suma"+resultado);
    //console.log("es par?" + esPar(resultado));
    // al mandar dos promesas
    return esPar(resultado);
  })
.then(resultadoEsPar =>{ //Este .then, consume la promesa de es Par Resulatdo;
  console.log('Promesa es par?'+resultadoEsPar);
})

  .catch(error => console.log("Rechazado" + error));
  
  //existe otra forma de consumir las primeras, usando async - await
  //Para usar await, mi funcion debe de ser async async function calculos(){
    //await es para esperar hasta que se cumpla la promesa
    //console.log ("Await el resultado suma" + await suma (-9,6));
    //Para manejar el error con awairt , podemos usar los bloques try-catch
try{
console.log("Try el resultado suma" + await suma(6,3));
console.log("Se termino el asunto)");
}
catch(error){
  console.log("se genero un error por" + error);
}

    
    console.log("El resultado de la resta es " + resta(-10,3));
}

