console.log("JS07 APIS");
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
    const formulario = document.getElementById("formulario");
    console.log("nombre: " + formulario.elements["nombre"].value);
    console.log("nombre: " + formulario.elements["nombre"].id);
    console.log("apellido: " + formulario.elements["apellido"].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte",14);
    //Guardamos nombre y su valor
    localStorage.setItem("nombre",formulario.elements["nombre"].value);
    //guardamos apellido y su valor
    localStorage.setItem("apellido",formulario.elements["apellido"].value);
    //Para guardar datos como formato JSON
    localStorage.setItem("datosUsuario", JSON.stringify(
    {
        "nombre" :formulario.elements["nombre"].value,
        "apellido" : formulario.elements["apellido"].value
    })
    );

}


function recuperarDatos(){
    const formulario = document.getElementById("formulario");
    // formulario.elements["nombre"].value = localStorage.getItem("nombre");
    // formulario.elements["apellido"].value = localStorage.getItem("apellido");
    //Recuperar datos con formato JSON: parsear
    let datos = JSON.parse(localStorage.getItem("datosUsuario"));
    console.log("Datos usuario: " + datos.nombre +" " + datos.apellido);
    console.log(`Datos usuario:  ${datos['nombre']} ${datos.apellido}`);
    formulario.elements["nombre"].value = datos.nombre;
    formulario.elements["apellido"].value = datos.apellido;
  }

  // //Actividad: agregar una expiración: tiempo_en_milisegundos 
  // function eliminarDatos(){
  //   const d = new Date();
  //   let time = d.getTime();//Obtenemos los milisegundos desde 1 enero 1970 hasta ahora
  //   let minutos = 1000*(60*5);
  //   const expirate = time + minutos;
  //   // if()




  // }



function imprimir(dato){
  console.log("el dato es: "+ dato);


}
function imprimirHTML(dato){
  console.log("el dato es: "+ dato);
  let demo = document.getElementById("demo");
  demo.innerHTML = dato;

}

function suma(a,b,fcnMostrar){
  let suma = a+b;
  //EN ESTE MOMENTO SE EJECUTA LA FUNCIÓN 
  fcnMostrar(suma);
}

//FUNCIONES ASÍNCRONAS / FUNCIONES CALBACK 
// LAS FUNCIONES NO SE EJECUTAN INSTANTANEAMENTE
// SE PASA LA REFERENCIA DE LA FUNCIÓN Y OTRA FUNCIÓN ADMINISTRA CUANDO SE VA A EJECUTAR
// suma(3,5,imprimir);
// suma(3,3,imprimirHTML);>


/************************Función setTimeout********************* */
//función definida:
function funcionCallBack(){
  console.log("2.Se activa la función CallBack");
}

//   // funcionCallBack(); 
// console.log("1.antes del setTimeout");
// //Se pasa una función callback para buscarla: ctrl+click encima del nombre de la funcion callback
// setTimeout( funcionCallBack , 3000);// parámetros (nombre_función, ms a contar ) el nombre de la función va sin paréntesis
// setTimeout(function (){console.log("2.1 Se activa mi función anónima")}, 3000);
// setTimeout(()=> console.log("2.2 Se activa la función flecha"),3000);
// console.log("3.después del setTimeout");

/*******************************PROMESAS************************ */
//La función setTimeout es una funcion que hace una promesa, porque esperas que te retorne algo.. dependiendo la función 
// miPromesa();
function miPromesa(){
  const promesa = new Promise((resolve, reject) => {
    const expresion = false;
    if(expresion){
      resolve ("La promesa se resolvió, la abejita trae polen");
    }else{
      reject ("la promesa no se resolvió, la abejita NO trajo polen");
    }

  });

  //Para consumir la promesa (leerla cuando esté lista) con .then(cuando se resuelve) y .catch (cuando se rechaza)
// promesa.then( ).catch();
  promesa
    .then((valueResolve)=>console.log(valueResolve))
    .catch((valueReject)=>console.log(valueReject)); //El punto y coma ; se pone hasta el final después de .catch


}
//RESOLVE: ES UNA FUNCIÓN DE CALLBACK QUE VA A ADMINISTRAR LA PROPIA PROMESA


/************* PROMESAS, ASYNC-AWAIT, TRY-CATCH ************** */
calculos();
async function calculos(){
  // const suma = (a,b)=> a + b;
  // console.log("El resultado de la suma es: " +suma(1,2));
  
  const resta = (a,b)=> a - b;
 
/**
 * Mi función va a sumar, siempre que a y b sean positivos
 * Se retorna el resultado positivo.
 * Si el resultado es negativo, se enviará un mensaje de error.
 */
  const suma = (a,b)=>{
    const operacionSuma = new Promise((resolve, reject) => {
      // if(a>0 && b>0) resolve (a+b);
       if(a>0 && b>0)  setTimeout(()=>resolve(a+b),3000);

      else reject ("Solo se puede sumar números positivos");
    })
    return operacionSuma;
  }

  /**
   * Se determinará si el número ingresado es par 
   * Si es par, se retornará true
   * Si no es par, se retona un mensaje de error
   */
  const esPar = (numero) =>{
    //return (a%2==0 ? true : false);
    return new Promise((resolve, reject) => {
      if(numero%2 == 0) setTimeout(()=>resolve(true),3000);
      else reject ("El número no es par");
    })
  }
  
//   suma(5,6)
//     .then(resultado=>{
//       console.log("Promise suma: "+ resultado);
//       // console.log("Es par? : " + esPar(resultado));
//       return esPar(resultado);

//     })
//     .then(resultadoEsPar =>{
//       console.log("Es par? : " + resultadoEsPar); // Este .then consume la promesa esPar(resultado)
//     })
//     .catch(error => console.log("Rechazado por: "+error));

   
 
//     //Existe otra forma de consumir las promesas, usando async-await
//     /**
//      * Para usar await, la funcion debe ser declarada como async
//      * Si se ejecuta el reject, aparece el resultado(mensaje), 
//      * no se maneja el error (no se tiene controlado)
//      */
// console.log("Await El resultado suma: " +await suma(-9,6)); //Await provoca una pausa hasta que se consuma la promesa

    /**
    *Para manejar el error con await, podemos usar los bloques try-catch 
    */

    try {
      console.log("Try El resultado suma: " + await suma(-6,3));
      console.log("Se terminó este asunto, vamos por elotes");

    } catch (error) { //El error atrapa el reject de la promesa que se ejecuta en el try 
      console.log("Se generó un error por: " + error);
      
    }


console.log("El resultado de la resta es: " +resta(4,3));




}







