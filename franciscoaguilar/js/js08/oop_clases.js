console.log("JS08 OOP CLASES");


/**
 *  Recordando algunas cosas
 */
// const miArreglo = [1,2,3,4];
// const miArregloconstructor = new Array(10); // crea un arreglo de 10 valores pero están indefinidos
/***Fin del repaso */

//Al crear una clase siempre debemos empezar con mayúscula 
class Elote {
    //definiending atributos
    //Encapsulamos la clase el caracter #
    //Al estar encapsulado no puedo acceder directamente al atributo

    #tipo;
    #color;
    #costo;
    #servido;

    //definiending un contructor 
    constructor(tipo="criollo" ,costo=0, servido=""){
        // En general en el constructor solo se ponen atributos del objeto
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
        // console.log(`Se ha creado un objeto de tipo elote 
        // tipo ${this.tipo}
        // costo ${this.costo}
        // servido en ${this.servido}
        // `);
    }
    /**
     * 
     *existen métodos especiales llamados setters y getters
     Se realiza una función y se le antepone la palabra set() o get()
     Para invocar los setters o getters, no se utilizan paréntesis como las funciones.
     * 
     * 
     */
    get costo(){
        return this.#costo;
    }
    get tipo(){
        return this.#tipo;
    }
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
     }

     set costo(nuevoCosto){
        this.#costo = nuevoCosto;
     }

    //Realizanding metodos de mi clase 
    imprimir(){
        return(` 
        tipo ${this.#tipo}
        costo ${this.#costo}
        servido en ${this.#servido}
        `);
    }

}
//Creamos un objeto esquite de tipo Elote
const esquite = new Elote("blanco",51,"vasito");
const vasolote = new Elote("amarillo",23,"vasito");
const doriloko = new Elote("mezcla fina",35,"bolsa");
// const entero = new Elote(undefined,undefined,"palito");
 const entero = new Elote("asado",20,"palito");
 esquite.costo = 150;

 console.log("Cambio del costo :" + esquite.costo);
 console.log( esquite.imprimir() );

//Encapsulación: que no se tenga acceso a algunos atributos y métodos.

//Se realiza una subclase(Child) de elote 
// con la palabra extends estamos heredando los atributos y clases de la clase superior
class EloteGourmet extends Elote{
    #caducidad 
    //Así como .this hace referencia al objeto que lo invoca
    // la palabra super invoca a los atributos y métodos de la clase superior
    constructor(tipo,costo, servido){
        
        //super.costo =  costo; // Esta forma se podría establecer los parámetros
        super(tipo, costo, servido) //Estableciendo super() se accede al constructor de la clase super
        this.#caducidad = Date.now()+1000*60*10 // date.now me entrega el valor en ms,le estamos agregando 

    }
    // Sobreescritura de métodos 
    //se tiene que usar el mismo nombre de método de mi clase superior.
    imprimir (){
      // return "No tienes acceso porque no vives en San Pedro USAmx"
       return super.imprimir() + "\n la caducidad es: " +new Date(this.#caducidad);
    }
}
console.log("**********************************");
console.log("\n usando herencia");
const esquiteSanPedro = new EloteGourmet("criollo",250,"cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());


//Polimorfismo 
const servirAlCliente = (tipoElote)=>{ // el parámetro está indefinido
    console.log("por favor, cliente, consuma lo siguiente: " +tipoElote.imprimir() ); //Se trabaja con el parámetro como si estuviera definido y se adapta al objeto que se le mande
}

//Al pasar el parámetro del objeto se termina imprimiendo 
//a pesar que uno sea de la clase padre y otro de la clase hijo 
console.log("**********************************");
console.log("\n Polimorfismo ");
servirAlCliente(vasolote);
servirAlCliente(esquiteSanPedro);


//la bastracción es que no dependa tu implementación de los cambios que se puedan hacer en las clases

