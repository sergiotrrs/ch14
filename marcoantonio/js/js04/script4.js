console.log("Sesión 3504");

// Como definir un arreglo ***********

const miArreglo = ["data sting",false,23,null,true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));


//  Eliminar el ultimo dato del arreglo y pasarlo a una variable ****
const frutas = ["mango","patano","melon","Guanabana","aguacate","kiwis"];
let fruta = frutas.pop(); // se elimina el último elemento del arreglo
console.log(frutas.join(" * "));
console.log("Fruta eliminada" + fruta);

//Agregar un elemnto al final del arreglo ************

frutas.push("uvas"); // Agegamos el elemnto al final del arreglo 
// y devuelve la longitud del arreglo 
console.log(frutas.join(" - "));

// Elimina el primer elemento del arreglo y pasarlo a una variable ********
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Frutas eliminadas"+ fruta);

// Agrega un elemento al inicio del arreglo **********

console.log(frutas.unshift("fresa");
console.log(frutas.join(" - ")); 
)

// Metodo que se utiliza para hacer un FIFO en arreglos *****

/* 
 *------FIFO: unshift - shift

 *----- [a,b,c,d] -> [e,a,b,c,d] -> [a,b,c,d]

 *-----LIFO: push -> pop 
    
 *------[a,b,c,d] -> [a,b,c,d,a] -> [a,b,c,d]
 
*/

/* 

let text = "";
for(let i = 0; i < cars.length; i++) {
    text+ = cars[i] + "<br>";
}

document,gitElementById("demo").innnerHTML = text;


*/







/*  

* for (initial)
*/

for (let index = 0; index<10; inex = index + 1) console.log(index);

console.log("instruccion al final del for");



//----------------------------------------------


for (var maga = 0; maga<5; maga = maga +1 ) {
    console.log(maga);
}

console.log("valor de MAGA"+maga);
  


or (let index=0, a=0;index<3; index++, a+=2){
    console.log(index,a);
}



//EL ciclo for podria tener un cuerpo (bloque) de instrucciones ******
/* let i = 0 
for(; i<100; i++);
console.log(i);

*/
// while( confirm("¿Quieres continuar?" ))  console.log("Pulsa aceptar");

i = 0;
while (1<10) {
    console.log("Valor de i en while"+i);
    i++;
}


// EL hermano de while, se llama Do-while -----

let nunConciertos = 1;
do{
    console.log("Veces que fui al concierto"+nunConciertos);
     nunConciertos++
} while ("¿Puedo ir al concierto");



let numMuseo = 1; 
while (confirm("Puedo ir al museo")) {
    console.log("Veces que fui al museo" + numMuseo);
    numMuseos++;
}



// for  in, sirve para iterar un arreglo
const carros = ["VW", "Audi", "Seat", "BMW", "Lobo Harly Davinson"];
// usando estructura for
for(let i=0; i<carros.lenght; i++) console.log("con for " + carros[i]);

// usando for each
carros.forEach((auto)=> console.log("con for each " +auto));

// usando for in
for(let auto in carros) console.log("con for in " +carros[auto]);


// arreglo de dos dimensiones
// const cohortes = [["Marihan", "Adrián", "Gustavo"], ["Miri", "Emiliano", "Abi"]];
// console.log(cohortes[0][2]);


// ccon for each
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));



for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}











