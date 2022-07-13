console.log('Sesion js07')


/*var x = document.getElementById("demo");
    
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
}*/



function guardarDatos() {
    const formulario = document.getElementById('formulario')
    console.log('nombre: ' +  formulario.elements['nombre'].value);
    console.log('apellido: ' +  formulario.elements['nombre'].value);

    // se le indica una clave y un valor
    localStorage.setItem('cohorte', 'Ch14');
    localStorage.setItem('nombre', formulario.elements['nombre'].value);///local necesita una clave y un valor
    localStorage.setItem('apellido', formulario.elements['apellido'].value);
    localStorage.setItem('datosUsuario', JSON.stringify(//convirtiendo formato a json
    {

        "nombre": formulario.elements['nombre'].value,//este lo convierto a json
        "apellido": formulario.elements['apellido'].value
        //expiracionmilisegundos
    })
    
    );

}

function recuperarDatos() {
    const formulario = document.getElementById('formulario');
    //formulario.elements['nombre'].value= localStorage.getItem('nombre');
    //formulario.elements['apellido'].value= localStorage.getItem('apellido');
    let datos = JSON.parse( localStorage.getItem("datos") );//Lo estoy cambiando a objetos
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value= datos.apellido;

}

/*********************************************** */

function funcionCallback() {
  console.log('2.se activa la funcion callback');
}

//funcionCallback();

/*console.log('1.antes setTIMEOUT')
setTimeout(funcionCallback,  3000)//function callback necesita(nombre funcion y ms) a contar. Si coloco los parentesis llamando a 
console.log("3.despues de setTimeout")//la funcion se llama de inmediato no espera los milisegundos*/


/*function imprimir(dato){
  console.log("El dato es: " + dato)
}

function imprimirHtml(dato){
  //console.log('el dato es : '+ dato);
  let demo = document.getElementById('demo');
  demo.innerHTML = "El dato es: " + dato;
}


function suma (a, b, fncMostrar){
let suma = a + b;
fncMostrar(suma);
}

suma(3, 5, imprimir);
suma(2, 8, imprimirHtml);*/

//otra practica 

/*function funcionCallback() {
  console.log('2.se activa la funcion callback');
}*/

//funcionCallback();

//console.log('1.antes setTIMEOUT')
//setTimeout(funcionCallback,  3000)
//setTimeout(function(){console.log("2.1 se activa mi funcion anonima") } , 3000);//funcion anonima

//setTimeout(()=>{console.log("2.2 Se activa la funcion flecha")}, 3000 );
//console.log("3.despues de setTimeout")


/***************************Promesas: nos dice si se ejecuto ******************************* */


function miPromesa(){

  let promesa = new Promise( ( resolve, reject ) => { 
    const expresion = false;

    if (expresion) {
      resolve("La promesa se resolvio, la abejita trae polen");
    }
    else {
      reject("La promesa No se resolvio, la abejita no trajo polen")
    }
  });
//vamos a consumir la promesa con .then y .clatch
//promesa.then( ).catch( );
promesa
  .then( (valueResolve) => console.log(valueResolve) )
  .catch( (valueReject)=> console.log(valueReject) );
}

//miPromesa()

/***************************Promesas asinc await try-catch******************************* */

//function calculos(){

  //const suma = (a,b) => a + b;
  //console.log('El resultado suma: '+ suma(1,2))
//}



async function calculos(){

  const resta = (a,b) => a - b;
 

  //mi funcion siempre va a sumar si el resultado es positivo
  //si el resultado es negativo se enviara un mensaje

  const suma = (a, b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
      if(a>0 && b>0) setTimeout( ()=> resolve(a + b), 3000);
      else reject("Solo se puede sumar números positivos");      
    })
    return operacionSuma;
  }
  //se determinara si el numero ingresado es par
  //si es par se retornara true
  //si no es par se retorna un mensaje de error
 const esPar = (a)=> {
 // return (a%2==0 ? true : false);
 const operacionEsPar = new Promise((resolve, reject) => 
 { 
  if(numero%2 == 0) resolve(true)
  else reject ('el numero no es par')
})

 }
  /*suma(5, 6)
    .then( resultado=> {

      console.log("P Suma:" + resultado)
      //console.log(" Es par? :" + a%2 ? true :+ false)
      return esPar(resultado)

  })
    .catch( error => console.log("Rechazado por: " + error))
    
    console.log('El resultado de la resta: '+ resta(4,3))*/



    // Existe otra forma de consumir las promesas usando async-await
    //para usar await mi funcion debe ser async
    //si se ejecuta el reject, me aparece el resuktado(mensaje), no se maneja el error

    /*console.log("Await el resultado suma: " + await suma(9,6));
    console.log('El resultado de la resta: '+ resta(10,3))*/



// para manejar el error con awit podemos usar los bloques try catch

try{
  console.log('try el resultado suma ' + await suma(-6,3))
  console.log('se termino este asunto, vamos por elote ')

}
catch(error){
  console.log('se genero un error por: ' + error);

}

console.log('El resultado de la resta es:' +resta(10,3));
}
calculos()


