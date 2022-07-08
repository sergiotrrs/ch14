console.log("Sesion JS07 Api Fetch");

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

function guardarDatos() {
    const formulario = document.getElementById('formulario');
    console.log("nombre: " + formulario.elements['nombre'].id);
    console.log("apellido: " + formulario.elements['apellido'].value);

    //Se le indica una clave y un valor 
    localStorage.setItem("Cohorte", "Ch14");
    localStorage.setItem("nombre", formulario.elements['nombre'].value);
    localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
        {
            "nombre": formulario.elements['nombre'].value,
            "apellido": formulario.elements['apellido'].value
            //expiracion: tiempo en milisegundos; //1 minutos de tiempo de expiracion
        })
    );

}

function recuperarDatos() {
    const formulario = document.getElementById('formulario');
    // formulario.elements['nombre'].value = localStorage.getItem("nombre"); 
    //formulario.elements['apellido'].value = localStorage.getItem("apelido"); 
    //let datos = JSON.parse( localStorage.item("datos")); 

    let datos = JSON.parse(localStorage.getItem("datos"));
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;

    //console.log("nombre: " + formulario.elements['nombre'].id);
    //console.log("apellido: " + formulario.elements['apellido'].value);
}

function imprimirHTML(dato) {
    //console.log("El dato es : " + dato); 
    let x = document.getElementById("demo");
    demo.innerHTML = "El dato es : " + dato;
}

function suma(a, b, fncMostrar) {
    let suma = a + b;
    fncMostrar(suma);
}
//suma(3, 5, imprimir);
//suma(2, 8, imprimirHTML);  
//function imprimir(dato) {
/// console.log("El dato es : " + dato);

//******Function setTimeout********
function funcionCallBack() {
    console.log("2.-Se activa la funcion Callback");
    return "dato cualquiera"
}

//console.log("1.-Antes de setTimeout")
//setTimeout(funcionCallBack, 3000) // setTimeOut(nombreFuncion, milisegundos a contar)
//setTimeout( function(){ console,log(2.1 Se activa mi funcion anonima" )}, 3000); 
//setTimeout (()=> console.log("2.1 Se activa mi funcion flecha ") , 3000);
//console.log("3.-Despues de setTimeout"); 

//************************Promesas************************************ */ 
//miPromesa();
//function miPromesa() {
let promesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
        resolve("La promesa se resolvio, la abejita trae polen") // es como un return
    } else {
        reject("La promesa no se resolvio, la abejita no trae polen")
    }
});

//Vamos a consumir la promesa con .then y .catch
//promesa.then().catch(); 
/* let respuesta
 promesa
     .then((valueResolve) => {
     respuesta = valueResolve; 
     console.log(respuesta)
     .catch((valueReject) => console.log(valueReject)});*/
//}
//************************Promesas, async-awair, try-Catch************************************ */ 
calculos();

async function calculos() {
    //const suma = (a, b) => {return a +b}; 
    //console.log("El resultado de la suma es : " + suma(1,2)); 
    const resta = (a, b) => a - b;


    //Mi funcion va a sumar siempre que a y b  sean positivo 
    //Se retorna el resultado positivo
    //Si el resultado es negativo se enviara un mensaje de error

    const suma = (a, b) => {
        const operacionSuma = new Promise((resolve, reject) => {
            // if (a > 0 && b > 0) resolve(a + b);
            if (a > 0 && b > 0) setTimeout(() => resolve(a + b), 3000);
            else reject("Solo se puede sumar numeros positivos")
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
            if (numero % 2 == 0) setTimeout(() => resolve(a + b), 3000);
            else reject("El número no es par");
        });
    }
    /*suma(5, 6)
        .then(resultado => {
            console.log("Promesa Suma:" + resultado);
            //console.log("Es par?: "+ esPar(resultado));
            return esPar(resultado);
        })
        .then(resultadoEsPar => {   //Este .the, consume la promesa de esPar(resultado);
            console.log("Promesa es par? " + resultadoEsPar);
        })
        .catch(error => console.log("Rechazado por: " + error));
    //Existe otra forma de consummir promesas, usando async-await 
    //Para usar awair mi funcion debe ser async
    //Si se ejecuta el reject, me aparece resultado(mensaje), No se maneja el error
    console.log("Await El resultado suma: " + await suma(9, 6));*/

    //Para manejar el error con await, podemos usar los bloques try-catch
    try {
        console.log("El resultado suma: " + await suma(-6, 3));
        console.log("Se termino este asunto, vamos por elotes")
    }
    catch (error) {
        console.log("Se genero un error por: " + error);
    }

    console.log("El resultado de la resta es: " + resta(10, 3));
}

