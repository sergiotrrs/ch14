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
  return "dato cualquiera"
}

//console.log("1.-antes de setTimeout");
//setTimeout(funcionCallBack , 3000 )//setTimeout(Nombre de la funcion sin (), los milisigundos a contar)
//setTimeout(function(){console.log("2.1.-Se activa mi funcion anonima ")} , 3000 ); //lo mismo pero con una funcion anonima y no con una definida como la anterior
//setTimeout (()=>console.log("2.2.- Se activa la funcion flecha") , 3000 );//puede o no llevar las llaves , las llaves es si lleva mas de una instruccion
//console.log("3.-Despues del setTimeout");

//Promesas  ********************************************* */
//promesas no sirve para que el cod actue cuando le retornen algo
//miPromesa(); se comento para usar la funcion calculo
function miPromesa(){
  let promesa = new Promise((resolve , reject) => {//new promise para hacer nueva promesa
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

/*Posiblre borrador de datos
function borrarAlmacen(){
  setTimeout(()=> {
    localStorage.clear();//esta funcion borra los datos en memoria
    console.log("Paso el tiempo de espera se borran datos de almacen");
  },3000);

}
*/

//Promesas , Async-Await , try-catch****************************************************************************************** */
calculos()//invoca la funcion 
async function calculos(){
  //const suma = (a,b)=> a + b;
  //console.log("El resultado de la sumas es: " + suma(1,2));
  const resta = (a,b)=> a - b;
  console.log("El resultado de la resta es: " + resta(4,3));

  //Mi funcion sumara siempre que a y b sean positivos , retorna resultado positivo, si es negativo se enviara mensaje
  const suma =  (a,b) =>{
    const operacionSuma= new Promise((resolve, reject) => {
      //if(a>0 && b>0) resolve (a+b);
      if(a>0 && b>0) setTimeout( ()=> resolve (a+b) , 3000);//igual que el if comentado pero con setTimeOut
      else reject("Solo se puede sumar numeros positivos");
    })
    return operacionSuma;
  }
   
  /**
   * Se determina si el numero ingresado es par
   * si es par se retorna true
   * si no es par , se retorna un mensaje del error
   */
   
  const esPar = (numero) =>{
    //return (numero%2==0 ? true : false)
      return new Promise((resolve ,reject)=>{
      if(numero%2 == 0) setTimeout( ()=> resolve (true),3000)
      else reject ("El numero no es par");
    });
    
  }

  suma(5,6)
  .then(resultado => {
    console.log("Promesa Suma: " + resultado);//el resolve 
    //console.log("Es par?: " + esPar(resultado));
    return esPar(resultado);//este return asigna el resultadoEsPar de el .then 
  })
  .then(resultadoEsPar =>{//Este .then , consuma la primesa de esPar(resultado);
    console.log("Promesa es par? " + resultadoEsPar);
  })
  .catch(error => console.log("Rechazado por: " + error ));//el reject , tambien solo se tiene uno porque asume todas las reject si hay mas resolve(.then)

  
  //Existe otra forma de consumir las promesas , usando async-await
  //para usar await mi funcion debe ser async
  //si se ejecut el reject , me aparece el resultado(mensaje) , no se maneja el error
  console.log("Await El resultado suma:  " + await suma(9,6)); //con await se hace una pausa hasta que el programa resualva la promesa
  
  //para manejar el error con await podermos usar los bloques try-catch
  try{
   console.log("Try El resultado sumas : " + await suma(-6,3));
   console.log("Se termino este asunto , vamos por elotes");

  }
  catch(error){ 
    console.log("Se genero un error por: " + error);
  }
  console.log("El resultado de la resta es: " + resta(10,3));

}

