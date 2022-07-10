console.log("JS08: OOP - Clases");
/**
 *Paisa para recorda unas cosas
 *//*
const miArreglo = [1, 2, 3, 4];
const miArregloConstructor = new Array(10);
console.log(miArreglo);
console.log(miArregloConstructor);
miArreglo.splice(1, 1);*/
/**////////////////////////////////////////////////////////////////////////////
class Elote {
       //Definiendo atributos
       //Encapsulamos la clase usando el caracter #
       //Al estar encapsulado, no puedo acceder directamente al atributo
    #tipo;
    #costo;
    #servido;
       //Definiendo constructor
       constructor(tipo="criollo", costo=0, servido="") {
	   this.#tipo = tipo;
	   this.#costo = costo;
	   this.#servido = servido;
	   /*console.log(`Se ha creado un objeto elote: 
	       tipo: ${this.tipo}
               costo: ${this.costo}
	       servido: ${this.servido}
	      `);*/
       }
     /**
      *
      *Existen metodos espaciales llamados setters y getters
      *Se realiza una funcion y se le antepone la palabra set(Establecer) o get(Obtener)
      *Para invocar los setters o getters, no se utiliza parentesis como las funciones
      */
   get costo() {
       return this.#costo+9;//se puede agregar im valor
   }
 /*  set costo(nuevoCosto) {// permite cambiar el valor de costo
       this.#costo = nuevoCosto;
   }*/   get tipo() {
       return this.#tipo;
   }
   set tipo(nuevoTipo) {
       this.#tipo = nuevoTipo;
   }
    //Realizando metodos de mi clase
       imprimir() {
	   return(`Se ha creado un objeto elote:
	       tipo: ${this.#tipo}
	       costo: ${this.#costo}
	       servido: ${this.#servido}
	      `);
	   }
}
//Se realiza una sublclase (child) de Elote
//Con la palabra extends estamos heredando los atributos y clases de la clase superior
class EloteGourmet extends Elote {
    #caducidad
    //Asi como .this hace referencia al objeto que lo invoca
    //La palabras super invoca a los atributos y metodos de la clase superior
    constructor(tipo, costo, servido) {
	//super.costo = costo; De esta forma podriamos establecer los parametros
	super(tipo, costo, servido)// Estableciendo super() se accede al constructor de la clase superior
     	this.#caducidad = Date.now()+1000*60*10  //Date.now() Me entrega el valor en ms
    }
     //Sobreescritura de metodos
    //Se tiene que usar el mismo nombre de metodo que en la clase superior
    imprimir() {
        return super.imprimir()+"\n la caducidad es "+ new Date (this.#caducidad);

 }
}

const esquite = new Elote("blanco", 25, "vasito");
const vasoelote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "bolsa");
const entero = new Elote("asado", 20, "palito");

esquite.costo = 30;//Estableciendo el valor del atributo costo//no se modifica el valor del atributo si no esta activo el set
console.log("Cambio del costo :"+esquite.costo);
console.log(esquite.imprimir());
/******************************************************************************/
console.log("\n Usando herencia");
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal");
console.log(esquiteSanPedro.imprimir());

//Usar polimorfismo
const servirAlCliente = (tipoElote) => {
    console.log("Por favor, cliente, consula lo siguiente: "+ tipoElote.imprimir());
}
console.log("\n Usando polimorfismo");
servirAlCliente(vasoelote);
servirAlCliente(esquiteSanPedro);
