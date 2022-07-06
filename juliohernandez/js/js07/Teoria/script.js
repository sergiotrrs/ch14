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
    let limite = tiempo + 5*60*1000;
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
 
