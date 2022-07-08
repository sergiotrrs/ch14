console.log("JS08 OPP Clases");
/**
 * Pauso para recordar unas cosas
 * Formas de crear un arreglo 
 * 
const miArreglo = [1, 2, 3,4]; 
const miArregloContructor = new Array(10);
console.log(miArreglo); 
console.log(miArregloContructor); 
miArreglo.splice(1,1)
*/

class Elote {
    //Definiendo atributos
    tipo;
    color;
    costo;
    servido;

    //Definiendo constructor 
    constructor(tipo = "criollo", costo = 0, servido = "") {
        this.tipo = tipo;
        this.costo = costo;
        this.servido = servido;
       /* console.log(tipo)
        console.log(`Se ha creado un objeto de tipo  elote: 
        tipo: ${this.tipo} 
        costo: ${this.costo} 
        servido en: ${this.servido}
        `);*/
    }  

    //Realizando metodos de mi clase
    imprimir(){
       return(`Se ha creado un objeto de tipo  elote: 
        tipo: ${this.tipo} 
        costo: ${this.costo} 
        servido en: ${this.servido}
        `);
    }
}

const esquite = new Elote("blanco", 25, "vasito");
const vasoElote = new Elote("Amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 25, "bolsa");
const entero = new Elote("asado", 20, "palito");

console.log(esquite.imprimir());