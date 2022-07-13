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
    //Encapsulamos la clase usando caracter 
    //Al estar encapsulado no puedo acceder directamene al atributo

    #tipo;
    #costo;
    #servido;

    //Definiendo constructor 
    constructor(tipo = "criollo", costo = 0, servido = "") {
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
        /* console.log(tipo)
         console.log(`Se ha creado un objeto de tipo  elote: 
         tipo: ${this.tipo} 
         costo: ${this.costo} 
         servido en: ${this.servido}
         `);*/
    }

    /**
     * 
     * Existen metodos especiales llamados getter and setter 
     * se realiza una funcion y se le antepone la palabra set(establecer o get(obtener))
     */

    get costo() {
        return this.#costo;
    }

    /* set costo(nuevoCosto){
         this.#costo = nuevoCosto
     }*/

    get tipo() {
        return this.#tipo;
    }

    set tipo(nuevoTipo) {
        this.#tipo = nuevoTipo;
    }

    //Realizando metodos de mi clase
    imprimir() {
        return (`Se ha creado un objeto de tipo  elote: 
        tipo: ${this.#tipo} 
        costo: ${this.#costo} 
        servido en: ${this.#servido}
        `);
    }
}

//Se realiza una subclase(child) de Elote
//Con la palabra extends, estamos heredando los atributos y las clases de clase Padre 
class EloteGourmet extends Elote {
    #caducidad

    //Asi como .this hace referencia al objeto ue lo invoca 
    //La palabra super invoca a los atributos y ,etodos de la clase, incluyendo al constructor
    constructor(tipo, costo, servido) {
        super(tipo, costo, servido); //Estableciendo super( se accede al constructor de la clase Padre)
        this.#caducidad = Date.now() + 1000 * 60 * 10//Date.now//Me entrega el valor en milisegundos le aumenrtamos 10 minutos 
    }

    //Sobreescritura de metodos
    //Se tiene que usar el mismo nombre de metodo de mi clase superior 
    imprimir() {
        return super.imprimir() + "\nLa caducidad es: " + new Date(this.#caducidad);
    }
}

const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("Amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 25, "bolsa");
const entero = new Elote("asado", 20, "palito");
esquite.costo = 100;
console.log("Cambio del costo :" + esquite.costo)
console.log(esquite.imprimir());

//*********************************************** */
console.log("\ Usando herencia")
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir()); 

//Usar Polimorfismo 
const servirAlCliente = (tipoElote) =>{
    console.log("Por favor cliente, consuma lo siguiente: " + tipoElote.imprimir());
} 
console.log("\n---------Polimorfismo---------")
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);