console.log("Sesión JS04");

const miArreglo=["dato String", false, 23, null];

/*Imprimir arreglo( ver como me lo da).
*/
console.log(miArreglo);


//toString me imprime los elementos separados por coma
/*null lo imprimira como "", porque es vacio*/
console.log(miArreglo.toString());

//join, me los separa con el simbolo que desee
console.log(miArreglo.join("/"));
console.log(miArreglo.join(" "));

const frutas=["mango","pepino","melón","guanábana","aguacate","kiwi"];

//Eliminar el ultimo dato
let fruta=frutas.pop();
console.log(frutas.join(" * "));
console.log("Fruta eliminada:"+fruta);

//Agregar fruta al final del arreglo
frutas.push("uva"); // Agregamos al final del arreglo
                    // y devuelve la longitud del arreglo
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta=frutas.shift();
console.log(frutas.join(" * "));
console.log("Fruta eliminada:"+fruta);

//Agregar un elemento al inicio del arreglo y retorna longitud del nuevo arreglo
frutas.unshift("fresa");
console.log(frutas.join(" * "));



/**
/**
 * FIFO: push (agregar) - shift(sacar)
 *  i    0,1,2,3  <--- direcccion
 *      [a,b,c,d] ---- [a,b,c,d,e] ---- [b,c,d,e]
 * LIFO: push(agregar) - pop(sacar)
 *  i    0,1,2,3      0,1,2,3,4     <----- direccion
 *      [a,b,c,d] ---- [a,b,c,d,e] ----- [a,b,c,d] 
 */
/***************************COLAS ******************************/
console.log("COLA");
const cola=[];
console.log(cola.toString());
cola.push(1);
console.log(cola.toString());
cola.push(2);
console.log(cola.toString());
cola.push(3);
console.log(cola.toString());
cola.shift();
console.log(cola.toString());
cola.shift();
console.log(cola.toString());
cola.shift();
console.log(cola.toString());



/***************************PILAS ******************************/

console.log("PILA");
const pila=[];
console.log(cola.toString());
pila.push(1);
console.log(cola.toString());
pila.push(2);
console.log(cola.toString());
pila.push(3);
console.log(cola.toString());
pila.pop();
console.log(cola.toString());
pila.pop();
console.log(cola.toString());
pila.pop();
console.log(cola.toString());


/***************************FOR********************************* */

for(let i=0;i<10;i++){
    console.log(i);
}

/**
    let a=0;
    for(let i=0;i<10;i++){
    a++;
    console.log(i);
} 
for(let i=0,a=0;i<10;i++){
    a++;
    console.log(i);
}
for(let i=0,a=0;i<10; i++, a++){
    a++;
    console.log(i);
}

a+=2 -> a=a+2;
 * 
 */