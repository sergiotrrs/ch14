console.log("JS08 OOP Clases");

/**Formas de creas un arreglo , repaso
 * const miArreglo = [1,2,3,4,5]; //para definir arreglo
const miArregloConstructor = new Array(10); // crea o construye un arreglo 

console.log(miArreglo); //cuatro posiciones pero definidas "[1,2,3,4]"
console.log(miArregloConstructor); //tiene 10 posiciones , pero estan indefinidas "10[]"
miArreglo.splice(1,1) otra forma de arreglo
 */

//******************************************************************* */
class Elote{//Las clases empiesan con mayuscula "Elote"
   //Definiendo atributos
   //encapsulamos la clase usando el caracter #class
   //Al estar encapsulado no puedo acceser directamente
   #tipo;
   #costo;
   #servido;

   //Definiendo constructor
   constructor(tipo="criollo",costo=0,servido=""){ //dentro de el parentesisis se declaran parametros de entrada
       this.#tipo = tipo; //se usa el dis para poder diferenciar el tipo de atributo "linea 14" de los parametros en la linea 20
       this.#costo= costo;
       this.#servido= servido;
      /* Se comento para ver como funciona el encapsulado
       console.log(`Se ha creado un objeto de tipo elote:
       tipo ${this.#tipo} 
       costo ${this.#costo}
       servido en: ${this.#servido}
       
       `);*/
   }
  /**
   * Existen metodos especiales llamados setters and getter 
   * se realiza una funcion y se le antepone la palabra set(Establecer) o get(Obtener).
   * Para invocar los setters o getters , no se utilizan parentesis como en las funciones 
   */
  get costo(){
    return this.#costo;
  }
  /*set costo(nuevoCosto){
    this.#costo = nuevoCosto
  }*/
  get tipo(){
    return this.#tipo;
  }
  set tipo(nuevoTipo){
    this.#tipo=nuevoTipo;
  }

  //Realizando metodos de mi clase
  imprimir(){
    return(`Se ha creado un objeto elote:
    tipo:${this.#tipo}
    costo:${this.#costo}
    servido en:${this.#servido}
    `);

  }
}     

//Se realiza una subclase(child) de Elote
class EloteGourmet extends Elote{//con "extends" la class Gourmet ereda los atributos de classe elote, que es su clase superior o padre
    #caducidad
     
    //Asi como .this hace referencia al objeto que lo invoca
    //la palabra "super" invoca a los atributos y metodos de la clase superior, incluyendo el constructor
    constructor(tipo, costo,servido){
       //super.costo = costo;  De esta forma podriamos establer los parametros
       super(tipo,costo,servido) //Establenciendo "super()" se accese a la clase superior
       this.#caducidad =  Date.now()+1000*60*10 //Date.now()Me entrega el valor en ms
    }
    //Sobrescritura de metodos
    //Se tiene que usar el mismo nombre de metodo de mi clase superior
    imprimir(){
        return super.imprimir() + "\n La caducidad es: " + new Date(this.#caducidad);
    }
    
}

const esquite = new Elote("blanco" ,51 , "vasito"); //crea un objeto del tipo elote y se le asigna un atributo "blanco" ,se tiene que ir en el orden de los atributos , separados con ","
const vasoElote = new Elote("amarillo", 23,"vasito"); //crea un objeto del tipo elote y se le asigna un atributo "amarillo"
const doriloko = new Elote("mezcla fina",35 ,"bolsa"); //crea un objeto del tipo elote y se le asigna un atributo "mezclas dinas"
//const entero = new Elote(undefined, undefined,"palito"); //crea un objeto del tipo elote y se le asigna un atributo pero no se expresan por el undifined
const entero = new Elote("asado",20 ,"palito"); //crea un objeto del tipo elote y se le asigna un atributo "asado"
esquite.costo=100; //no se guarda el valor porque el getter de costo esta comentado
console.log("Cambio el costo : " + esquite.costo);
console.log(esquite.imprimir());
/**************************************************** */

console.log("\n usando herencia");
const esquiteSanPedro = new EloteGourmet("criollo" , 250 , "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());


//Usar polimorfismo**************************************************************************/
//Establece que una funcion debe tener aceso tanto a la clase superior como inferior
const servirAlCliente = (tipoElote)=>{
    console.log("Por favor , cliente , consuma lo siguiente: " + tipoElote.imprimir());
}
console.log("\n-----------Polimorfismo------------")
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);
