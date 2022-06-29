console.log("Sesion JS02 Funciones");

//Function declaracion******************************** */
function multiplica (a,b){
    return a*b;
}
console.log("El resultado de multiplica es " + multiplica(3,5) );
//console.log("El resultado de multiplica es " + 15(Resultado) );


//Function expressions********************************* */
const suma = function(a,b){return a+b; };
const mult = function(a,b){return a*b; };
console.log("El resultado de la suma es " + suma(5,4));

//Uso de las funciones****************************************/
function areaCuadrado(funcion , lado){
    return funcion(lado , lado);
}
console.log("El area del cuadrado es " + areaCuadrado(mult, 5));

//Hoisting**********************************************************/
console.log("El resultado de la resta es " + resta(10,3));
//Para funciones expresadas no se eleva (no const)
//console.log("El resultado de la div es " + div(10,3));
//la llamada puede ir antes de la funcion gracias al hoisting de js
function resta(a,b){
    return a-b;
}
const div = function (a,b){return a/b};


//Self-invoking functios************************************************/
//Funciones que se autoinvocan 
(function(){
    console.log("Mensaje desde funcion autoinvocada");
})();

//Metodo de argumentos*******************************************************/
function perimetroRectangulo(ladoA=2 , ladoB=3){
    console.log("Perimetro Rectangulo " + (2*(ladoA+ladoB)));
    console.log("Parametros " + arguments.length);//arguments da la cantidad de argumentos que da en la entrada
    //console.log("valor de this " + this.arguments ); //this hace alucion
}
perimetroRectangulo(5,2);//aqui van los parametros que se mencionan en arguments
function encuentraMayor(){
    let mayor=0;
    for (let index = 0; index < arguments.length; index++) {
        if(arguments[index]>mayor){
          mayor = arguments[index];
        }

    }
    return mayor;
}
console.log("El bunero mayor es " + encuentraMayor(2,5,7,81,21));


//Arrow Function************************************************************************/
const residuo = (a,b) => a % b ; //La funcion flecha es la mas utilizada(estudiar)
console.log("El residuo es " + residuo(9,2) );

//Funciones dentro de objetos***********************************************************/
const participante = {
    nombre: "Jorge",
    apellido: "Montalvo",
    nombreCompleto: function(){
        return this.nombre + "" +  this.apellido;
    //this se usa para hcaer referencia al objeto al momento de llamarlo
    } ,  //importante la coma para agregar otra clave valor  
    asiste: true
};
console.log("Nombre del participante: " +  participante.nombreCompleto());
console.log("El participante asiste? " + participante.asiste);