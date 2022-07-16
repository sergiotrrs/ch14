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
    //Encapsular los atributos es una buena practica
    //Encapsulamos la clase usando el caracter #
    //Al estar encapsulado no puedo acceder directamente
    #tipo;
    #costo;
    #presentacion;

    //Definiendo un cosntructor
    //          El parametro de entrada suele llamarse igual que el atributo  
    constructor(tipo = "Criollo", costo = 0, presentacion = "") {
        this.#tipo = tipo;
        this.#costo = costo;
        this.#presentacion = presentacion;
        /*
        console.log(`Se ha creado un objeto elote 
            tipo: ${this.tipo}
            costo: ${this.costo}
            presentacion: ${this.presentacion}
        `);
        */
    }

    /**
     * Existen metodos especiales llamados setters and getters
     * Se realiza un fuuncion y se antepone la palagra set(establecer) o get(obtener)
     * Para invocar los setters o getters, no se utilizan parentesis como las funciones
    */

    get costo(){
        return this.#costo;
    }

    /*set costo(nuevoCosto){
        this.#costo = nuevoCosto;
    }*/

    get tipo(){
        return this.#tipo
    }
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }

    //Realizando metodos de clase
    imprimir () {
        return (`Se ha creado un objeto elote 
            Tipo: ${this.#tipo}
            Costo: $${this.#costo} pesos
            Presentacion: ${this.#presentacion}
        `);
    }
}

//Se realiza un subClase(Child) de elote
//Con la palabra extends estamos heredando los atributos y clases, de la clase superios
class EloteGourmet extends Elote {
    #caducidad;

    //Así como .this hace referencia a el objeto que lo invoca
    //La palabra super invoca a los atributos y metodos de la clase superior, incluyendo el constructor
    constructor(tipo, costo, presentacion){
        //De esta forma podriamos establecer los parametros
        //super.costo = costo

        //Estableciendo super() se accede al constructor de la clase superior
        super(tipo, costo, presentacion)
        this.#caducidad = Date.now() + 1000 * 60 * 10//Date.now() Entrega el valor en ms
    }
    //Sobreescritura de metodos
    //Se sobreescribe el metodo de la clase superior por el de la clase inferior
    //Se tiene que usar el mismo nombre de método de mi clase superior
    imprimir(){
        return super.imprimir() + `\n La caducidad es: ${new Date(this.#caducidad)}`
    }
}

const esquite = new Elote("Blanco", 51, "Vasito");
const vasoElote = new Elote("Amarillo", 23, "Vasito");
const doriloko = new Elote("Mezcla fina", 35, "Bolsa");
const entero = new Elote("Azado", 20, "Palito");
//El costo ya no se puede modificar de esta menera, ya que los datos estan encapsulados
//Se tendria que activar el set de este dato para que se pueda modificar
esquite.costo = 100;
console.log(`Cambio del costo ${esquite.costo}`);
console.log(esquite.imprimir());

console.log(`\n Usando Herencia`);
const esquiteSanPedro = new EloteGourmet("Criollo", 250, "Cama de Barro Artesanal");
console.log(esquiteSanPedro);

console.log(esquiteSanPedro.imprimir());


//Usar Polimorfismo
//una funcion debe tener acceso de la misma forma 
//tanto el la clase superior como en la clase inferior
const servirAlCliente = (tipoElote) => {
    console.log(`Por favor, consuma lo siguiente: ${tipoElote.imprimir()}`);
}
console.log(`\n **** Polimorfismo ****`);
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);

