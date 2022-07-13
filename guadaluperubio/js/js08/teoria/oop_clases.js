console.log("JS08 OOP  CLASES");


/**
 * recordando cosas
 */
// const miArreglo = [1, 2, 3, 4];
// const miArregloConstructor= new Array(10);

// console.log(miArreglo);
// console.log(miArregloConstructor);

//******************************************* */
class Elote{
    //definiendo atributos
    //encapsulamos la clase usando el caracter #
    //al estar encapsulado ya no puedo acceder directamente al atributo, , la linea 45 es la que se imprime el console.log y se aprecia el ejemplo xD
    #tipo;
    #costo;
    #servido;
   
    // definiendo constructor
    constructor(tipo="criollo", costo=0, servido= "" ){
      this.#tipo = tipo;
      this.#costo = costo;
      this.#servido = servido;
    //     console.log (`se ha crado un objeto de elote tipo:
    //      tipo:${this.tipo}
    //      costo:${this.costo}
    //      servido en: ${this.servido}
    //      `);
     }

     /**
      * Existen  métodos especiales llamados setters and getters
      * se realiza una funcion y se le antepone la palabra set(establecer) o get(obtener)
      * para invocar los  setter o getters , no se utilizan paraentesis como las funciones
      */

     get costo(){
      return this.#costo;
     }
    //  set costo(nuevoCosto){     
    //   this.#costo = nuevoCosto
    //  }


     //realizando metodos de mi clase

    imprimir(){
        return(`se ha crado un objeto de elote tipo:
        tipo:${this.#tipo}
        costo:${this.#costo}
        servido en: ${this.#servido}
    `);
    }

}
const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "bolsa") ;
const entero = new Elote("asado", 20, "palito");


console.log("cambio del costo :" + esquite.costo);
console.log(esquite.imprimir());