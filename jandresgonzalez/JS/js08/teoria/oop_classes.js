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
    //Se encapsulan atributos con #
    //Al encapsular, se evitan atributos
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo="10", servido=" ") {
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
/*      console.log(`Se ha creado un objeto de tipo elote de 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido: ${this.servido}`);
        console.log("Y es de tipo..." + tipo); */
    }

    /**
     * Existen métodos especiales para atributos encapsulados
     * setter y getter
     * Para invocar los setters o getters no se utilizan paréntesis
     * se realiza una función y se le antepone set() o get()
     */
    get costo () {
        return this.#costo;
    }

    //Get permite revisar
    get tipo() {
        return this.#tipo;
    }

    //Set permite modificar
    set costo(nuevoCosto) {
        this.#costo = nuevoCosto;
    }

    set tipo(nuevoTipo) {
        this.#tipo = nuevoTipo;
    }

    
    //Realizando métodos de mi clase
    imprimir(){
        return (` 
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido: ${this.#servido}`);
    }

}

//Subclase de Elote
//extends sirve para heredar
class EloteGourmet extends Elote {
    #caducidad

    //.this hace referencia al objeto
    //super retoma atributos y métodos de la clase superior

    constructor(tipo, costo, servido) {
        //super.costo = costo; así se podrían establecer los param
        super(tipo, costo, servido) //super accede al constructor de la clase superior
        this.#caducidad = Date.now() + 1000*60*10 //valor en ms
    }

    //sobreescritura de métodos
    //

    imprimir() {
        return super.imprimir() + "\n\t\tLa caducidad es " + new Date(this.#caducidad);
    }
}


//const esquite = new Elote(undefined, undefined, "vasito");
const esquite = new Elote("blanco", "51", "vasito");
const vasolote = new Elote("tierno", "20", "vasito");
const chascapizza = new Elote("mezclado", "35", "bolsa");
const entero = new Elote("asado", "38", "palito");

esquite.costo = 100;
console.log(esquite.costo);
//No se muestra bien el costo del esquite si no hay getter poara un encapsulado
console.log(esquite.imprimir());
//********************* */
console.log("\nUsando herencia")
const esquiteSanPedro = new EloteGourmet("exportado", 200, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//polimorfismo
//puede acceder tanto a child como parent
const servirAlCliente = (tipoElote) => {
    console.log("Consuma lo siguiente: " + tipoElote.imprimir());
}

servirAlCliente(vasolote);
servirAlCliente(esquiteSanPedro);