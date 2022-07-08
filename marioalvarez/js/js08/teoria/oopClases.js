console.log("OOP clases");

/* const miArr=[1,2,3,4,5];
//Crea qun arreglo con 10 elementos indefinidos
const miArrConstructor= new Array(10);

console.log(miArr);
console.log(miArrConstructor); */

/********************************CLASES***************************** */
//Clases inician con mayuscula
class Elote{
    //Encapsulamiento de la clase se utiliza #,al estar encapsulado, no puedo acceder directamente (me l marcará como indefinido)
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    /*
        No, no puedes, JavaScript no admite sobrecarga de ningún tipo.
     */
    constructor(tipo="criollo", costo=1, servido=""){
        this.#tipo=tipo;
        this.#costo=costo;
        this.#servido=servido;
    }
    /**
     * Existen métodos especiales llamados setters and getters, que nos permitiran acceder
     * a los atributos. Se realiza una función y se le antepone la palabra set(establecer) o get (obtener)
     * generalmente se le ponen el mismo nombre del atributo
     * 
     * Para invocar los setters o getters, no se utilizan parentesis como las funciones
     */
    get costo(){
        return this.#costo+10;
    }

    /*
    set costo(nuevoCosto){
        this.#costo=nuevoCosto;
    }*/

    get tipo(){
        return this.#tipo;
    }
    set tipo(nuevoTipo){
        this.#tipo=nuevoTipo;
    }

    //Método
    //Puedo encapsular un método  anteponiendo #
    imprimir(){
        return(`Se ha creado un objeto elote:
        tipo: ${this.#tipo}
        costo: ${this.#costo}
        servido en: ${this.#servido}
        `);
    }

}

//Se realiza una subclase(child) de Elote

class EloteGourmet extends Elote{
    //Con la plabara  extends estamos heredando los atributos  y  métodos de la clase padre
    //Atributos de esta clase hija
    #caducidad;

    //Así como .this hace referencia al objeto que lo invoca, la palabara .super invoca a los atributos y métodos e la clse padre
    constructor(tipo, costo,servido){
        //super.costo=costo; // Estoy accediendo al set de costo, De esta forma puedo acceder a los parámetros
        //super(); //Porque ya tengo  parámetros por defecto
        super(tipo, costo, servido); //Estableciendo super puedo accerder all constructor de la clase padre. 
        //La fecha +10 min
        this.#caducidad=Date.now()+1000*60*10;// Me entrega el valor en ms
    }

    //Sobreescritur de métodos
    //Se tiene el mismo nombre de  étodo de mi clase superiror
    imprimir(){
        //llamo el método de la clase superior
        return (super.imprimir()+"\nLa caducidad:"+new Date(this.#caducidad));
    }

}

const esquite =new Elote("blanco",51,"vasito");
const vasoElote= new Elote("amarillo", 23, "vasito");
const doriloco= new Elote("mezcla fina", 45,"plato");
//Me marcará como indefinido como está encapsulado pero como
//ya cree un getter, lo obtiene desde ahí, 
console.log("Esquite costo:"+esquite.costo);
//Se utiliza el setter de costo, pero como comenté la función setter de costo, no cambiará el valor
esquite.costo=100; // Si lo llego a poner en el console.log si lo hace jaja
console.log("Esquite costo:", esquite.costo);
console.log(esquite.imprimir());
/**************************************************************** */
console.log("\n Usando herencia");
const esquiteSanPedro = new EloteGourmet();
const esquiteSanPedro2 = new EloteGourmet("criollo",250, "Plato artesanal");
console.log(esquiteSanPedro.imprimir());
console.log(esquiteSanPedro2.imprimir());

//Usar polimorfismo
/**
 * Una referencia a una clase (atributo, parámetro o declaración local o elemento de un vector) 
 * acepta direcciones de objetos de dicha clase y de sus clases derivadas
 * 
 * Pues bien, significa que objetos de diferentes clases pueden ser accedidos utilizando 
 * el mismo interfaz, mostrando un comportamiento distinto (tomando diferentes formas) según cómo sean accedidos.
 */
const servirCliente=(tipoElote)=>{
    console.log("Por favor, cliente, consuma lo siguiente\n"+ tipoElote.imprimir());    
}

servirCliente(vasoElote);
servirCliente(esquiteSanPedro2);