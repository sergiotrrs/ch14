console.log("JSO8 OPP clases");


//Definimos atributos 



/**
 * 
 * Pausa para recoradr 
 */

class Elote {

    // Definiendo atributos 
    tipo;
    color;
    costo;
    servido;


    // Definiendo un construc

    constructor(tipo="criollo", color="amarillo",consto = 0, servido="") {
        this.tipo = tipo;
        this.costo = costo;
        this.servido = servido;
      //  console.log(`se ha creado un objeto de tipo elote:
      //  tipo: ${this.tipo}
       // costo: ${this.costo}
       // servido en : ${this.servido}
        
        `);
    }
    
/* / relaizando metodos de mi clase 
imprimir(){
    return (`se ha creado un objeto de tipo elote:
        tipo: ${this.tipo};
        costo: ${this.costo};
        servido en : ${this.servido});
*/
}

}
 
const esquite = new Elote("blanco", 25,"vasito");
const vasoElote = new Elote("amarillo", 23,"vasito");
const doriloko= new Elote("mezcla fina",35,"bolsa");
const entero = new Elote("asado",20,"palito");


get costo(){
    return this.#costo;
}

set costo(nuevoCosto){
    this.#costo;
}

console.log("Cambio del costo:"+ esquite.costo);
console.log(esquite.imprimir());