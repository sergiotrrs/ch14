console.log("Teoría de la sesión JS03");

//Declaración de bloque
let nombre ="Sebastián";
{
  //Este código está en bloque.
  let nombre = "Valeria";
  var apellido = "Mojica";
  console.log("Nombre: " + nombre);  
}

console.log("Nombre fuera del bloque: " + nombre);

//Conditional if
console.log("instrucción antes de if");

//if ejecuta todo lo del bloque
let ed = 19;
if (ed > 18) {
    console.log("if se ejecuta si la condición es verdadera");
    console.log("Es mayor de edad");
} else {
    console.log("Si la condición es falsa, se ejecuta else");
}
console.log("Instrucción después del if");
      

//condicional if, else if, else ****
let edad = 15;
if (edad>18){
    console.log("Es mayor de edad, adulto");
} else if (edad>15){
    console.log("Es aborrecente");
} else if (edad>6) {
    console.log("Es un menor");
} else {
    console.log("es un bebé");
}


//conditional Swich

/*Para no hacer l siguiente:
let opciomElegida=4;

if (opciomElegida===0){
    console.log("Accedio a ventas");
}else if(opciomElegida===1){
    console.log("Accedio a crédito");
}else if(opciomElegida===2){
    console.log("Accedió a cobranzas");
}else if(opciomElegida===9|| opciomElegida===4||opciomElegida===5||opciomElegida===6){
    console.log("Se transfiere con un humano");
}else{
    console.log("Opcion inválida");
}
*/

//Uso switch
let opcionElegida = 0; 

switch (opcionElegida) {
    //los casos deben ser del mismo tipo de dato que el declarado en la variable
    case 0:{
        console.log("Accedió a ventas");
        let submenu = 2;
        switch (submenu) {
            case 0:
                console.log("Acá aamos los dinos");
                break;
                default:
                    console.log("Págame");
        }
        break;
    }
    case 1:{
        console.log("Accedió a crédito");
        break;
    }
    case 2: {
        console.log("Accedió a cobranza");
        break;
    }
    case 9:
        case 3:
        case 4:
        case 5:
        console.log("Se transfiere con un humano");
        break;
    default:
        console.log("Opción inválida");
        break;8
}

//Operador ternario**
//Es como if, pero en chiquito

edad = 5;
let esMayor = (edad>18) ? "Puede votar" : "No puede votar";
console.log("¿Puede votar? " + esMayor);


//Ejercicio de comparaciones**
let age = "15"
let voteable;
age = Number(age);
if(isNaN(age)) {
    voteable = "Input is a not number";
} else {
    voteable = (age < 18) ? "Too young" : "Old enough"; 
}
console.log(voteable);
