console.log("Sesión API Fecth 07");
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
    const date =new Date();
    const formulario=document.getElementById("formulario");
    console.log("nombre "+formulario.elements["nombre"].value);
    console.log("apellido "+formulario.elements["apellido"].value);
    //Se le incia una clave y un valor
    localStorage.setItem("Cohorte","CH14");
    //localStorage.setItem("nombre",formulario.elements["nombre"].value);
    //localStorage.setItem("apellido",formulario.elements["apellido"].value);
    localStorage.setItem("datoUsuario",JSON.stringify({
        nombre:formulario.elements["nombre"].value,
        apellido:formulario.elements["apellido"].value,
        //expiración: tiempo en milisegundos: // 1 minuto
        expiracion:date.getMilliseconds()
    }));
}

function recuperarDatos(){
    const date =new Date();
    let timeExpirationSec=5000;
    const formulario=document.getElementById("formulario");
    //formulario.elements["nombre"].value=localStorage.getItem("nombre");
    //formulario.elements["apellido"].value=localStorage.getItem("apellido");
    let datos =JSON.parse(localStorage.getItem("datoUsuario"));
    //console.log("Datos usurio "+datos.nombre+datos.apellido);
    let iniSecTime=datos.expiracion/1000;
    if(iniSecTime+timeExpirationSec<date.getMilliseconds()/1000){
        formulario.elements["nombre"].value=datos.nombre;
        formulario.elements["apellido"].value=datos.apellido;
    }
    else{
        localStorage.clear();
    }
}

//PROGRAMACIÓN ASINCRONA (2 formas)
/*********************************************EJEMPLO 2************************************************ */
//Funcion callback 
function functionCallBack1(){
    console.log("2. Se activa la función CallBack")
}
console.log("1. Antes de setTimeout");
//functionCallBack no lleva parentesis cuando se coloca como argumento;
setTimeout(functionCallBack1,3000); //setTimeOut(nombre e la función, ms a contar), si pongo el nombre de la función con parentesis, se llama inmediatamente
console.log("3. Después de setTimeout");
/**************************************EJEMPLO 1*********************************** */

function imprimirHTML(dato){
    let demo=document.getElementById("demo");
    demo.innerHTML=dato;
}

function imprimir(dato){
    console.log("El dato es "+dato);
}

//Function imprimir será callbak
function  suma(a,b, fncMostrar){
    let suma=a+b;
    fncMostrar(suma);
}

suma(3,5,imprimir);
suma(3,5,imprimirHTML);

/**************************************************************** */

//Funcion callback  (Es una funcín definida)
function functionCallBack(){
    console.log("2. Se activa la función CallBack")
}
console.log("1. Antes de setTimeout");
//Como callback uso función anonima
//setTimeout(function(){console.log("2.1.-Se activa mi función anónima")},3000); 
//Función flecha, como sólo es una nstrucci+on puedo no poner {}
setTimeout(()=>{console.log("2.2 Se activa la función flecha")},3000);
console.log("3. Después de setTimeout");

/*************************************PROMESAS***********************************/
//Te promete que te dará un resultado, sea el deseado o no.
// Nuestro programa esperará  hasta que obtengamos la respuesta

/*Es la plantila básica de la promesa
let promesa =new Promise((resolve, reject) => {
    
})*/

function miPromesa(){
    
    //Puedo ponerle cualuier otro nombre (resolve, reject), es una funcion callback que administra la misma promesa
    let promesa = new Promise((resolve, reject)=>{
        const expresion =true;
        if(expresion){
            //Con lo que queremos regresar
            resolve("La promesa se resolvió");
        }
        else{
            reject("La promesa NO se resolvió");
        }
    });

    //Vamos a consumir la promesa (leer), ya hay dos palabras definidas .then (se resolvio) y .catch (no se reolvio)
    //Entre los parentesis nos dan los resultados de la promesa
    //promesa.then( ).catch( );
    promesa
        .then( (valueResolve)=>console.log(valueResolve))
        .catch( (valueReject)=>console.log(valueReject));
}

miPromesa();

/********************************ROMESAS, ASYNC-AWAIT, TRY-CTCH*************************************** */
calculos();
function calculos(){
    const suma1 = (a,b)=>{return a+b};
    console.log("El resultado de la suma1 es:", suma1(1,2));
    const resta=(a,b)=>a-b;
    
    /*Mi función va a sumar siempre que a y b sean positivos
    Se retorno el resutado positivo
    Si el resultado es negativo, se enviará un mensaje de error
    */
   //Mi promesa
   /*
    const  suma=(a,b)=>{
        const operacionSuma = new Promise((resolve, reject) => {
            if(a>0 && b>0) 
            resolve(a+b);
            else
            reject("Solo se puede sumar números positivos");
        })
        return operacionSuma;
    };*/
    const  suma=(a,b)=>{
        const operacionSuma = new Promise((resolve, reject) => {
            if(a>0 && b>0)  setTimeout(()=>{resolve(a+b)},3000); //callback o función flecha tiempo de espera
            else
            reject("Solo se puede sumar números positivos");
        })
        return operacionSuma;
    };
    //Se determinará si el número ingresao es par
    // Si es par retornará true, caso conrario retorna false
    /*
    const esPar=(a)=>{
        return a%2==0?true:false;
    }*/
    //Convierto esPar a promesa que regresa como object promise
    const esPar=(numero)=>{
        return new Promise((resolve, reject) => {
            if(numero%2==0)
                resolve(true);
            else
                reject("El número no es par");
        });
    }
    
    console.log("El resultado de la resta es:", resta(4,3));
    //Consumir promesa, nuestro programa no se quedará esperando, a que llegue el resultado de la suma
    //No se detiene el flujo de programa 
    //Puedo tener más de un then
    //Cuando la promesa no regresa un obketo
    /*
    suma(5,6)
    .then(resultado=>{
        console.log("Promesa Suma: "+resultado);
        console.log("Es par?:"+ esPar(resultado));
        }) 
    .catch(error=>console.log("Promesa Rechazado por: "+error));*/
    //Cuando la promesa es un object promise
    suma(5,5)
    .then(resultado=>{
        console.log("Promesa Suma: "+resultado);
        return esPar(resultado); // nueva promesa
        })
    //Este then es para la segunda promesa, ya que pusimos return en la promesa esPar. Tambien pude hacer algo anidado como esPar.then().catch()
    .then(resultadoEsPAr=>{ // Esto, consume la promesa de esPar(resultado)
        console.log("Promesa es par?"+resultadoEsPAr)
    })
    .catch(error=>console.log("Promesa Rechazado por: "+error));
    console.log("No espero el resultado de la suma, para imprimir esto");

    async function calculos2(){
     
        //Existe otra forma de consumir la promesas usando Asyn-await
        //La función que contiene way debe ser asycnrona
        // Si se ejecuta el reject , me apare el resultado(mensaje), pero no lo estamos manejando por eso me aparece como error, necesita usar try y catch (Cuando suma es negativas)
        console.log("Await el resultado suma: "+ await suma(9,6)); // Espera a que este el resultado, hasta que suma regrese un resultado (sincrono)
        console.log("Se espera a que la suma sea realizada");

        //Para manejar el error con await , podemos usar los bloques try-catch
        try{
            console.log("Try, el resulato suma:"+await suma(6,-2));
            console.log("Se termino este aunto");
        }
        catch(error){
            console.log("Se generó un error;"+error);
        }
        console.log("Menaje despues de try-catch");
    }
    calculos2();

}
