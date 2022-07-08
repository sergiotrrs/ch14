console.log("JS08 OOP Clases");


/**
 * 
 * formas de crear un arreglo
 */
// const miArreglo = [1, 2, 3, 4];
// const miArregloConstructor = new Array(10);

// console.log(miArreglo);
// console.log(miArregloConstructor);
//todas las clases incian con mayuscula

class Elote{
    //definiendo atributos
tipo;
costo;
servido;

//definiendo constructor
constructor(tipo="criollo", costo=0, servido=""){
    this.tipo = tipo;
    this.costo = costo;
    this.servido = servido;
    // console.log(`se ha creado un objeto elote.
    //  tipo: ${this.tipo}
    //  costo:${this.costo}
    //  servido en:${this.servido}
     
    
}
//realizando metodos de mi clase
imprimir(){
    return (`se ha creado un objeto elote.
    tipo: ${this.tipo}
    costo:${this.costo}
    servido en:${this.servido}
    `);

}
}

const esquite = new Elote("blanco", 25, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
    const doriloko = new Elote("mezcla fina", 35, "bolsa");
    //const entero = new Elote (undefined, undefined, "palito");
    const entero = new Elote("asado", 20, "palito");

console.log(esquite.imprimir());



