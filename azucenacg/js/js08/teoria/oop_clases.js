console.log("JS08 ")

/**
 * Recordatorio:
 * 
 * const miArreglo =[1,2,3,4];
 * const miArregloConstructor= new Array(10);
 * 
 * console.log(miArreglo);
 * console.log(miArregloConstructor);
 * 
 * el segundo arreglo crea cuantos elementos se le indica
 * 
 */


class Elote{
    //Definiendo atributos
    //Encapsulamos la clase usando el caracter #
    //al estar encapsulado no puedo acceder directamente 
    //al atributo

    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo=0, servido=""){
        //el de la izquierda es el tipo del objeto
        //o sea el de arriba y el de la derecha es
        //el tipo del constructor
        this.#tipo=tipo;
        this.#costo=costo;
        this.#servido=servido;
    }

    //si se le pone un set, no se va a permitir cambio
    //mas adelante
    
    get costo(){
        return this.#costo;
    }

    
    //  set costo(nuevoCosto){
    //  this.#costo=nuevoCosto
    //  }
   

    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo=nuevoTipo;
    }


    imprimir(){
        return(`Se ha creado un objeto elote 
                    tipo: ${this.#tipo}
                    costo: ${this.#costo}
                    servido en: ${this.#servido}
                    `);
    }
}

/******************** */
//se realiza una subclase (child) de Elote
//Con la palabra extends estamos heredando
//los atributos y clases de la clase superior

class EloteGourmet extends Elote {
    #caducidad
    //Así como .this hace referencia al objeto que lo
    //invoca, la palabra super invoca 
    //a los atributos y métodos de la clase superior

    constructor(tipo, costo, servido){
        //super.costo=costo; de esta forma podriamos establecer parametros
        super(tipo, costo, servido)//Estableciendo super() se accede al constructor
        //de la clase superior
        this.#caducidad=Date.now()+1000*60*10
        //Date now me entrega valor el ms del momento actual
        //le sumamos eso porque queremos que sean 10 min de caducidad 

    }

    //Sobreescritura de métodos
    //Se tiene que usar el mismo nombre de método de mi clase superior.
    imprimir(){
        return super.imprimir() + "\n La caducidad es: " + new Date(this.#caducidad);
     }
 
}

const esquite = new Elote("blanco",25, "vasito");
const vasoElote = new Elote("amarillo",23, "vasito");
const doriloko = new Elote("mezcla",35, "bolsa");
//const entero = new Elote(undefined,undefined, "palito");
const entero = new Elote("asado",20, "palito");
esquite.costo=100;
console.log("cambio del costo: " + esquite.costo);
console.log(esquite.imprimir());

/********* */
console.log("\n Usando Herencia");
const esquiteSanPedro=new EloteGourmet("criollo", 250, "barro artesanal");
console.log(esquiteSanPedro.imprimir());

//usar polimorfismo
const servirAlCliente = (tipoElote) => {
    console.log("Por favor, cliente consuma lo siguiente: "+ tipoElote.imprimir());
}

console.log("\n----------Polimorfismo------------")
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);


/**
 * Sobreescritura de métodos:
 * Al metodo padre le podemos escribir 
 */


//el metodo imprimir no existe en elotegourmet, 
//pero si tenemos acceso porque 

/**
 * Sin el encapsulamento si podriamos cambiar el
 * precio
 * solo dejamos cmabiar con el encapsulamento 
 * cuando solocamos el set
 * si no le ponemos el set, no vamos a poder cambiar
 * los precios
 * 
 * Para acceder a los atributos de los encapsulados
 * ponemos el get y el set 
 * 
 * luego pa llamar a los atributos de la clase superior 
 * con la palabra super
 */

