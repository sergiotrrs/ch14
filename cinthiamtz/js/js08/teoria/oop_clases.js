/**
 * Pausa para recordar unas cosas
 */

/*const miArreglo =[1,,2,3,4];
const miArregloConstructor = new Array (10);

console.log(miArreglo);
console.log(miArregloConstructor);

//******** */


console.log("JS08 OOP Clases");
// el nombre de las clases deben de ser en mayusculas 
class Elote{
    //Aqui no se pone el let: solo es trabuto;
    //Definiendo atributos 

    #tipo;    
    #costo;
    #servido;

    //Me falta lo definir un constructor
    //Definiendo constructor
    constructor(tipo = "crillo",  costo=0, servido=""){
        this.#tipo = tipo;
        this.#costo=costo;
        this.#servido= servido;
        //tipo =tipoElote// no se usas
        /*console.log(`Se ha creado un objeto elote 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en : ${this.servido}
        `);*/
    }

/**
 *Existen métodos especiales llamados setters and getters, 
 nos van a permitir acceder a los atributos que nosotros queramos
 se realiza una función y se le antepone
 * se realiza una funcion y se le antepone la palabra set (establcer) o get (obtner).
 * Para invicar los setter o getters , no se utizan parentesis como las funciones
 */

//Leer el costo
get costo(){
return this.#costo;
}
get tipo(){
return this.tipo
}
//modificar el valor
set tipo(nuevo){
    this.#tipo=nuevoTipo;
}

set costo(nuevoCosto){
    this.#costo=nuevoCosto
}


    imprimir(){
        return (`Se ha creado un objeto elote 
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido en : ${this.#servido}
        `);
    }
}

//****Realiza una subclase (child) de Elote*********************** */
//extends indica que va a heredar funciones y atributos
class EloteGourmet extends Elote{
    #caducidad
    //asi como .this hace referencia al objeto que lo invoca
    //la palabfras super invoca a los tributos y metodos de la clase superior
    //incluyendo al contructor 
    constructor ( tipo , costo , servido ){
   // super.costo =costo ; de esta forma podriamos establecer los parametros
    super(tipo, costo, servido)//estableciendo super()se accede al constructor de la clase superior padre
        this.#caducidad = Date .now()+1000*60*10 //entrega el valor ms
    }
    //Sobreescritura de metodos
    //Se tiene que usar el mismo nombre del metodo de mi calse superior
    imprimir(){
       return super.imprimir() + "\n La caducidad es " + new Date (this.#caducidad);
    }
}


const esquite = new Elote("blanco", 51 , "vasito");
const vasoElote =new Elote("amarillo" , 23 , "vasito");
const doriloki= new Elote("mezacla fina" , 35 , "bolsa");
const entero = new Elote("null" , 20 , "palito");
const enteroDos = new Elote(undefined, undefined, "vasito");
esquite.costo=100;
console.log("cambio del costo" + esquite.costo);

console.log (esquite.imprimir());
///*****/ */
console.log("\n usando la herencia")
const esquiteSanPedro = new EloteGourmet("criollo" , 250 ,"cama de barro" );
console.log(esquiteSanPedro.imprimir());


//Usar polimorfismo

const servirAlCliente = (tipoElote) => {
    console.log("por favor, cliente, consuma lo siguiente :" + tipoElote.imprimir());
}
servirAlCliente( vasoElote);
servirAlCliente(esquiteSanPedro);