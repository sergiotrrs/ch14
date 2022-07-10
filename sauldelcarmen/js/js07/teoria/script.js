console.log('Sesion JS07 Fetch API');

let x = document.getElementById('demo');

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
    console.log("nombre"+formulario.elements["nombre"].id);
    console.log("apellido"+formulario.elements["apellido"].value);
//se le indica una clave y un valor
    localStorage.setItem("Cohorte","Ch14");
    localStorage.setItem("nombre",formulario.elements["nombre"].value);
    localStorage.setItem("apellido",formulario.elements["apellido"].value);
    localStorage.setItem("datos", JSON.stringify(
    {
     nombre : formulario.elements['nombre'].value,
     apellido:formulario.elements['apellido'].value
     //expiracion: tiempo_en_milisegundos; //1 minutos de tiempo de expiracion
     	
     })
);
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    formulario.elements["nombre"].value = localStorage.getItem("nombre");
    formulario.elements["apellido"].value = localStorage.getItem("apellido");
    let datos = localStorage.getItem("datosUsuario");
    console.log(`Datos usuario: ${datos.nombre} ${datos.apellido}`);
}

function funcionCallBack(){
	console.log("2.-Se activa la funcion CallBack");
}
//console.log("1.- Antes de setTimeout");
//setTimeout( funcionCallBack ,3000);//setTimeout (Nombre_Funcion,ms a contar);
//setTimeout (function () {console.log("2.1.-Se activa mi funcion anonima")},3000);
//setTimeout (()=>console.log("2.2.-Se activa la funcion flecha"),3000);
//console.log("3.- Despues de setTimeout");

function imprimirHTML(datos){
    //console.log(datos);
    let demo = document.getElementById('demo');
    demo.innerHTML = "El dato es :"+datos;
}
function imprimir(datos){
    //console.log(datos);
}

function suma (a,b, fncMostrar){
    let suma = a+b;
    fncMostrar(suma);
}

//suma(3,5,imprimir);
//suma(2,8, imprimirHTML);

//************Promesas************
//miPromesa();
function miPromesa(){
    let promesa = new Promise((resolve, reject)=>{
     const expresion = true;
     if(expresion){
		 resolve("La promesa se resolvio, la abejita trae polen");
	 }
	 else{
		 reject("La promesa se rechazo, la abejita no trae polen");
	 }
    });
    //vamos a consumr la promesa con .then y .catch
    //promesa.then().catch(){
    promesa
	.then((valueResolve)=>console.log(valueResolve))
	.catch((valueReject)=>console.log(valueReject));
}

//************Promesas, Async-Await, try-Catch************
calculos();
async function calculos (){
//    const suma = (a,b)=>a+b;
//    console.log("El resultado de la suma es: "+suma(1,2));
    const resta = (a,b)=>a-b;
    console.log("El resultado de la resta es: "+resta(4,3));
 /**
  * Mi funcion va sumar, siempre que el resultado sea positivo
  * @param {number} a
  * se retorna el resultado positivo
  * si el resultado es negativo, se enviara un mensaje
  */
    const suma = (a,b)=>{
    const operacionSuma = new Promise((resolve, reject)=>{
       if(a>0 && b>0) resolve(a+b);
	   else reject("Solo se puede sumar numeros positivos");

    })
	return operacionSuma;
}
/**
 * Se determina si el resultado es par
 * si es par retornara true
 * si no es par, se retorna un mensaje del error.
 */
	const esPar = (numero)=>{
         //return (numero%2==0 true : false);
         return new Promise((resolve, reject)=>{
	if (numero%2==0) setTimeout( ()=>resolve (true), 3000);
	else reject ("El numero no es par");
	});
}
suma(5,5)
    .then(resultado=>{
	console.log("Promesa suma : "+resultado);
        //console.log("Es par?: "+esPar(resultado));
        return esPar(resultado);
    })
    .then(resultadoEsPar=>{ //Este .then, consume la promesa de esPar(resultado);
	console.log("Promesa es par?: "+resultadoEsPar);
    })
	.catch(error=>console.log("Rechazado por: "+error));
console.log("El resultado de la resta es: "+resta(4,3));
    //Existe otra forma de consumir las promesas, usando async-await
    //async function calculos(){---Para usar await,mi funcion debe ser async.
//  //Si se ejecuta el reject, me aparece el resultado (mensaje), No se maneja el error.
console.log("Await El resultado suma: "+ await suma(9,6));
//Para manejar el error con await, podemos usar los bloqes try-catch
try{
	console.log("Tru El resultado suma: "+ await suma(6,3));
        console.log("Se termino este asunto, vamos por elotes");

}
catch(error){
	console.log("Se genero un error por: "+error);
}

 console.log("El resultado de la resta es: "+resta(10,3));
 }
    
