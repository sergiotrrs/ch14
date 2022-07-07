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
        apellido:formulario.elements['apellido'].value
        //expiracion: tiempo_en_milisegundos; //1 minutos de tiempo de expiración
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

//************************************************************** */

function imprimir(dato){
  console.log("El dato es :"+dato);
}

function imprimirHTML(dato){
  //console.log("El dato es :"+dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = "El dato es :"+dato;
  
}

function suma(a , b, fncMostrar ){
  let suma = a +b;
  fncMostrar(suma);
}
//suma(3, 5, imprimir);
//suma(2, 8, imprimirHTML);
//*************************Función setTimeout*************************
function funcionCallBack(){
  console.log("2.- Se activa la función CallBack")
  return "dato cualquiera"
}

//console.log("1.- Antes de setTimeout");
//setTimeout(  funcionCallBack , 3000 ) // setTimeout( Nombre_función , ms a contar )
//setTimeout( function (){ console.log("2.1.-Se activa mi función anónima ")  } , 3000 );
//setTimeout (()=> console.log("2.2.- Se activa la función flecha") , 3000  );
//console.log("3.- Después de setTimeout");

//***************************Promesas********************************* */
miPromesa();
function miPromesa(){
  const promesa = new Promise( (resolve, reject ) => {
    const expresion = false;
    if (expresion){
      resolve ("La promesa se resolvió, la abejita trae polen");
    }
    else{
      reject ("La promesa NO se resolvió, la abejita no trajo polen");
    }

   });

   //Vamos a consumir la promesa con .then y .chatch
   //promesa.then( ).catch( );
   promesa
    .then( (valueResolve) => console.log(valueResolve) )
    .catch( (valueReject) => console.log(valueReject) );
}
