console.log("sesion JS07");

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
    //se le indica una clave y un valor
    localStorage.setItem("Cohorte" , "ch14");
    //localStorage.setItem("nombre" , formulario.elements['nombre'].value);
    //localStorage.setItem("apellido" , formulario.elements['apellido'].value);
    localStorage.setItem("datos" , JSON.stringify( 
    {
        nombre:formulario.elements['nombre'].value,
        apellido:formulario.elements['apellido'].value,
        //expiracion: tiempo en milisegundos; 1 min tiempo de expiracion (tarea)
    })
    );

}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    //formulario.elements['nombre'].value= localStorage.getItem("nombre");
    //formulario.elements['apellido'].value= localStorage.getItem("apellido");
    let datos = JSON.parse(localStorage.getItem("datos"));
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value= datos.nombre;
    formulario.elements['apellido'].value= datos.apellido;
}

//******************************************************************** */

function imprimir(dato){//imprime en consola
  console.log("El dato es: " + dato);
}

function imprimirHTML(dato){//imprime en html
  //console.log("El dato es: " + dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = "El dato es : "+dato;
}

function suma(a , b , fncMostrar){
  let suma=a+b;
  fncMostrar(suma);
}

//suma(3 , 5 , imprimir);
//suma(2 , 8 , imprimirHTML);
//Funcion setTimeout******************************************************************/
function funcionCallBack(){
  console.log("2.-Se activa la funcion CallBack")
}

//console.log("1.-antes de setTimeout");
//setTimeout(funcionCallBack , 3000 )//setTimeout(Nombre de la funcion sin (), los milisigundos a contar)
//setTimeout(function(){console.log("2.1.-Se activa mi funcion anonima ")} , 3000 ); //lo mismo pero con una funcion anonima y no con una definida como la anterior
//setTimeout (()=>console.log("2.2.- Se activa la funcion flecha") , 3000 );//puede o no llevar las llaves , las llaves es si lleva mas de una instruccion
//console.log("3.-Despues del setTimeout");

//Promesas  ********************************************* */
//promesas no sirve para que el cod actue cuando le retornen algo
miPromesa();
function miPromesa(){
  let promesa = new Promise((resolve , reject) => {
  const expresion = true;//si aqui cambiara a false se imprimiria la linea 94 "La abejita no trae polen"
  if(expresion){
    resolve("La promesa se resolvio , la abejita trae polen");
  }
  else{
    reject("La promesa No se resolvio , la abejita no trae polen");
  }

 });

 //Vamos a consultar la primesa con .them(cuando resuelve la promesa se ejecuta ) y .catch(cuando no se resuelve)
 // promesa.then() .catch()
 promesa
 .then( (valueResolve) => console.log(valueResolve) )
 .catch( (valueReject) => console.log(valueReject));
}

function borrarAlmacen(){
  setTimeout(()=> {
    localStorage.clear();
    console.log("Paso el tiempo de espera se borran datos de almacen");
  },3000);
}