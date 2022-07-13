console.log("Sesión 07 API Fetch");
{
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
}


function guardarDatos() {
    const formulario = document.getElementById("formulario");
    console.log(`Nombre: ${formulario.elements['nombre'].value}`);
    console.log(`Apellido: ${formulario.elements['apellido'].value}`);

    //Se indica clave y valor
    localStorage.setItem("Cohorte", "Ch14");
    localStorage.setItem("nombre", formulario.elements['nombre'].value);
    localStorage.setItem("apellido", formulario.elements['apellido'].value);
    //Se debe convertir el objeto a JSON con función JSON.stringify para guardarlo
    localStorage.setItem("datosUsuario", JSON.stringify( 
        {
            nombre: formulario.elements['nombre'].value,
            apellido: formulario.elements['apellido'].value,
            expiracion: Date.now()
        }
        ));
}

function recuperarDatos() {   
    const datos = JSON.parse(localStorage.getItem("datosUsuario")); //Se reconvierte a Objeto para leerlo
    const formulario = document.getElementById("formulario");
    
    //Leer el momento de guardado:
    let tiempo = datos.expiracion;

    //Corroborar el lapso permitido:
    let limite = tiempo + 1*60*1000;
    if (Date.now()<=limite){
        //Recupera los datos
        formulario.elements['nombre'].value = localStorage.getItem("nombre");
        formulario.elements['apellido'].value = datos.apellido;
        //formulario.elements['apellido'].value = datos['apellido']; Otra forma de encontrar un elemento de un objeto
    }else{
        formulario.elements["nombre"].placeholder = "Ingrese nombre";
        formulario.elements["apellido"].placeholder = "Ingrese apellido";
    }
    
}

/* * * * * * * * * * * * * * * * * * * * * Función setTimeout y Funciones * * * * * * * * * * * * * * * * * 
function callBack() {
    console.log(`2. Se activa la función callBack`);
}

console.log("1. Antes de setTimeout");
//setTimeout(callBack, 3000); //setTimeout(nombre_funcion, ms_a_contar)
//setTimeout(function(){console.log("2.1. Se activa mi función anónima")},3000); //Se acostumbra ocupar funciones anónimas dentro
setTimeout(()=>{
    console.log("2.2. Se activa la función flecha.");
    return "se retorna algo"; //Si tiene más de dos líneas, debe de escribirse un return
},3000); //Se reduce con función flecha.
console.log("3. Después de setTimeout");

/**
 * 1
 * 3
 * 2 (después de 3 segs)
 */

/* * * * * * * * * * * * * * * * * * * * * PROMESAS :'( * * * * * * * * * * * * * * * *  */
function miPromesa(){
    let promesa = new Promise((resolve, reject) => {
        const expression = true;
        if (expression){
            resolve ("La promesa se resolvió, la abejita trae polen");
        }else{
            reject("La promesa NO se resolvió, la abejita no trajo polen;")
        }
    });

    //Vamos a consumir la promesa con .then (resolve) y .catch (reject)
    //promesa.then().catch();
    promesa
        .then(valueResolve => console.log(valueResolve))   //Aquí no se pone un ';'
        .catch(valueReject => console.log(valueReject));
}
 
/* * * * * * * * * * * *  Promesas, Async-await y try-catch */
async function calculos(){
    //const suma = (a,b)=> a +b;
    //console.log(`El resultado de la suma es: ${suma(1,2)}`);
    const resta = (a,b)=> a -b;
    console.log(`El resultado de la resta es: ${resta(1,2)}`);

    const suma = (a,b) => {  
        const operacionSuma = new Promise((resolve,reject)=>{
            //if (a>0 && b>0)resolve(a+b);
            if (a>0 && b>0)setTimeout(()=>resolve(a+b),3000);
            else reject("Solo se puede sumar números positivos");
        })

        return operacionSuma;

    }
    const esPar = (numero)=>{
        //return(a%2==0 ? true : false);
        return new Promise((resolve, reject) => {
            if (numero%2==0) setTimeout(()=> resolve(true),3000);
            else reject("El número NO es PAR");
        })
    }

    suma(5,6)
        .then(resultado => {
            console.log("Suma: " + resultado);
            //console.log(`Es par? ${esPar(resultado)}`);
            return esPar(resultado); //Regresa Resultado para asignárselo a resultadoEsPar
        }) //Resolve lo entrega en resultado
        .then(resultado => console.log(`Promesa es par? ${resultado}`)) //Este .then recibe y espera al anterior .then.
        //Aunque no hay un reject para EsPar, el único reject recibe todos los reject

        //Sólo se puede poner un .catch
        //.catch(error=>console.log(`Promesa es impar?${error}`))
        .catch(error => console.log("Rechazado por: "+error)); //reject va a entregar en error

        //Existe otra forma de consumir promesas: async-await
        //Para usar await, mi función debe ser async
        //Si se ejecuta el reject, me aparece el resultado (mensaje), No se maneja (controla) el error.
        console.log(`Await El resultado suma: ${await suma(9,-6)}`); //Sin el await se retorna un object 
        //No se ejecuta nada hasta que la promesa se cumple.
        console.log("Despues del await");

        //Para manejar el error con await, podemos usar los bloques try-catch
       { try {
            console.log("Try el resulado suma: "+ await suma(6,3));
            console.log("Se terminó este asunto, vamos por elotes");
        } catch (error) { //Trae el error de .catch
            console.log("Se generó un error por: " + error)
        }}
}
calculos();