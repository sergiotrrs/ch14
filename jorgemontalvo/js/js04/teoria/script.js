console.log("Teoria 4")

//Como definir un arreglo*****************

const miArreglo = ["dato String", false, 23, null]
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("."));

//Eliminar el ultimo dato del arreglo 

const frutas=["mango","plátano","durazno","melón","aguacate","kiwi"]
let fruta = frutas.pop(); //se elimina el ulrumo elemento del arreglo
console.log(frutas.join(" * "))
console.log("Fruta eliminada " + fruta)
//Agregar un elemento al final del arreglo****************

console.log(frutas.push("uvas"));//Agregamos el elemeneto al final del arreglo.
                    //y devuelve la longitud del arreglo
console.log(frutas.join(" - "));
