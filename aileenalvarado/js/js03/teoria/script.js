console.log("Teoria de la sesion JS03"); 

//Declaracioon de bloqye 

{
    //este codigo esta en un bloque. 
    let nombre = "Mojca";
    var apellid = "Mojica";
    console.log("Nombre: " + nombre);
} 

//Esta linea no se ejecuta debido a la variable solo vive dentro del bloque
//console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque"); 


//Condicional if
let edad = 15; 
console.log("Instruccion antes de if")

//Si solo hay una condicion a evaluar, se pueden omitir las llaves en un if
if(edad > 18){
    console.log(" if se ejecuta si la condicion es verdadera")
    console.log("La edad es mayorde edad");
} else {
    console.log("Si ls condicion es falsa se ejecuta else");
}
console.log("Instruccion despues de if"); 

//Condicional if, else if, else 
edad = 18;
if(edad >18){
    console.log("Es mayor de edad, adulto")
}else if(edad > 15){
    console.log("Es adolescente")
}else if(edad > 6){
    console.log("Es un menor")
} else if(edad > 6){
    console.log("Es un bebe")
}

