console.log ("Sesión JS07 API Fetch");
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
    //Se le indica una clave y un valor entre comillas y separando por coma
    localStorage.setItem("Cohorte", "Ch14");
   // localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
    {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value
        //expiración: tiempo en milisegundos// minutos de tiempo de expiración
    })
    );
}
//Para guardar datos setItem
//Recuperar Datos desde el navegador getItem

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
   // formulario.elements['nombre'].value = localStorage.getItem("nombre");
        //formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = JSON.parse( localStorage.getItem ("datos") );
    console.log(`Datos usuario:  ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;

}     
//**************************************** */
function funcionCallBack(){
  console.log("2. Se activa la función CallBAck")
}



function imrpimir(dato){
  console.log("El dato es :" +dato);
}

function imprimirHTML(dato){
  //console.log("El dato es :" + dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = "El dato es :" +dato

}

function suma(a , v, fncMostrar ){
  let suma = a + b;
  fncMostrar (suma);
}
//suma(3, 5, imprimir);
//suma(2, 8, imprimirHTML);
//****************Funcion setTimeout */
//console.log("1. Funcion ");
//setTimeout( funcionCallBack, 3000) //(nombre_función, ms a contar ), aqui no se pone lo parentesis a llamar la función,
//Porque se va a realizar primero la función de los segundos(Porque solo le pasamos la referencia)
//setTimeout( function () { console.log("2.1. Se activa mi función anónima") } , 3000 );
//setTimeout( () =>console.log("2.2- Se activa la función flecha"), 3000 );
//console.log("3. Despues");

//*****************************Promesas **************** */
//miPromesa();
function miPromesa(){
  const promesa = new Promise ( (resolve, reject) => {
    const expresion = false;
    if (expresion){
      resolve ("La promesa se resolvió, la abejita trae polen");
    }
    else{
      reject ("La promesa No se resolvió, la abejita no trajo polen");
    }
  });

  //Vamos a consumir la promesa con .then y .catch
  //promesa.then(). catch();
  /**
   * También se puden llamar .then y .catch haciendo una funcióny llamandola
   * y haciendo una función flecha
   */

  promesa
  .then ((valueResolve) => console.log(valueResolve))
  .catch ((valueReject) => console.log(valueReject) );
}

//*****************************Promesa, Async-Await, try-Catch **************** */
calculos()
async function calculos(){
  //const suma = ( a, b ) => { return (a + b) };
  //console.log("El resultado de la suma es : " + suma(1,2));
  const resta = ( a, b ) => a - b;
  

  /**
   *  Mi función va a sumar siempre que a y b sean positivos
   * Se retorna el resultado positivo
   * Si el resultado es negativo, se enviará un mensaje de error
   */
  
  const suma = (a, b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
      //if (a>0 && b>0) resolve (a+b);
      if ( a>0 && b>0)setTimeout ( ()=> resolve(a+b),3000)
      else reject ("Solo se puede sumar números positivos");
    })
    return operacionSuma;  //Se tiene que poner un return para que nos de la promesa

  }
/**
 * Se determinará si el número es par
 * Si es par se retornará true
 * Si no es par, se retorna un msj error
 */

  const esPar = (a) => {
    //return (a%2==0 ? true : flase ) ;  //Operador ternario ? para que retorne a true
  //Promesa--->  
 return new Promise((resolve, reject) => {
    if ( a %2 == 0) setTimeout(()=> resolve (true), 3000);
    else reject("El número no es par");   
  });
  
  }
  suma(5,6)
  .then(resultado => { //Se pone llave porque son 2 instrucciones
    console.log("Promesa suma: " + resultado);
    //console.log("ES par?: " + esPar(resultado));
    return esPar(resultado);
})
  .then (resultadoEsPar =>{ //Este .the, consume la promesa de esPar(resultado)
    console.log("Promesa Es Par? " + resultadoEsPar);
  })
  .catch( error => console.log("Rechazado por: " + error));




  //Consumir promesa 
  /**
   * Al momento de consumir la promesa
   * no se declara las funciones resultado, error, solo se colocan
   * y se llaman al instante 
   */
  //suma(5,6)
  //.then(resultado => console.log("Promesa suma: " + resultado))
  //.catch( error => console.log("Rechazado por: " + error));
/**
 *  Aunque coloquemos abajo otra instrucciones  con la promesa
 * Se realiza la instrucción y no se espera a que la promesa se
 * cumpla o rechaze
 */
  //console.log("El resultado de la resta es : " + resta(4,3));

  /*******Existe otra forma de consumir las promesas usando async-await */
//Para usar await, mi función debe ser async.
//Si se ejecuta el reject, me aprece el resultado(mensaje), No se maneja el error
  console.log("Await El resultado suma: " + await suma(9,6));

  //Para manejar el error con await, podemos usar los bloques try-catch
  try{
    console.log("Try El resultado suma: " + await suma (-6,3));
    console.log("Se terminó este asunto, vamos por elotes ")
  }
  catch(error){
    console.log("Se generó un error por: " + error);

  }
console.log("El resultado de la resta es : " + resta (10,3));
}

