console.log("JS08 OOP Clases")

const miArreglo = [1, 2, 3, 4];
const miArregloConstructor = new Array (10);

console.log(miArreglo);
console.log(miArregloConstructor);

class Elote{
    //Definiendo atributos
    // Encapsulamos con el signo # 
    // solo se pueda cambiar mediante las operaciones definidas para ese objeto, para eso sirve el encapsulamiento
    #type;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(type="criollo", costo=0, servido="" ){
        this.#type = type; 
        this.#costo = costo;
        this.#servido = servido;
       /*  console.log(`Se ha creado un objeto de elote 
        tipo: ${this.type}
        costo: ${this.costo}
        servido en: ${this.servido}
        `); */
    }
    /**
     * 
     * @returns Existen metodos especiales llamados setters and getters
     * Se realiza una funcion y se le antepone la palabra set (Establecer) o get(Obtener)
     * para invocar los setters o getters, nos se utilizan parentesis como las funciones
     */
    get costo(){
        return this.#costo;
    }

    /* set costo(nuevoCosto){
        this.#costo = nuevoCosto
    } */


    //Realizando metodos de la clase
    imprimir(){
        return(`Se ha creado un objeto elote:
        tipo: ${this.#type}
        costo: ${this.#costo}
        servido en: ${this.#servido}
        `)
    }
}

//se realiza una subclase(child) de Elote
//Con la palabra extends estamos heredando los atributos y clases de la clase superior
class EloteGourmet extends Elote{
    #caducidad

    constructor(type, costo, servido){
    //asi como .this hace referencia al objeto y lo invoca, la palabra super invoca a los atributos y metodos de la clase superior 
    super(type, costo, servido) //Estableciendo super() se accede al constructor de la clase superior
    this.#caducidad = Date.now() + 1000*60*10; //Date.now() me entrega el valor en milisegundos
    }

    imprimir(){
        return super.imprimir()+ "\nLa caducidad es: " + new Date(this.#caducidad);
    }

}

const esquite = new Elote("blanco", 25, "vasito");
const vasoElote = new Elote("amarillo", 23, "");
const doriloko = new Elote("mezcla fina", 35, "bolsa");
const entero = new Elote("asado", 20, "palito");-

console.log("Ha cambiado el precio: " + esquite.costo )
console.log(esquite.imprimir());
console.log("****************************************")
console.log("\n Usando herencia")
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//usar polimorfismo

const servirAlCliente = (tipoElote) =>{
    console.log("Por favor, consuma lo siguiente: " + tipoElote.imprimir());
}

console.log("\n---------- Esto es Polimorfismo -----------")
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);




