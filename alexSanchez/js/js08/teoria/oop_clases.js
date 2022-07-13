console.log("JS08 OOP Clases")
/* 
Pausa para recordar unas cosas
 */
/* 
  const miArreglo= [1,2,3,4];
  const miArregloConstructor= new Array(10) */

/* console.log(miArreglo)
console.log(miArregloConstructor) */

//************************************************************** */

class Elote {
    //Definiendo atributos
    #tipo;
    #costo;
    #servido;
    //Definiendo constructor

    constructor(tipo = "criollo", costo = "0", servido = "") {
        this.tipo = tipo
        this.costo = costo
        this.servido = servido
        console.log(tipo);
        /*         console.log(`Se ha creado un objeto elote 
                tipo: ${this.tipo} 
                costo: ${this.costo} 
                servido en: ${this.servido} 
                `) */
    }

    get tipo(){
        return this.#tipo
    }
    
    set tipo(nuevoTipo){
        this.#tipo= nuevoTipo
/**
 * 
 * Existen metodos especiales llamados setters and getters
 * Se realiza una funcion y se le antepone la palabra set(establecer) o get(obtener)
 * Para invocar los setters o getters, no se utilizan parentesis como en la funciones
 */

/* get costo(){
    return this.#costo */
    
    
    /* set costo(nuevoCosto){
        this.#costo= nuevoCosto
    } */
} 
    
    

    //Reestablecer metodos de mi clase
    imprimir(){
        return (`Se ha creado un objeto elote
    tipo: ${this.tipo} 
    costo: ${this.costo} 
    servido en: ${this.servido} 
`);
    }
}
    //Se realiza una subclase(child) de Elote
    // XCon la palabra extends estamos heredando los atributos y clases de la clase superior

class EloteGourmet extends Elote{
    #caducidad
    
    //Asi como .this hace referencia al objeto que lo invoca
    // la palabra super invoca a los atributos y metodos de la clase superior
    constructor(tipo, costo, servido){
        //super.costo= costo; De esta forma podriamos establcer los parametros
        super(tipo, costo, servido) // Estableciend super() se accde al constructor de la clase superior
        this.#caducidad = Date.now() + 1000*60*10 // Me entrega el valor en ms
    }
    //Sobreescritura de metodos
    //Se tiene que usar el mismo nombre de metodo de mi clase superior.
    imprimir(){
        return super.imprimir() + "\n La caducidad es " + new Date(this.#caducidad)
    }
}


const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "bolsa");
/* const entero = new Elote("undefined, undefined, palito" ); */
const entero = new Elote("asado", 20, "palito");
esquite.costo=100
console.log("Cambio de costo" + esquite.costo)
console.log(esquite.imprimir())

//******************************************************************* */

console.log("\n Usando herencia")
const esquiteSanPedro= new EloteGourmet("criollo", 250, "cama de barro artesanal")
console.log(esquiteSanPedro.imprimir())

//Usar polimorfismo
const servicioAlCliente= (tipoElote) =>{
    console.log ("Por favor cliente, consuma lo siguiente" + tipoElote.imprimir())
}
console.log("\n--------Polimorfismo----------")
servicioAlCliente(vasoElote)
servicioAlCliente(esquiteSanPedro)