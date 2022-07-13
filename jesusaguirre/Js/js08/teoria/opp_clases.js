console.log("js08 OOP clases");
class Elote{
    //definiendo atributos
    //console.log(tipo);
    //encapsulamos la clase con # 
    //al estar encapsulado no se puede acceder directamente al atributo
    #tipo;
    #color;
    #costo;
    #servido;

    //Definimos un constructor
    constructor(tipo="criollo", color='amarillo', costo=0, servido=""){
        this.#tipo = tipo;
        this.#color = color;
        this.#costo = costo;
        this.#servido = servido;

       /*  console.log(`se a creado un objeto elote tipo ${this.tipo}
        \n color: ${this.color} \n precio:${this.costo} \n servido en:${servido}`); */
    }
    /**
     * existenmetodos especiales llamados setters and getters
     * se realiza una funcion y se le antepone la palabra set(establecer)
     * o get(obtener)
     * para invocar los setters o getters, no se utilizaran los parentesis como en las funciones
     */
    get costo(){
        return this.#costo;
    }
    set costo(nuevoCosto){
        this.#costo = nuevoCosto;
    }
    get tipo(){
        return this.#tipo;
    }
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }
    //realizando metodos de mi clase
    imprimir(){
        return(`
        tipo: ${this.#tipo}
        color: ${this.#color}
        precio: ${this.#costo}
        servido en: ${this.#servido}
        `);
    }
}

//se realiza una subclase(child) de elote
//con la palabra extends estamos heredando los atribuatos de la clase superior
class EloteGourmet extends Elote {
    #caducidad
//asi como .thid hace referencia al objeto que lo invoca
// la palabra super invoca a los atributos y metodos de la clase superior
//uncluyendo al constructor
    constructor(tipo, color, costo, servido){
        //super.costo = costo; de esta forma podriamos establecer los parametros
        super(tipo, color, costo, servido)//establece super( se accede al constructor de la clase superior)
        this.#caducidad = Date.now()+1000*60*10//Date.now me entrega el valor en ms
    }
    /**
     * sobre escritura de metodos
     * se tiene que usar el mismo nombre del metodo de mi clase superior
     * imprimir9
     */
    imprimir(){
        return super.imprimir()+ "\n la caducidad es:"+ new Date(this.#caducidad);
    }
}

const esquite = new Elote('blanco','verde',51, "vasito");
const vasolote = new Elote('amarillo','morado',34,"bolsa");
const doriloco = new Elote('mazcla fina','negro',29,"palito");
const entero = new Elote(undefined,undefined ,19,"vasito");
//const entero = new Elote('asado','cafe',19,"vasito");
esquite.costo = 100;
console.log(`cambio de costo: ${esquite.costo}` )
console.log(esquite.imprimir());
/*************************** */
 console.log("con herencia");
 const esquiteSanPedro = new EloteGourmet("criollo","amarillo",250,"cama de barro artesanal");
 console.log(esquiteSanPedro.imprimir());

 //polimofismo
 const servirAlCliente = (tipoElote)=>{
    console.log("por favor cliente consuma lo siguiente:"+ tipoElote.imprimir());

 }
 console.log('-------------polimorfismo----------------');
 servirAlCliente(vasolote);
 servirAlCliente(esquiteSanPedro);