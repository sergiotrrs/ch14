console.log("Teoria de la sesion JS03");

///DEclaracion de bloque
let nombre = "Sebastian";
{
    //este codigo esta en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre); 
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque " + apellido);

//Condicional if
let edad = 15;
console.log("Instruccion antes de if");
if(edad>15)
{
    console.log("if se ejecutA si la condicion es verdadera");
    console.log("Es mayo de edad ");
} else{
    console.log("Si la condicion es falsa, se ejecuta else");
}
console.log("Instruccion despues de if");

//Condicional if, else if, else
edad=18;
if(edad >18){
    console.log("Es mayor de edad, adulto");
} else if(edad>15){
    console.log("Es aborrecente");
} else if(edad>6){
    console.log("Es un menor");
}else {
    console.log("Es un bebe");
}
console.log("Instruccion despues de if");

//Condicional switch
let opcionElegida = 1;

switch(opcionElegida){//La evaluacion es de forma escrita
    
    case 0:
        console.log("Accedio a ventas");
        let submenu =2
        switch (submenu){
            case 0:
                console.log("Aca amamos a los gatos");
                break;
                default:
                    console.log("Cualquier opcion, nos quedamos con los gatos");
        }
        break;
        case 1:{
            console.log("Accedio a credito");
            let submenu = 0;
            switch (submenu){
                case 0:
                    console.log("Pagame");
                    break;
                    default:
                        console.log("Elektra te tiene en la mira");
            }

            break;
        }

            case 2:
        console.log("Accedio a cobranza");
        break;

        case 9:
        case 3:
        case 4:
        case 5:            
        console.log("Se transfiere con un operador");
        break;
        default:
            console.log("Opcion invalida");
            break;
}
console.log("Instruccion despues de case");

///Operardor ternario
///Es como un if pero chiquito
edad = 10;
let esMayor = (edad>=18) ? "Puede votar" : "No puede votar";
console.log("Puede votar? " + esMayor);

//Ejercicio de comparacion
let age = "35"
let voteable;
age = Number(age);
if(isNaN(age)){
    voteable = "input is not a number";
} else {
    voteable = (age <18) ? "too young" : "old enough";
}
console.log(voteable);