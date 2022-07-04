console.log("Teoria de la sesion JS03");


//Declaracion de bloque*********************************************
let nombre = "sebastian";
{
    //Este codigo esta en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre dentro del bloque: " + nombre);
}

console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condicional if********************************************************
let edad = 20;

//si la condicion es false no se ejecuta
if (edad > 18) {//se ejecutara todo lo que este en el bloque {}
    console.log("if se ejecutara si la condicion es verdadera");
    console.log("Es mayor de edad el pibe");
} else {
    console.log("Si la condicion es false , se ejecuta el else");
}


//Condicional if , else if , else****************************************************
edad = 18;
if (edad > 18) {
    console.log("Es mayor de edad , adulto");
} else if (edad > 15) { //se agrega otra condicion en cada if else
    console.log("Es aborrecente");
} else if (edad > 6) {
    console.loc("Es un menor");
} else {
    console.log("Es un baby");
}

//condicional Switch*****************************************************************************
//para menus o listas
//no se pueden utilizar operadores logicos && , || , etc.
let opcionElejida = 2; //Declaracion de varible opcionElejida , se ejecutara el case que tenga el numero declarado
switch (opcionElejida) {
    case 0:     //En caso de ser la opcion elejida 
        console.log("Accedio a ventas");
        let submenu = 2//cuando hay submenu
        switch (submenu) {//submenu con otro switch case
            case 0:
                console.log("Aca amamos a los dinos");
                break;
            default:
                console.log("Cualquier opcion , nos quedamos con los dinos");
                break;
        }
        break;//un break por cada case
    case 1:
        console.log("Accedio a credito");
        break;
    case 2: //se ejecutaria este dejando opcionElejida=2
        console.log("Accedio a cobranza");
        break;
    case 9:
        console.log("Te trasfiere con un operador");
        break;
    default://siempre al final por si no se cumple ningun caso 
        console.log("Opcion invalida");
        break;
}


//Operador condicional ternario***************************************************************************************/
//Es como un if chikitiko
edad=19                  //pueden ser strings en ves de boleanos
let esMayor = (edad>=18) ? true     :  false; 
//varBoleana   condicion   si cumple     si no
console.log("Puede votar? " + esMayor);

//Ejercicio de comparacion**********************************************************************************************/
let age="19"
let voteable;
age = Number(age);
if(isNaN(age)){//pregunta si age es NaN
    voteable = "Input is not a number";
}else{
    voteable = (age < 18) ? "Too young" : "Old enough";
}                        //si se cumple      si no
console.log(Voteable);//este console imprime la variable