console.log("Sesion js04");


// Como definir un arreglo

const miArreglo = ["dato string", false, 23, null];


console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join(" "))

// Eliminar el ultimo elemento del array y colocar una variable

const frutas = ["mango", "platano", "melon", "Guanabana","Aguacate","Kiwi"];

frutas.pop();//Se elimina el ultimo elemento del arreglo y devuelve el elemento eliminado
console.log(frutas.join(" * "));
console.log('fruta eliminada '+ frutas );

// Agregar un ultimo elemento al final al final del arreglo y devuelve la longitud del arreglo.

console.log(frutas.push("uvas"));
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable****

fruta = frutas.shift();
console.log(frutas.join(' - '));
console.log("fruta eliminada " + fruta)

// Agregar un elemento al inicio del arreglo*****

frutas.unshift("fresa");
console.log(frutas.join(' - '));

//FIFO: push - shift primero en entrar primero en salir

// 0, 1, 2, 3 
//[a, b, c, d] -> [a, b, c, d, e] -> [b,c,d,e]

//LIFO: push - pop

//0,1,2,3   0,1,2,3,4
//[a, b, c, d] -> [a, b, c, d, e] -> [a,b,c,d]


//For
/*for (let index = 0; index > 5; index = index + 1 ) 
console.log(index);
console.log("Instruccion al final del for");*/

/*for (let index = 10; index > 0; index = index - 1 ) 
console.log(index);
console.log("Instruccion al final del for");*/

/*for(var maga = 0; index > 5; index = index + 1 )*/

/*for (let index, a=0;index<3; index++, a+=2){
    console.log(index,a);
}*/


/*let index = 0, a=0;
for (; index < 3; index++, a+=2) {
    console.log(a , index);
}

console.log(´final index ${a} - ${index}´);*/


//Ciclo sin inicializacion en la parte de la condicion.

/*index = 0;

for ( ; ; ){
    if (index > 3) break;
    console.log(index);
    index++;
};*/

//Aqui imprime 100 nada mas porque el ; cierra nuestro ciclo 

/*let i = 0;

for(; i<100; i++)
console.log(i);*/

//Ciclo while 


///while (confirm("Quieres continuar") ) console.log("Pulso aceptar"); se repite hasta siempre.

/*i =0;
while(i < 10){
    console.log('valor de i en while ' + i);
    i++;
}*/
// Solo se ejecuta cuando cumple la condicion
/*i = 0;
while(i < 10) {

    if(i ==5) break;
    console.log("Valor de i en while " + i)
    i++;
}*/

// do while
/*let numConciertos
do {
    console.log("Veces que fui al concierto? " + numConciertos)
    numConciertos++

  }while (confirm("¿Puedo ir al concierto? ") );




  let numMuseo = 1;

  while ( confirm("puedo ir al museo")) {
    console.log("Veces que fui al museo " + numMuseo)
    numMuseo++;
  }*/

  //formas de iterar un arreglo

 /* let carros = ["VM", "Audi", "Seat", "BMW"];

  for(let i = 0; i< carros.length; i++) console.log("Con for " + carros[i]);
  carros.forEach(auto => { console.log("Con for-each " + auto)});*/

//FOR IN
/*let carros = ["VM", "Audi", "Seat", "BMW"];
for(let auto in carros) console.log("Con for in " + carros [auto]);*/

//Arreglos dimensiones
const cohortes = [["maria", "juan", "luis", "BMW"], ["VM", "Audi", "Seat", "BMW"]]

//forEach
cohortes.forEach(fila => fila.forEach(columna => console.log(columna)));

//For in 

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

//for of 
for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
}



//console.log(cohortes.join(''))

// ciclo for 
/*for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}*/







