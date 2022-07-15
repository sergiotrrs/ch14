console.log("JS08 OOP clases");

//Formas de crear arreglos

// const miArreglo = [0, 1, 2, 3, 4];
// const miArregloConstructor = new Array(10);

// console.log(miArreglo);
// console.log(miArregloConstructor);

//Las clases siempre se inician con mayuscula
class Elote {
    //Definiendo atributos
    //Encapsulamos la clase usando el caracter #
    //Al estar encapsulado no se puede acceder directamente a el
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(
        tipo = "criollo",
        // color = "amarillo",
        costo = 0,
        servido = "",
    ) {
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
        // console.log(`Se ha creado un objeto de  elote:
        // tipo: ${this.tipo}
        // costo: ${this.costo}
        // servido en: ${this.servido}
        // `);
    }

    /**
     * Existen metodoes especiales llamados setter and getters 
     * los cuales nos van a permitir entrar a los atributos que queramos
     * Se realiza una funcion y se le antepone la palabra set(establecer) o get(obtener)
     * Para invocar los setters, no se utiliza parantesis como las funciones
     */

    get costo() {
        return this.#costo;
    }

    // set costo (nuevoCosto){
    //     this.#costo=nuevoCosto;
    // }

    get tipo() {
        return this.#tipo;
    }

    set tipo(nuevoTipo) {
        this.#tipo = nuevoTipo;
    }

    imprimir() {
        return (`Elote 
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido en: ${this.#servido}
        `);
    }

}



//Se realiza una subclase (child) de Elote
// La palabra reservada extends indica que va a heredar atributos y clases de (la clase superior) clase Elote 
class EloteGourmet extends Elote {
    #caducidad

    // Asi como .this hace referencia al objeto que lo invoca la palabra super invoca a los atributos y metodos de la clase superior incluyendo el constructor
    constructor(tipo, costo, servido) {
        // super.costo = costo; De esta forma podriamos establecer los parametros
        super(tipo, costo, servido) //Estableciendo super() se accede al constructor de la clase superior
        this.#caducidad = Date.now() + 1000 * 60 * 10 //Date.now() me entrega el valor en ms

    }

    //Sobreescritura de metodos
    //Se tiene que dar el mismo nombre de mtedodo de mi clase superior
    imprimir() {
        return super.imprimir() + "\n la caducidad es: " + new Date(this.#caducidad);
    }
}


//Esto crea un objeto de tipo de la clase
const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amarillo", 33, "vasito");
const doriLoko = new Elote("mezcla", 35, "bolsa");
const entero = new Elote("asado", 20, "palito");

esquite.costo = 100;
console.log("Cambio el costo: " + esquite.costo);
console.log(esquite.imprimir());



console.log("----------Usando herencia-------");
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//Usar polimorfiamo
const servirAlCliente = (tipoElote) => {
    console.log("Por favor, cliente, consuma lo siguiente: " + tipoElote.imprimir());
}
console.log("---------Polimorfirmo---------");
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);
