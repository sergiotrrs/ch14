//nuevo
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
    console.log("nombre: " + formulario.elements['nombre'].id);
    console.log("apellido: " + formulario.elements['apellido'].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte",14);
    //localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
     {
        nombre: formulario.elements['nombre'].value,
        apellido:formulario.elements['apellido'].value
        //expiración: tiempo_en:milisegundos; //1 minuto de tiempo de expiracion
        //es decir que si se guarden los datos, pero ya no los puedas leer

    })
    );
}


function recuperarDatos(){
    const formulario = document.getElementById('formulario');
   // formulario.elements['nombre'].value = localStorage.getItem("nombre");
   // formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = JSON.parse( localStorage.getItem("datos") );
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido ;
}


//******************************************** */

function imprimir(dato){
    console.log("el dato es: " + dato);
}

function imprimirHTML(dato){
    //console.log("el dato es: " + dato);
    let demo= document.getElementById("demo");
    demo.innerHTML="el otro dato es: "+ dato;
}

function suma(a,b,fncMostrar) {
    let suma=a+b;
    fncMostrar(suma);
}

//suma(3,5,imprimir);
//suma(2,8,imprimirHTML);


//*******************Funcion setTimeOut********
//settimeout ya está determinada
//( nombre de función, ms a contar)
// setTimeout(funcionCallBack() ,3000 );
//se pone el nombre de la función sin ()
//settimeout nos llama la función despues de ese tiempo establecido
//por eso no tenemos que poner () porque sino 
//se ejecuta en ese momento la función

function funcionCallBack() {
    console.log("2. se activa la función CallBack");
    return"dato x"
}

//console.log("1. antes del settimeout");

    //setTimeout(funcionCallBack ,3000 );
    //setTimeout(function(){console.log("2.1 se activa funcion anonima")}, 3000);
//se pone lo de la función anonima para no 
//andar navegando en el codigo y encontrar la función 
//a la que se hizo referencia

    //setTimeout(()=>console.log("2.1 función flecha"), 3000);
//esto es lo mismo que o anterior, pero mas reducido
//los () hacen referencia a que es ya una función, 
//no se está llamando a otra función
    //console.log("3. despues de settimeout");


//cuando se requieran mas de una instrucción en la función,
//flecha se utilizan los {} como en la plantilla predeter.
//que ya viene en VSC 


//**************Promesas**********
//miPromesa();
function miPromesa() {
    
    let promesa=new Promise((resolve, reject) => { 
        const expresion=true;
        if (expresion) {
            resolve ("La promesa se cumplió");
        }
        else{
            reject("NO se cumple la promesa");
        }
    });
    
    //Para consumir la promesa se usa: promesa.then().catch();
    //cuando esté lista mi promesa se ejecuta
    promesa
    .then((valueResolve) => console.log(valueResolve))
     .catch((valueReject) => console.log(valueReject) );

    }

/**
 * En la función flecha se le debe poner un return
 * solo cuando hay mas de 2 instrucciones
 */

//**************Promesas, async-await, try-catch**********
calculos();
async function calculos(){
    // const suma = (a, b) => a+b;
    // console.log("El resultado de la suma es: "+ suma (2,1));
    const resta = (a, b) => a-b;
    
    /**
     * La función suma solo si el resultado es positivo
     * si es negativo se envia un mensaje 
     */
    const suma =(a,b)=>{
        const operacionSuma =new Promise((resolve, reject) => {
           //if (a>0 && b>0) resolve (a+b);
           if (a>0 && b>0) setTimeout(() => resolve(a+b) , 3000);
           else reject ("solo se puede sumar numeros positivos");
        })

        return operacionSuma; 
    }
    /**
     * Si el numero ingresado es par, será true
     * si no es par, será error 
     */
        // const esPar=(numero)=>{
        //     return (numero%2==0 ? true :false);
        // }

    const esPar=(numero) => {
        //const operacionEsPar =new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {
            if (numero%2==0) resolve(true);
            else reject("el numero no es par");
        })
    }

    suma(5,6)
    .then(resultado=>{
        console.log("Suma prometida: "+ resultado)
        
        /**
         * console.log("es par?: "+ esPar(resultado)); 
         * se manda a llamar a la función "esPar" para 
         * que evalue el "resultado" que es lo que sale
         * de .then, que es la suma(5,6)
         * como esPar ahora es una promesa tenemos que añadirle
         * un return, pa que el then nos de la variable
         * "resultado"
         */
        return esPar(resultado);
    })

    /**
     * este segundo .then agarra la promesa más proxima
     * que en este caso es la promesa "esPar" 
     * y eso sucede porque justo en esa promesa se
     * escribió el "return"
     */
    
    .then (resultadoEsPar=>{
        console.log("promesa es par?: "+ resultadoEsPar);
    })

    //el valor de resolve lo va a agarrar la variable resultado
    
    .catch(error=>console.log("Rechazado por: "+error)); 
    //el valor de reject lo va a agarrar la variable error
    
    //Existe otra forma de consumir las promesas
    //usando ASYNC-AWAIT 
    //si solo dejamos la isntrucciòn del await asi: 
    //console.log("Await el resultado de la suma: "+ await suma(-9,6));
    //quiere decir que no estamos considerando los errores 
    //que puedan surgir en suma 

    //console.log("Await el resultado de la suma: "+ await suma(-9,6));
    
    //Para manejar los errores del await, se usan los bloques 
    //try-catch

    try {
      console.log("Try el resultado suma: " + await suma(-6,3));  
    } 
    
    //la variable error atrapa el reject de la promesa suma
    //podriamos poner solo "e" en vez de error si queremos

    catch (error) {
        console.log("se genero un error por: " + error);
    }
    //Para usar await, la funciòn que se usa dentro 
    //de la instrucciòn debe ser asìncrona
    console.log("El resultado de la resta es: "+ resta (2,1));
}


/**
 * las promesas es para que codigo no se quede 
 * esperando la instrucción anterior, si no que 
 * pueda hacer otras cosas y si se cumple pues 
 * ya regresa y cumple o no la promesa
 * por ejemplo en el codigo anterior se imprime la resta
 * aunque aun no se cumpla la promesa
 */

/**
 * Con el Await funciona diferente, no se ejecuta nada
 * hasta que se haga esa lìnea de còdigo
 */

