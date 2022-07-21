console.log("Sesión JS07 ")
/* let x = document.getElementById("demo");

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
 */
function guardarDatos(){
   const formulario = document.getElementById('formulario');
    console.log("nombre: "+formulario.elements['nombre'].id);
    console.log("apellido: "+formulario.elements['apellido'].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte", 14);
    /*localStorage.setItem("nombre",formulario.elements['nombre'].value);
    localStorage.setItem("apellido",formulario.elements['apellido'].value); 
    */
    //Se acostumbra a guardar como objeto de la siguiente manera:
    //Va a ser más eficaz para guardar menos datos en comparación a las líneas de arriba que ocupan más espacio
    //con ese JSONstringify lo guardo en formato JSON
    localStorage.setItem("datos",JSON.stringify(
    {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value
        //expiracion: tiempo_en_milisegundos;
        //sumar 1 minuto o el tiempo que quiera en milisegundos
    })
    )
borrarAlmacen();
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    /* formulario.elements['nombre'].value =localStorage.getItem("nombre");
    formulario.elements['apellido'].value =localStorage.getItem("apellido"); */
    //Lo convierto con JSON.parse para que lo lea no como objeto de dato
    let datos = JSON.parse(localStorage.getItem('datos'));
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`);
    formulario.elements['nombre'].value =datos.nombre;
    formulario.elements['apellido'].value =datos.apellido;   
}
//*********************************** */

function funcionCallBack(){
  console.log("2.Se activa la función CallBack");
}


//setTimeout es la función para que luego del tiempo que le diga se cree
//setTimeout(funcionCallBack, 3000  )//(Nombre de la funcion sin paréntesis para que no se ejecute luego luego, milisegundo a contar)

function recuperarDatos() {
  const formulario = document.getElementById('formulario');
  // formulario.elements['nombre'].value = localStorage.getItem("nombre");
  // formulario.elements['apellido'].value = localStorage.getItem("apellido");
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log("quiero ver que hay despues de borrar null " + datos);

  if (datos == null) {
    // let elemento = document.querySelector('.alerta');
    // class
    // elemento.className // "miejemplo"
    // elemento.className = "";// Ahora el elemento tendrá las clases "miejemplo" y "ejemplo-especial"

    // const nuevoElemento = document.createElement("div","alert alert-warning alert-dismissible fade show");
    // nuevoElemento = document.createElement("button");
    // nuevoElemento.innerHTML = "Este es un nuevo parrafo";
    // document.body.appendChild(nuevoElemento);
    // nuevoElemento.className = "alert alert-warning alert-dismissible fade show";
    // // nuevoElemento = document.createElement("button");
    // nuevoElemento.className = "btn-close";
    // nuevoElemento.setAttribute("data-bs-dismiss","alert");
    // nuevoElemento.setAttribute("aria-label","Close");
    // // nuevoElemento.setAttribute("type",button);

    alert("Por tu seguridad borramos la informacion");
  } else {
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
  }
}

function imprimirHTML(dato){
  console.log("3. Después de setTimeOut");
  // Esta función imprime en consola
  function imprimir(dato){
    console.log("El dato es :" +dato);
  }
  
  let demo= document.getElementById("demo");
  demo.innerHTML ="El dato es :"+dato;
}  

//Esta función hace otra cosa y llama a la función
function suma(a, b , fncMostrar ){
  let suma =a +b;
  fncMostrar(suma);
}  
//Programación asíncrona aquí no la función controla cuándo se va a mostrar
//Le paso aquí los datos de dato y despues le indico la función para que se ejecute
//suma( 3, 5, imprimir);
//suma(2, 8, imprimirHTML);

/*******************Function setTimeout(() => {
 
 }, timeout); *///Tiene las lavves y el espacio para poner más de una instrucción.
 //timeout es una variable para que yo la defina arriba.
 //la función flecha no se le pone nombre, generalmente.
 function funcionCallBack(){
   console.log("2.Se activa la función CallBack"); 
  } 
  //Tarea borar el almacenamiento.
  function borrarAlmacen() {
    setTimeout(() => {
      localStorage.clear();
      console.log("Ya te borre");
    }, 100000);  
  }  
 /* console.log("1. Antes de setTimeOut");
 //L función setTimeoutes una promesa, porque te promete que te dará algo.
 //setTimeout(funcionCallBack, 3000  )//(Nombre de la funcion sin paréntesis para que no se ejecute luego luego, milisegundo a contar)
 //setTimeout (function(){console.log("2.1. Se activa mi función anónima")}, 3000);
 //Para reducirlo aún más se hace con la función flecha
//Porque es más fácil de leer también. 
 setTimeout(()=>console.log("2.2 Se activa la función flecha"),3000 );
 console.log("3. Después de setTimeOut"); */

 /*****************Promesas*****************/
//El programa actúa hasta que obtenga la devolución 
//miPromesa();
function miPromesa(){
  //Esta es la plantilla de Promise
  // aquí importa la posición el primero siempre resolverá la promesa
  //reject cuando no se resolvió
  const promesa = new Promise( (resolve, reject ) => {
    const expresion= false;
    if (expresion){
      resolve ("La promesa se resolvió. La abejita trae polen");
    }  
    else{
      reject ("La promesa No se resolvió. La abejita no trajo polen");
    };  
   } ); 
   //Vamos a consumir la promesa con .then y .catch
   //promesa.then( ).catch(); aunque se suele poner de la sig manera porque suelen ser más largos 
   //then es para resolve y catch es para reject
   promesa
   .then((valueResolve) => console.log(valueResolve) )//Esta es la línea que me imprime
   .catch((valueReject)=> console.log(valueReject) ); 
}   

/** Promesas, Async - Await, Try - Catch*/
calculos();
async function calculos(){
 /*  const suma =(a, b) => a + b;
  console.log("El resultado de la suma es: "+suma(1,2)); */
  const resta =(a, b)=> a - b;
  
  /**
   * Mi función va a sumar siempre y cuando el resultado sea postivo
   *  Se retorna el resultado positivo.
   * Si el resultado es negativo se enviará un mensaje de error
   */
  const suma =(a, b) =>{
    const operacionSuma = new Promise((resolve, reject) => {
      //if(a>0 && b>0) resolve(a+b);
      if(a>0 && b>0) setTimeout( ()=>resolve(a+b) , 3000);
      else reject ("Solo se pueden sumar número postivos");
    })
    return operacionSuma;
  }
  
  /**
   * Se determinará si el número ingresado es par
   * Si es par se retornará true
   * Si es impar, se retornará un mensaje de error
   */
 const esPar =(numero)=>{
      return new Promise((resolve, reject) => {
        if(numero%2==0) resolve (true);
        else reject("El numero no es par")
      })
      
 }
  
    //con función flecha
    //return ((numero % 2== 0) ? true : false);
    //ahora que sea promesa
    //const operacionEsPar= new Promise((resolve, reject) => {
    // la línea de abajo resume la de arriba y poner el return hasta abajo. Mi promesa me va a retornar un resolve un reject 
    // return new Promise((resolve, reject) => {
    //   if(numero%2 == 0) setTimeout ( ()=>resolve(true),3000 );
    //   else reject ("El número no es par");
    // });
    //return operacionEsPar;
  

  // suma(5, 6)
  // .then( resultado => {
  //   console.log("Promesa Suma: "+ resultado);
  //   //para poner un segundo then ponemos las llaves porque es una segunda instrucción
  //   console.log("Es par? " +esPar(resultado));
  //   return esPar(resultado);
  // } )
  // .then( resultadoEsPar =>{  //Este .then, consume la promesa de esPAr(resultado); que coloqué en la línea 205 como return
  //   console.log("Promesa es par? " +resultadoEsPar);
  // })
  // .catch( error => console.log("Rechazado por: "+ error));
  

  
  //Otra forma de consumir las promesas, Async-Await:
  //Para usar await, mi función debe ser async
  //Si se ejecuta el reject, me aparece el resultado (mensaje), no se maneja el error.
  
  //para manjar el error con await, podemos usar los bloques try-catch
  try{
    console.log("Try El resultado suma: "+ await suma(-6-3));
    console.log("Se terminó este asunto");
  }
  catch(error){
    console.log("Segeneró un error por: "+error);
  }
  
  console.log("Await El resultado de suma: "+ await suma(9,6));
  console.log("El resultado de la resta es: "+ resta(4,3));


}