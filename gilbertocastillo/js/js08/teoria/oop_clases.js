// console.log("JS08 OOP Clases");


// /**
//  * 
//  * formas de crear un arreglo
//  */
// // const miArreglo = [1, 2, 3, 4];
// // const miArregloConstructor = new Array(10);

// // console.log(miArreglo);
// // console.log(miArregloConstructor);
// //todas las clases incian con mayuscula

// class Elote{
//     //definiendo atributos
//     //encapsulamos la clase usando el caracter #
//     //al esatr encapsualdo no se puede acceder directamente al atributo
// #tipo;
// #costo;
// #servido;


// //definiendo constructor
// constructor(tipo="criollo", costo=0, servido=""){
//     this.#tipo = tipo;
//     this.#costo = costo;
//     this.#servido = servido;
//     // console.log(`se ha creado un objeto elote.
//     //  tipo: ${this.tipo}
//     //  costo:${this.costo}
//     //  servido en:${this.servido}
     
    
// }

// /**
//  * existen metodos especiales llamados setters and getters
//  * se realiza una funcion y se le antepone la palabra set(establecer) o get (obtener)
//  * para invocar los setters o getters, no se utilizan parentesis como las funciones
//  */

// get costo(){
//     return this.costo;
// }

// /*set costo(nuevoCosto){
//     this.costo = nuevoCosto
// }*/

// get tipo() {
//     return this.tipo;
// }

// set tipo(nuevoTipo){
//     this.#tipo = nuevoTipo;
// }


// //se realiza una subclase (child) de elote
// //con la palabra extends estamos heredando los atributos y clases de la clase superior
// class EloteGourmet extends Elote{
//     #caducidad

//     //asi como .this hace refrencia al objeto que lo invoca
//     //la palabra super invoca a los atributos y metodos de la clase superior
//     constructor(tipo, costo, servido){

//     }
// }




// //realizando metodos de mi clase
// imprimir(){
//     return (`se ha creado un objeto elote.
//     tipo: ${this.tipo}
//     costo:${this.costo}
//     servido en:${this.servido}
//     `);

// }


// }

// const esquite = new Elote("blanco", 51, "vasito");
// const vasoElote = new Elote("amarillo", 23, "vasito");
//     const doriloko = new Elote("mezcla fina", 35, "bolsa");
//     //const entero = new Elote (undefined, undefined, "palito");
//     const entero = new Elote("asado", 20, "palito");
//     esquite.costo= 100;
//     console.log("cambio del costo:" + esquite.costo);

// console.log(esquite.imprimir());




console.log("OOP CLASES");
/**
 * Pausa para recordar cosas
 * Formas de crear un arreglo
 */
// const miArreglo = [1,2,3,4];
// const miArregloConstructor = new Array(10);

// console.log(miArreglo);
// console.log(miArregloConstructor);


/****** */
class Elote{
    //Definiendo atributos
    //Encapsulamosla clase usando el caracter # 
    // Encapsulado no puedo acceder directamente al atributo
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo=0, servido=""){
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
       /* console.log(`Se ha creado un objeto de tipo elote
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en: ${this.servido}
        `);*/
    }
    
    /**
     * 
     * Existen métodos especiales llamados setters and getters, nos van a permitir acceder a los atributos que nosotros queramos
     * se realiza una función y se le antepone la palabra set (Establecer) o get (obetener).
     */
    
    get costo(){
        return this.#costo;
    }
    
   /* set costo(nuevoCosto){
        this.#costo = nuevoCosto
    }*/

    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }
    
    //Realizando métodos de mi clase
    imprimir(){
        return(`Se ha creado un objeto elote:
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido en: ${this.#servido}
        `);
    }
}

//************* */

//Se realiza una subclase (child) de Elote
//Con la palabra extends estamos heredando los atributos y clases de la clase superior.
class EloteGourmet extends Elote{
    #caducidad

    //Así como .this hace referencia al objeto que lo invoca
    //la palabra super incova a los atributos y métodos de la clase superior
    constructor(tipo, costo, servido){
        //super.costo = costo; De esta forma pordríamos establecer los parámetros
        super(tipo, costo, servido) //Estableciendo super() se accede al constructor de la clase superior
        this.#caducidad = Date.now() + 1000*60*10; //Me entrega el valor en ms
    }

//sobrescritura de metodos
//se tiene que usar el mismo nombre de metodo de mi clase superior.

imprimir(){
    return super.imprimir() + "\n la caducidad es: " + new Date(this.#caducidad)
}






}

const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "palito");
const entero = new Elote("asado", 25, "palito");
esquite.costo = 100;
console.log("Cambio del costo: " + esquite.costo);
console.log(esquite.imprimir());
//*********************** */
console.log("\nUsando herencia");
const esquitesSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquitesSanPedro.imprimir());


//usar polimorfismo
//establce ue una funcion debe tener acceso de la misma forma tanto en la clase superior como la clase inferior
const servirAlCliente = (tipoElote)=>{
    console.log("por favor, cliente, consuma lo siguiente: " + tipoElote.imprimir());
}

console.log("\n--------Polimorfismo--------------")
servirAlCliente(vasoElote);
servirAlCliente(esquitesSanPedro);