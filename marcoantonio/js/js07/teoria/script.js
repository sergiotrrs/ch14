console.log("Sesión JS07 ")

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
    console.log("nombre: "+formulario.elements['nombre'].id);
    console.log("apellido: "+formulario.elements['apellido'].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte", "Ch14");
    localStorage.setItem("nombre",formulario.elements['nombre'].value);
    localStorage.setItem("apellido",formulario.elements['apellido'].value);
    //Se acostumbra a guardar como objeto de la siguiente manera:
    //Va a ser más eficaz para guardar menos datos en comparación a las líneas de arriba que ocupan más espacio
    //con ese JSONstringify lo guardo en formato JSON
    localStorage.setItem("datosUsuario",JSON.stringify(
    {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value

        // expiración: tiempo en milisegundos:  // 1 minutos de tiempo de experiración 
    })
    )
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
   // formulario.elements['nombre'].value =localStorage.getItem("nombre");
   // formulario.elements['apellido'].value =localStorage.getItem("apellido");
    //Lo convierto con JSON.parse para que lo lea no como objeto de dato
    let datos = JSON.parse(localStorage.getItem('datosUsuario'));
    console.log("Datos usuario "+ datos+['nombre'] + datos.apellido);
    formulario.elements[`nombre`].value = datos.nombre;
    formulario.elements[`apellido`].value = datos.nombre;


    /************************************************ */


    function funcionCallBack() {
        console.log("2.- Se activa la funcion Callback");

    }

    funcionCallBack();
    console.log("1 minuto de seTimeout");

    setTimeout( funcionCallBack,3000)// setTie
    console.log(" 3.- Despues de setTimeout");


    function imprimirHTML(dato) {
        console.log(dato)
    }

    function suma(a , b, fncMostrar)  {
        let suma = a + b; 
        fncMostrar(suma)

    }

    //suma(3 , 5, imprimir);
   // suma(2 , 8, imprimirHTML )


   function funcionCallBack() {
    console.log(" -se ctiva la función")
   }
 console.log(" antes de setTimeout"); 

 //setTimeout(  funcionCallBack, 3000)
/*
 setTimeout( ()=>console.log(" se activa a la funcion flecha"), 3000); 
 console.log(" 3 despues de setTimeout");
*/

function miPromesa() {
    let promesa = new Promise((resolve, reject) => {
        const expresion = true;
        if (expresion) {
            resolve ("La promesa se resolvio, la abejita trae polen")
        }
        else {
            reject(" la promesa no se resolvio, la abejita no trae polen ")
        }
        
    });

    // Vamos a consumir la promesa con .then y .charch 

    //promesa.then( ).catch():  
    promesa
    .then(valueResolve) => console.log(valueResolve); 
    .catch(valueResolve)=> console.log(valueReject);
}

/****************************Promesas, Asycn-awair, try-Catch********************* */

function calculos() {
    //const suma = (a , b) => a + b; 
    //console.log("El resultado de la suma" + suma(1,2));
    const resta = (a , b) => a - b; 
    console.log("El resultado de la suma" + resta(4,3));

    const suma = (a,b) => {
        const operaionSuma = new Promise((resolve , rejec) =>{
            // if(a>0 && b>0) resolve (a+b);
            if(a>0 && b>0) setTimeout( ()=>resolve (a+b), 3000)
            else reject("Solo se puede sumar números positivos"); 
        }
        return operaionSuma;
    }
/**
 * 
 * Se determinara si el númeo es par 
 * Si es par se retorna un mensaje de true 
 * si es impar se retorna un mensaje del error
 * 
 */


const esPar = (a) => {
return  a%2 ? true : false; 

}
    suma(5 , 6)
    .then(resultado => {
        console.log("Promesa Suma:"+ resulatdo) ;
        console.log("Es par:"+ esPar(resulatdo))); 
    }

    .catch(error => console.log("Rechazado por:"+error));
}














