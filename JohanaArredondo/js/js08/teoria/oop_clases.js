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

    #tipo;
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
 * existen metodos especiales llamados setters and getters
 * se realiza una funcion y se le antepone la palabra set (establecer) o get (obtener)
 * para invocarlos, no se utiliza parentesis como las funciones
*/


get costo(){
    return this.#costo+9;
}

/* set costo(nuevoCosto){
    this.#costo = nuevoCosto
} */

get tipo(){
    return this.#tipo;
}


set tipo(nuevoTipo){
    this.#tipo = nuevoTipo;
}

    //Realizanding metodos de mi clase 
    imprimir(){
        return (`Se ha creado un objeto de tipo elote: 
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido en: ${this.#servido}
        `);
    }

}

//se realiza una subcalse(child) de elote
//con extends estamos heredando los atributoa y clases de la clase superior
class EloteGourmet extends Elote{
    #caducidad 

    //asi como .this hace referencia al objeto que lo invoca
    //la palabra super invoca a los atributos y metodos de la clase superior
    constructor (tipo, costo, servido){
        //super.costo =costo;  de esta forma podriamos establecer los parametros
        super(tipo, costo, servido) // estableciendo super() se accede al constructor de la clase superior
        this.#caducidad = Date.now()+1000*60*10 //Me agrega el valor en ms
    }

    //sobreescritura de metodos
    // se tiene que usar el mismo nombre de metodo de mi clase superior
    imprimir(){
        return super.imprimir() + "\n la caducidad es: "+new Date (this.#caducidad);
    }

}

//Creamos un objeto esquite de tipo Elote
const esquite = new Elote("blanco",51,"vasito");
const vasolote = new Elote("amarillo",23,"vasito");
const doriloko = new Elote("mezcla fina",35,"bolsa");
// const entero = new Elote(undefined,undefined,"palito");
 const entero = new Elote("asado",20,"palito");
 esquite.costo = 100;
 console.log("cambio el costo: "+esquite.costo);
 console.log( esquite.imprimir() );


 console.log("\n usando herencia");

 const esquiteSanPedro = new EloteGourmet("criollo",250, "cama de barro artesanal");
 console.log(esquiteSanPedro.imprimir());


 //polimorfismo

 const servirAlCliente = (tipoElote) => {
    console.log("Por favor, consuma lo siguiente: "+tipoElote.imprimir());
 }

 console.log(\n polimorfismo);
 servirAlCliente(vasolote);
 servirAlCliente(esquiteSanPedro);


//Encapsulación: que no se tenga acceso a algunos atributos y métodos.