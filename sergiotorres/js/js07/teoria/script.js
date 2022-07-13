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
//miPromesa();
function miPromesa(){
  const promesa = new Promise( (res, rej ) => {
    const expresion = false;
    if (expresion){
      res ("La promesa se resolvió, la abejita trae polen");
    }
    else{
      rej ("La promesa NO se resolvió, la abejita no trajo polen");
    }

   });

   //Vamos a consumir la promesa con .then y .chatch
   //promesa.then( ).catch( );
   let respuesta;
   promesa
    .then( (valueResolve) =>{
      respuesta = valueResolve; 
      console.log(respuesta); 
    })
    .catch( (valueReject) => console.log(valueReject) );
}

//***************************Promesas, Async-Await, try-Catch*********** */
calculos();
async function calculos(){
  //const suma = (a ,b ) => { return (a + b) };
  //console.log("El resultado de la suma es: " + suma(1,2));
  const resta = (a ,b ) => a - b;
  
  /**
   *  Mi función va a sumar, siempre que a y b sean positivos
   *  Se retorna el resultado positivo.
   *  Si el resultado es negativo, se enviará un mensaje de error
   */
  const suma = (a, b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
      //if(a>0 && b>0) resolve (a+b);
      if ( a>0 && b>0) setTimeout( ()=>resolve (a+b), 3000);
      else reject("Solo se puede sumar números positivos");      
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
      if ( numero%2 == 0 )setTimeout( ()=>resolve (true), 3000);
      else reject ("El número no es par");
    });    
  }
  
  // suma(5, 6)
  // .then( resultado => {
  //     console.log("Promesa Suma:" + resultado);
  //     //console.log("Es par?: "+ esPar(resultado));
  //     return esPar(resultado);
  //   })
  // .then( resultadoEsPar =>{   //Este .the, consume la promesa de esPar(resultado);
  //     console.log("Promesa es par? " + resultadoEsPar);
  // }  )
  // .catch( error => console.log("Rechazado por: " + error));
  
  
  //Existe otra forma de consumir las primesas, usando async-await
  //Para usar await, mi función debe ser async.
  //Si se ejectua el reject, me aparece el resultado(mensaje), No se maneja el error.
  //console.log("Await El resultado suma: "+ await suma(9,6)); 

  //Para manejar el error con await, podemos usar los bloques try-catch
  try{
    console.log("Try El resultado suma: " + await suma (-6,3));
    console.log("Se terminó este asunto, vamos por elotes");
  }
  catch (error){
    console.log("Se generó un error por: " + error);
  }
  
  console.log("El resultado de la resta es: " + resta(10,3));
}

