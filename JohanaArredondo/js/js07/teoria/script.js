console.log("Sesion JS07");

let x = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is nor supported by this browser"
    }
}


function showPosition(position){
    x.innerHTML = "Latitude: "+ position.coords.latitude+
"<br>Longitude: "+ position.coords.longitude;

}

function guardarDatos(){
    const formulario = document.getElementById('formulario');
    console.log("nombre: "+formulario.elements['nombre'].id);
    console.log("apellido: "+formulario.elements['apellido'].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte",14);
   // localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
    {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value,
        //expiracion: tiempo_en_milisegundos 
    })
        
    );

}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
  //  formulario.elements['nombre'].value =localStorage.getItem("nombre");
    //formulario.elements['apellido'].value =localStorage.getItem("apellido");
    let datos =JSON.parse(localStorage.getItem("datos"));
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido;

}


function imprimir(dato){
    console.log("dato: "+dato);
}

function imprimirHTML(dato){
 //   console.log("dato: "+dato);
 let demo = document.getElementById("demo");
 demo.innerHTML = "el dato es: " +dato;
}

function suma(a,b, fncMostrar){
    let suma = a+b;
    fncMostrar(suma);
}

//suma(3,5, imprimir);
//suma(2,8, imprimirHTML);

function funcionCallBack(){
    console.log("2. Se activa la funcion CallBack")
}

/* console.log("1. Funcion antes del setTimeout");
//setTimeout(funcionCallBack , 3000)//setTimeout(Nombre_funcion, ms a contar)
//setTimeout(function(){console.log("2.1. Se activa mi funcion anonima") }, 3000 );
setTimeout(()=> console.log("2.2. Se activa funcion flecha"), 3000);
console.log("3. Despues de setTimeout"); */


//miPromesa();

function miPromesa(){
   const promesa = new Promise( (res, rej) => { 
    const expresion = false;
    if(expresion){
        res ("La promesa se resolvio");
    }else{
        rej("La promesa NO se resolvio, la abejita no trajo polen");
    }

  });

  //vamos a consumir la promesa con .then y .chatch
 // promesa.then().catch();
    promesa
    .then((valueResolve)=> {
        respuesta = valueResolve;
        console.log(valueResolve) 
    })
    .catch((valueReject) => console.log(valueReject));
}


//promesas, async-await, try-catch
calculos();
async function calculos(){

    const res = (a,b) => a-b;
    
    /**
     * 
     * mi funcion va a sumar, siempre que a y b sean positivos 
     * @param {*} b 
     */
    
    
    const suma = (a, b) =>{
        const operacionSuma = new Promise((resolve, reject) => {
            // if(a>0 && b>0) resolve (a+b);
            if(a>0 && b>0) setInterval(()=>resolve(a+b),3000); 
            else reject("Solo se puede sumar números positivos");      
        })
        return operacionSuma;
    }
    /**
     * se determina si el numero es par, si lo es te retorna true, si no se retorna un mensaje de error
     */
    const esPar = (numero) =>{
        //return (a%2 ? true : false);
        return new Promise((resolve, reject) =>{
            if(numero%2 == 0) resolve(true);
            else reject ("El numero no es par");
        })
        
    }


 /*    suma(5, 6)
    .then( resultado=> {
        console.log("Promesa suma:" + resultado);
        //console.log("es par? " + esPar(resultado));
        return esPar(resultado);
    })
    .then(resultadoEsPar =>{
        console.log("Promesa es par? "+ resultadoEsPar);
    })
    .catch( error => console.log("Rechazado por: " + error));
     */

    
    //existe otra forma de consumir las promesas, usando async-await
    //para await mi funcion debe ser async
    //si se ejecuta el reject me aparese el resultado (mensaje), no se maneja el error
   // console.log("Await El resultado suma "+await suma(9,6));
   
   //para manejar el error con await podemos usar los bloques try-catch
    try{
        console.log("Try el resultado suma "+await suma(-6,3));
        console.log("Se termino este asunto vamos por elotes");
    }
    catch(error){
        console.log("Se genero un error por: "+error);
    }



    console.log("resultado de la resta "+res(10,3));
}

