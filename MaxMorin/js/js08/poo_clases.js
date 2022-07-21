console.log("poo clases");

//recordando cosas
/* const miArreglo = [1, 2, 3 ,4];
const miArregloConstructor = new Array(10);

console.log(miArreglo);
console.log(miArregloConstructor); */

//--------------------------------------------------------


class Elote {//todas las clases empiezan con mayuscula//
    //definiendo atributos
    tipo;
    costo;
    servido;


    //definiendo constructor.
    constructor(tipo= "criollo", costo=0, servido=""){
        this.tipo = tipo;
        this.costo = costo;
        this.servido = servido;
        /* console.log(`se ha creado un objeto tipo:
         tipo: ${this.tipo}
         costo: ${this.costo}
         servido en: ${this.servido}
        `); */
    }
    
    // realizando metodos de mi clase
    imprimir(){
        return (`se ha creado un objeto tipo:
         tipo: ${this.tipo}
         costo: ${this.costo}
         servido en: ${this.servido}
        `);
    }

}
//SE CREA EL OBJETO TIPO ELOTE 
const esquite = new Elote("blanco", 25, "vasito"); 
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new  Elote("mezcla fina", 35, "bolsa");
const entero = new Elote("asado", 20, "palito");

console.log(esquite.imprimir() );//con () para llamar la funcion