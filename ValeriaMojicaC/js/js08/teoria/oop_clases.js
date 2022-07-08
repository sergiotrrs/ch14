console.log(`JS08 OOP Clases`);
/**
 * Pausa para recordar
 * const miArreglo = [1, 2, 3, 4];
 * const miArregloConstructor = new Array (10); //Crea 10 espacios vacios
 * console.log(miArreglo);
 * console.log(miArregloConstructor);
*/

//Las clases inician con mayuscula
class Elote {
    //Definiendo atributos
    tipo;
    costo;
    presentacion;

    //Definiendo un cosntructor
    //          El parametro de entrada suele llamarse igual que el atributo  
    constructor(tipo = "Criollo", costo = 0, presentacion = "") {
        this.tipo = tipo;
        this.costo = costo;
        this.presentacion = presentacion;
        /*
        console.log(`Se ha creado un objeto elote 
            tipo: ${this.tipo}
            costo: ${this.costo}
            presentacion: ${this.presentacion}
        `);
        */
    }
    //Realizando metodos de clase
    imprimir () {
        return (`Se ha creado un objeto elote 
            tipo: ${this.tipo}
            costo: ${this.costo}
            presentacion: ${this.presentacion}
        `);
    }
}

const esquite = new Elote("Blanco", 25, "Vasito");
const vasoElote = new Elote("Amarillo", 23, "Vasito");
const doriloko = new Elote("Mezcla fina", 35, "Bolsa");
const entero = new Elote("Azado", 20, "Palito");

console.log(esquite.imprimir());