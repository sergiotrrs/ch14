/*const miArreglo = [1,2,3,4];
const miArregloConstructor = new Array(1,2,3,4); //si le ongo un sólo numero se crea ese número de elementos vacíos

console.log(miArreglo);
console.log(miArregloConstructor);
*/

//Encapsulando, se necesita oner simbolo de gato en atributos


class Elote{
   //Definiendo atributos
    #tipo;
    #color;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo=0, servido=""){
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
    }

//Existen métodos especiales: setters an getters
//Se realiza una función y se le antepone la palabrea set
//Parainvocar los serrers o getters, no se utilizan parentesis con las funciones

    get costo(){
        return this.#costo+9;
    }

    /*set costo(nuevoCosto){
        this.#costo =nuevoCosoto
    }
    */

    get tipo(){
        return this.#tipo;
    }
    
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo =nuevoTipo;
    } 
    
    imprimir (){
        return (`Se ha creado un objeto elote:
    tipo ${this.#tipo}
    costo: ${this.#costo}
    servid en: ${this.#servido}
    `);
    }
}
//Así como .this hace referncia al objeto que lo invoca
//las palabras super invoca a los atributos y métodos de la clase superior, incluyendo el constructor
class EloteGourmet extends Elote{
    #caducidad

    constructor(tipo, costo, servido){
        //super.costo = costo; De estaforma podríamos establecer los parámetros
        super(tipo,costo,servido) //estableciendo super() se accede al constructor de la clase superior
        this.#caducidad = Date.now()+1000*+60*10 //Date.now me entrega el tiempo en ms

        }
    //Sobreescritura de métodos
    //Se tiene que usar el mismo nombre de método de mi clase superior
    imprimir(){
        return super.imprimir() + "\n La caducidad es " + new Date(this.#caducidad);
    }
}

const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "bolsa");
const entero = new Elote("asado", 20, "palito");

esquite.costo = 100
console.log("Cambio del costo " + esquite.costo);
console.log(esquite.imprimir());

console.log("Usando herencia");
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanol");
console.log(esquiteSanPedro.imprimir());

//Usar polimorfismo
const servirAlCliente = (tipoElote)=>{
    console.log("Por favor, cliente, consuma lo siguiente: " + tipoElote.imprimir());

}

console.log("Polimorfismo");        
servirAlCliente(vasoElote);
servirAlCliente(esquiteSanPedro);
