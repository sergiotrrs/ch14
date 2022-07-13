console.log("");
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
  console.log("Nombre: " + formulario.elements['nombre'].value);
  console.log("Apellido: " + formulario.elements['apellido'].value);
  //se le indica una clave y un valor
  localStorage.setItem('Cohorte', 'ch14');
  // localStorage.setItem('nombre', formulario.elements['nombre'].value);
  //localStorage.setItem('apellido', formulario.elements['apellido'].value); 
  localStorage.setItem('datos',JSON.stringify(
    {
      nombre: formulario.elements['nombre'].value,
      apellido: formulario.elements['apellido'].value
      //tiempo de expiracion: tiempo_en _milisegundos; //1 minutos de tiempo de expiracion
      
    })
  );
}
function recuperarDatos() {
  const formulario = document.getElementById("formulario");
  // formulario.elements['nombre'].value =
    //localStorage.getItem('nombre');
  //formulario.elements['apellido'].value =
    //localStorage.getItem('apellido'); 
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log(`Datos usuario:${datos.nombre}${datos.apellido}`);
  formulario.elements['nombre'].value =
    datos.nombre;
  formulario.elements['apellido'].value =
    datos.apellido;
}


/* function recuperarDatos(){
  const formulario = document.getElementById('formulario');
 // formulario.elements['nombre'].value = localStorage.getItem("nombre");
 // formulario.elements['apellido'].value = localStorage.getItem("apellido");
  let datos = JSON.parse( localStorage.getItem("datos") );
  console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
  formulario.elements['nombre'].value = datos.nombre;
  formulario.elements['apellido'].value = datos.apellido ;
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
   })
  );
}
 */
/////////////////////////////////////
// funcion set timeout
function funcionCallBack(){
  console.log("se activa la funcion callback");
  return 'dato cualquiera'
}
//console.log("antes la funcion callback");
/* setTimeout( //parametros(nombre funcion , ms a contar)
   funcionCallBack , 3000
) */
//setTimeout(function (){console.log('2.1 ')},3000);
//setTimeout(() => console.log('2.2 '), 3500);
//console.log("despues la funcion callback");
//////////////promesas/////////////
//miPromesa();
function miPromesa(){
  const promesa = new Promise((resolve , reject) =>{
    const expresion = false;
    if(expresion){
      resolve ('la promesa se resolvio, la abejita trae polen');
    }
    else{
      reject("la promesa no se resolvio, la abejita no trae polen");
    }
  });
  // vamos aa consumir la promesa cib .then .catch
  //promesa.then().catch()
  promesa
  .then((valueResove)=>console.log(valueResove))
  .catch((valueReject)=>console.log(valueReject));

}
calculos();
async function calculos(){
  //const suma = (a , b) => a+b;
  //console.log("El resultado de la suma es :" +suma(1,2));
  const resta = (a , b) => a-b;
  //funcion va a sumar siempre que el resultado sea positivo
  //se retorna el resultado positivo
  //si el resultado es negativo, se envia un mensaje
  const suma = (a, b )=>{
    const operacinSuma = new Promise((resolve, reject) => {
      //if (a>0 && b>0 )resolve (a + b);
      if (a>0 && b>0) setTimeout(() =>resolve(a+b), 3000);
      else reject("Solo se puede sumar numeros positivos");
    });
    return operacinSuma
    /* operacinSuma
    .then((vRes) =>console.log(`suma${vRes}`))
    .catch((vRej) =>console.log(vRej)); */
  }
 /**
  * se determinara si el numero ingresado es par
  * si es par se retornara true
  * si no es par, se retornara un mensaje del error
  * @param {*} a 
  */
  const esPar = (a) =>{
    //return (a%2 ? false : true);
    return new Promise((resolve, reject)=>{
      if(a%2 ==0) /* resolve(true) */ setTimeout(() =>resolve(true), 3000);
      else reject ("el numero no es par");
    });
  }


  suma(4, 3)
  .then(res => {
    console.log('suma :'+ res);
    //console.log('Es par? :'+ esPar(res));
    return esPar(res);
  })
  .then(respar=>{ // Este .then,consume la promesa es pas(res)
    console.log("promesa es par?" +respar);
  })
  .catch(error => console.log('rechazado por :'+ error));
  //console.log(suma(3,-4));
  
  //Existe otra forma de consumir las promesas, usansdo  async  y await
  //para usar await, mi funcion debe ser asincrona(async)
  //si se ejecuta el reject, me aparece el resultado (mensaje)
  console.log("await el resultado suma "+ await suma(9,6));
  //para manejar el error con await, podemos usar los bloques try-catch
  try{
    console.log("try el resultsdo suma:"+ await suma(-6,3));
    console.log("se termino este asunto, vamos por elotes")
  }
  catch(error){
    console.log(" catch se genero un error por: " + error);
  }
  console.log("El resultado de la resta es :" +resta(1,2));
}

