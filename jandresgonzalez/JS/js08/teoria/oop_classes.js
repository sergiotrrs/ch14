/**
 * Hasta el momento hemos practicado objetos
 * Ahora practicaremos clases
 */
//console.log("Link nuevo");


/**
 * 
 * 
 * const miArregloConstructor = new Array(10);
 * Array con constructoor. Crea 10 elementos vacíos
 * 
 * 
 * 
 */

//--------------------------------------------
//Las clases se definen en mayúscula, y sus atributos y métodos
class Elote {
    //Definiendo atributos
    tipo;
    costo;
    servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo="10", servido=" ") {
        this.tipo = tipo;
        this.costo = costo;
        this.servido = servido;
/*      console.log(`Se ha creado un objeto de tipo elote de 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido: ${this.servido}`);
        console.log("Y es de tipo..." + tipo); */
    }
    //Realizando métodos de mi clase
    imprimir(){
        return (`Se ha creado un objeto de tipo elote de 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido: ${this.servido}`);
    }

}

//const esquite = new Elote(undefined, undefined, "vasito");
const esquite = new Elote("blanco", "25", "vasito");
const vasolote = new Elote("tierno", "20", "vasito");
const chascapizza = new Elote("mezclado", "35", "bolsa");
const entero = new Elote("asado", "38", "palito");

console.log(esquite.imprimir());