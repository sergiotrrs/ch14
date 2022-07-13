console.log("JS08 OOP Clases");

/**
 * Pausa para recordar cosas
 * Formas de crear un arreglo:
 * new Array (1,2,4,5);
 * Array es una clase por eso incia con mayúscula
 */
const miArreglo=[1, 2, 3, 4];
const miArregloConstructor = new Array (10);

console.log(miArreglo);
console.log(miArregloConstructor);
miArreglo.splice(1,1,50,35);
 /******************************** */
//Encpsulamos la calse con el simbolo #
//All estar encaosulado no podemos acceder directamente al atributo
class Elote{
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo=0, servido=""){
        this.#tipo=tipo;
        this.#costo=costo;
        this.#servido=servido;
        /* console.log(`Se ha creado un objeto de tipo elote 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido: ${this.servido}
        `); */
    }
    
    get costo(){
       return this.#costo;
    }
    /* set costo(nuevoCosto){ get lo encapsula y set logra que el atributo se cambie
        return this.#costo;
    } */

//Realizando métodos de mi clase*******
    get tipo(){
        return this.#tipo;
    }
    set tipo(nuevoTipo){
        return this.tipo=nuevoTipo;
    }
     imprimir(){
        return(` 
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido: ${this.#servido}
        `);  
    }
}

/**
 * Existen métdos especiales llamados setter and getters
 * para ingresar a los atirbutos que queramos
 * Se realiza una funcióna ante pone la palabra set(Establecer) o get(Obtener).
 */
//Se realiza una subclase(child) de Elote
// Con la palabra extends estamos heredando los atributos y clases de a calse superior
//a EloteGourmet ya le podemos llamar clase hija
class EloteGourmet extends Elote{
    #caducidad
    //La clase padre no tiene acceso a los atributos y métodos de sus hijos
    //Así como .this hace referencia al objeto que lo invoca 
    //la palabra super invoca a los atributos y métodos de la clase superior incluyendo el constructor
    constructor(tipo, costo, servido ){
        //super.costo =costo; De esta forma podríamos establecer los parámetros
        super(tipo, costo, servido)//Estableciendo super() se accede al constructor de la calse superior.
        this.#caducidad = Date.now()+1000*60*10 //Me entrega el valor el ms
    }
    //Sobreescritura de métodos se tiene que usar el mismo
    //método de mi clase superior.
    imprimir(){
        return super.imprimir()+ "\n La caducidad es: "+ new Date(this.#caducidad);
    }
}


const esquite = new Elote ("blanco",51, "vasito");
const vasolote = new Elote("amarillo",23, "vasito");
const doriloko = new Elote("mezcla fina",35, "bolsa");
//const entero = new Elote(undefined,undefined,"palito");
//const entero = new Elote(null,null,"palito");
const entero = new Elote("asado",20,"palito");
esquite.costo= 100;
console.log("Cambio del costo :"+ esquite.costo);
console.log( esquite.imprimir());
/****************Cómo usar la herencia********************************* */
//Agregando un nuevo atributo
//Para imprimir es una sobreescritura de métodos
console.log("\n Usando herencia");
const esquiteSanPedro= new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//Usar polimorfismo
const servirAlCliente=(tipoElote)=>{
    console.log("Por favor, cliente, consuma lo siguiente: "+tipoElote.imprimir());

}
console.log("\n-----Polimorfismo----");
servirAlCliente( vasolote );
servirAlCliente( esquiteSanPedro );
