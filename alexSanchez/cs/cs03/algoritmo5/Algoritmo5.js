alert("Este programa identifica si un numero es la suma de los otros 2")
let numA= prompt("Escribe el primer numero")
let numB= prompt("Escribe el segundo numero")
let numC= prompt("Escribe el tercer numero")


if (numA==(numB+numC)) {
    alert("El numero "+numA+" es la suma de los otros dos")
}
else if (numB==(numA+numC)){
    alert("El numero "+numB+" es la suma de los otros dos")

}
else if( numC==(numA+numB)){
    alert("El numero "+numC+" es la suma de los otros dos")


}
else{
    alert("Ningun numero es la suma de los otros 2")
}