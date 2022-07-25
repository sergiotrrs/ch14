

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
    //se indica una clave y un valor
    localStorage.setItem("Cohorte", "Ch14");
    //localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
    {
        "nombre": formulario.elements['nombre'].value,
        "apellido": formulario.elements['apellido'].value
        //expiracion: tiempo en milisegundos // 1 minuto de tiempo de expiracion 
    } )
    );
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    //formulario.elements['nombre'].value = localStorage.getItem("nombre");
   // formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = JSON.parse(localStorage.getItem("datos"));
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
}

//************************************************ 06/07/22 */

/* function funcionCallBack(){
    console.log("Se activa la funcion CallBack")
} */

//funcionCallBack();

/* console.log("1. Antes de setTimeout");
setTimeout(funcionCallBack, 1000)// TimeSetOut(nombre_funcion, ms a contar)
console.log("3. despues de setTimeout"); */

function imprimir(dato){
    console.log(dato);
}

function imprimirHTML(dato){
    //onsole.log(dato);
    let demo = document.getElementById("demo");
    demo.innerHTML = "El dato es: " + dato;
}

function suma (a,b, fncMostrar){
    let suma = a+b;
    fncMostrar(suma);
}

/* suma(3,5, imprimir);
suma(8,5, imprimirHTML); */
/*************************************** */

function funcionCallBack(){
    console.log("2. Se activa la funcion CallBack")
}

/* console.log("1. Antes de setTimeout");
 setTimeout(funcionCallBack, 1000)// TimeSetOut(nombre_funcion, ms a contar) 
setTimeout(function(){console.log("2.1 se activa mi funcion anonima")}, 3000); 
setTimeout(()=>{console.log("2.2 se activa la funcion fecha")}, 3000)
console.log("3. despues de setTimeout");
 */
//miPromesa();
function miPromesa(){
    let promesa = new Promise((resolve, reject) => {
        const expresion = false;
        if (expresion){
            resolve("La promesa se resolvio, la abejita trae polen");  
        }else{
            reject("La promesa NO se resolvio, la abejita no trajo polen");
        }
    });
    //vamos a consumir la promesa con .then y .catch //leer el dato
    promesa
    .then((valueResolve)=>console.log(valueResolve))
    .catch((valueReject)=>console.log(valueReject));
}
//**************************Promesas, Async-Await, try-Catch ******** 07/07/22*/
calculos ();
async function calculos(){
    //const suma = (a,b)  => a+b;
    //console.log("El resultado de la suma es: " + suma(1,2));
    const resta = (a,b) => a - b;
    
    //Mi funcion va a sumar siempre que el resultado sea positivo
    //Se retorna el resultado positivo
    //Si el resultado es negativo se enviara un mensaje
    const suma = (a,b) =>{
        const operacionSuma = new Promise ((resolve, reject) =>{
            //if(a>0 && b>0) resolve ((a+b));
            if(a>0 && b>0) setTimeout(()=> resolve(a+b) , 3000);
            else reject ("Solo se puede sumar numeros positivos");
        })
        return operacionSuma;
    };
    /**
     * Se determinara si el numero ingresado es par
     * Si no es par, se retonara true
     * Si no es par, se retornara un mensaje del error.
     */
    const esPar = (numer) => {
        //return (numer%2==0 ? true:false);
        return new Promise((resolve, reject) => {
            if(numer%2==0) setTimeout(()=>resolve(true),3000) ;
            else reject("El numero no es par"); 
        });
    }

    suma(5, 6)
    .then(resultado=>{
        console.log("Promesa suma: " + resultado);
        //console.log("Es par?: " + esPar(resultado) );
        return esPar(resultado);
    })
    .then (resultadoEsPar =>{ //Este .then consume la promesa de esPar(resultado)
        console.log("Promesa es par? " + resultadoEsPar);
    })

    .catch(error => console.log("Rechazado por: " + error));

   

    //Existe otra forma de consumir las promesas, usando async-await
    console.log("Await El resultado suma: " + await suma (9,6));


    //Para manejar el error con await, podemos usar los bloques try-catch

    try{
        console.log("Try el resultado suma: " + await suma(6,3));
        console.log("Se termino este asunto, vamos por elotes");
    }
    catch(error){
        console.log("Se genero un error por: " + error);
    }

     console.log("El resultado de la resta es: " + resta(10,3));
}

