console.log("Prueba de sesión JS07");

let x = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else{
        x.innerHTML = "Geolocation is not supported by this browser";
    }
}

function showPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

//agregar expiración: tiempo en milisegundos;

function guardarDatos(){
    const formulario = document.getElementById("formulario");
    console.log("nombre: " + formulario.elements['nombre'].id);
    console.log("apellido: "+formulario.elements['apellido'].value);
    //se le indica una clave y un valor
    localStorage.setItem("Cohorte", "ch14");
    localStorage.setItem("nombre: ", formulario.elements['nombre'].value);
    localStorage.setItem("apellido: ", formulario.elements['nombre'].value);
    //Convertir a un formato JSON
    localStorage.setItem("datos: ", JSON.stringify(
{
    "nombre ": formulario.elements['nombre'].value,
    "apellido ": formulario.elements['apellido'].value
    // expiración: tiempo _en_milisegundos;
})
    );
}

function recuperarDatos(){
    const formulario = document.getElementById("formulario");
    //formulario.elements['nombre'].value = localStorage.getItem("nombre");
    //formulario.elements['apellido'].value = localStorage.getItem("apellido");
    // leer los datos en formato JSON
    let datos = JSON.parse(localStorage.getItem("datos"));
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;
}
function tiempoExp(){
    const tiempoAhora = new Date(now);
    tiempo = new Date(1000);
    console.log("tiempo ahora " + tiempoAhora);
    console.log("tiempo " + tiempo);
}


//funcionCallBack();
//console.log("1.- Antes de setTimeout");
//setTimeout(funcionCallBack,3000 )  // setTimeout( nombre_Funcion , ms a contar)
//console.log("3.- Después de setTimeout")

function imprimir(dato){
    console.log("El dato es: "+ dato);
}

function imprimirHTML(dato){
    //console.log("El dato es: "+ dato);
    let demo =document.getElementById("demo");
    demo.innerHTML = dato;
}


function suma(a,b, fcnMostrar){
    let suma = a+b;
    fcnMostrar(suma);
}
//suma(3,5, imprimir);
//suma(2,8, imprimirHTML);
// *******************************Función setTimeout********************
function funcionCallBack(){
    console.log("2.- Se activa la función CalBack");
}

//console.log("1.- antes de setTimeout");
//setTimeout(funcionCallBack, 3000) //setTimeout (nombre_Funcion, ms contar)
//setTimeout(funcion(){ console.log("2.1.- Se actiba mi función anónima ")},3000);
//setTimeout(()=> console.log("2.2.- Se activa la función flecha"), 3000);
//console.log("3.- Después de setTimeout");


/************************Promesas*********************** */
miPromesa();
function miPromesa(){
    let promesa = new Promise((resolve, reject) => {
        const expresion = true;
        if(expresion){
            resolve ("La promesa se resolvió con éxito");
        }
        else{
            reject ("La promesa no se resolvió");
        }
    });
    //Vamos a consumir la promesa con .then y .catch
    //promesa.then().catch(); ------> se aplica el punto y coma al final del catch solamente
    promesa
    .then((valueResolve) => console.log(valueResolve))
    .catch((valueReject)=> console.log(valueReject));
}