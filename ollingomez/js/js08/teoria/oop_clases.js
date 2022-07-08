console.log("JS08 OOP Clases");

// /**
//  * Pausa para recordar unas cosas
//  */
// const miArreglo=[1,2,3,4];
// //const miArregloConstructor= new Array(1,2,3,4);
// const miArregloConstructor= new Array(10); //genera un arrelo vasio de 10 elementos

// console.log(miArreglo);
// console.log(miArregloConstructor);
// miArreglo.splice(1,1,50,35,66);

//************************************************************ */

//Todas las clases que realisemos las empesaremos con la primera letra mayuscula
class Elote {
    //Definiendo atributos
    //Encapsulamos la clase usando el caracter gato #
    //Al estar encapsulado no puedo accseder directamente al atributo
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    //Inicielizar un parametro en una funsión se inicializa poniendo un igual
    constructor(tipo = "criollo", costo = 0, servido = "") {
        //this hase referencia al objeto en caso de que se ambiguo 
        //tipo=tipo entoces se pone this.tipo
        //para no usarlo se pone un nombre diferente en el argumento de la función
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
        // console.log(`Se ha generado un objeto elote:
        // tipo: ${this.tipo}
        // costo: ${this.costo}
        // servido en: ${this.servido}`);
    }
    /**
     * 
     * Exites métodos especiales llamados setters and getters
     * se realiza una función y se antepone la palabra set(Establecer) 0 get(Obtener).
     * Para invocar los setter o getters, no se utilizan parentesis como las funciones
     */

    get costo() {
        return this.#costo;
    }

    set costo(nuevoCosto) {
        this.#costo = nuevoCosto;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(nuevoTipo) {
        this.#tipo = nuevoTipo;
    }

    //Realizando método de mi clase
    imprimir() {
        return (`Se ha generado un objeto elote:
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido en: ${this.#servido}`);
    }
}


//Se realiza una subclase(child) de Elote
//Con la palabra extends estamos heredando los atributos y clases de la clase supeiror.
class EloteGourmet extends Elote {
    #caducidad

    //Así como puto this hace referencia al objeto que lo invoca
    //La pabra super invoca a los atributos o metodos de la parte superiror, incluyendo el constructor
    constructor(tipo, costo, servido) {
        //super.costo=costo; // De esta forma podriamos establecer los pararmetros
        super(tipo, costo, servido);//Estableciendo super() se accede al constructro de la clase superiror
        this.#caducidad = Date.now() + 1000 * 60 * 10;//Date.now() Me entrega el valor en ms
    }

        //Sobre escritura de métodos
        //Se tiene que usar el mismo nombre de mi clase superiot.
        imprimir(){
            return super.imprimir() + "\n La caducidad es: "+ new Date(this.#caducidad);
            
        }
}

const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amrillo", 23, "vasito");
const doriloKo = new Elote("mezcla fina", 35, "bolsa");
//const entero = new Elote(undefined,undefined,"palito");//salen los valores definidos en el constructor
const entero = new Elote("asado", 20, "palito");
esquite.costo = 100;
console.log("Cambio del costo: " + (esquite.costo));
console.log(esquite.imprimir());
//**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

console.log("\n Usando herencia")
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//Usar polimorfismo 
const servirAlCliente=(tipoElote)=>{
    console.log("Por favor, cliente, consuma lo siguiente: "+tipoElote.imprimir());
}

console.log("\n---------------Polimosfirmo------------------");
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);
