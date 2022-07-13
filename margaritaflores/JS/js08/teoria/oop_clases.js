console.log("JS08 OOP Clases");
/**
 * Pausa para recordar
 * Dos formas de crear un arreglo
 */
//const miArreglo = [1 , 2, 3, 4];
//const miArregloConstructor = new Array (10); ó new Array (1,2,3,4);

//console.log(miArreglo);
//console.log(miArregloConstructor);

//************************** */

class Elote{
    //Definiendo atributos
    //Encapsulamos la clase usando el caracter #
    //Encapulado no puedo acceder directamente al atributo
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor 
    constructor(tipo = "criollo ", costo =0, servido =""){
     this.#tipo = tipo;
     this.#costo= costo;
     this.#servido = servido;
        /**
         * console.log(`Se ha creado un objeto de tipo elote:
         * tipo: ${this.tipo}
         * costo: ${this.costo}
         * servido en: ${this.servido}
         * `);
         * */
        
    }
    /**Existen métodos especiales llamados setters and getters
     * Se realiza una función y se le antepone la palabra set(establecer) o get(obtener).
     * Para invocar los setters o getters, no se utilizan parentesis como las funciones.
     */
     get costo(){
        return this.#costo;
     }

     /**set costo(nuevoCosto){
        this.#costo = nuevoCosto
     }*/

     get tipo(){
        return this.#tipo;
     }

     set tipo(nuevoTipo){
        this.#tipo = nuevoTipo
     }

//Realizando métodos de mi clases
imprimir(){ 
  //Se ha creado un objeto elote// 
   return (`  
    tipo: ${this.#tipo} 
    costo: ${this.#costo}
    servido en: ${this.#servido}
    `);
}

}
    //Se realiza una subclase(child) de Elote
    //Con la palabra extends estamos heradndo los atributos y clases de la clase superior.
    class EloteGourmet extends Elote{
        #caducicad

        //Asi como . this hace referencia al objeto que lo invoca 
        //La palabra super invoca a los atributos y métodos de la clase superior, incluyendo el constructor
        constructor(tipo, costo, servido ){
            //super.costo = costo; De esta forma podriamos estableces los parámetros
            super(tipo, costo, servido) //Estableciendo super() se accede al construstor de la clase superior
            this.#caducicad = Date.now ()+1000*60*10//Me entrega el valor en ms 
        }
        //Sobrescritura de métodos
        //Se tiene que usar el mismo nombre de método de mi clase superior
        imprimir(){
            //return `No tienes acceso por que no vives en San Pedro USA`;//Para invocar un tipo false
            return super.imprimir() + "/n La caducidad es: " + new Date (this.#caducicad);
        }

    

    }


const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote( "amarillo", 23, "vasito");
const doriLoko = new Elote ("mezcla fina", 35, "bolsa");
//const entero = new Elote ( undefined, undefined, "palito");
const entero = new Elote ("asado", 20, "palito");
esquite.costo = 100;
console.log("Cambio del costo :" + esquite.costo);
console.log( esquite.imprimir());
//*************************** */

console.log("/n Usando herencia");
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//Usar Polimorfismo 
const servirAlCliente = (tipoElote)=>{
    console.log ("Por favor, cliente, consuma lo siguiente: " + tipoElote.imprimir());
}
console.log("/n--------Polimorfismo---------");
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);
servirAlCliente("Hola");
//Para heredar de una clase a otra clase se utiliza la palbra extends 
//Para encapsular los datos (atributos y metodos)---> Es con el simbolo de #
//Como puedo acceder con los datos que ya se encuentran encapsulados: Con el GET y SET
//Con la palabra super podemos acceder
//A que se refiere la sobreescritura de métodos; Podemos llamarlas igual en la clase inferior y superior
//Cuando en tu clase hija vas a sobrescribir el método de la clase padre