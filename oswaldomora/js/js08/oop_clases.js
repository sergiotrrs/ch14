console.log("OOP CLASES");
/**
 * Pausa para recordar cosas
 * Formas de crear un arreglo
 */
// const miArreglo = [1,2,3,4];
// const miArregloConstructor = new Array(10);

// console.log(miArreglo);
// console.log(miArregloConstructor);


/************************************************ */
class Elote{
    //Definiendo atributos
    //Encapsulamosla clase usando el caracter # 
    // Encapsulado no puedo acceder directamente al atributo
    #tipo;
    #costo;
    #servido;

    //Definiendo constructor
    constructor(tipo="criollo", costo=0, servido=""){
        this.#tipo = tipo;
        this.#costo = costo;
        this.#servido = servido;
       /* console.log(`Se ha creado un objeto de tipo elote
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en: ${this.servido}
        `);*/
    }
    
    /**
     * 
     * Existen métodos especiales llamados setters and getters, nos van a permitir acceder a los atributos que nosotros queramos
     * se realiza una función y se le antepone la palabra set (Establecer) o get (obetener).
     */
    
    get costo(){
        return this.#costo;
    }
    
    set costo(nuevoCosto){
        this.#costo = nuevoCosto
    }

    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }
    
    //Realizando métodos de mi clase
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
    #caducidad

    //Así como .this hace referencia al objeto que lo invoca, la palabra super invoca a los atributos y métodos de la clase superior
    constructor (tipo, costo, servido){
        //super.costo = costo; de esta forma podrias establecer los parametros 
        super(tipo, costo, servido)//Estableciendo super() se accede al constructor de la clase superior
        this.#caducidad = Date.now() + 1000*60*10 //Me entrega el valor en ms
}
//Sobreescritura de métododos
//Se tienne que usar el mismo nombre de método de mi clase superior
imprimir(){
    return super.imprimir() + "\n La caducidad  es: " + new Date(this.#caducidad)
}
}

const esquite = new Elote("blanco", 51, "vasito");
const vasoElote = new Elote("amarillo", 23, "vasito");
const doriloko = new Elote("mezcla fina", 35, "palito");
const entero = new Elote("asado", 25, "palito");
esquite.costo = 100;
console.log("Cambio del costo: " + esquite.costo);
console.log(esquite.imprimir());

//***************************************** */
console.log ("\n USANDO HERENCIA")
const esquiteSanPedro = new EloteGourmet("criollo", 250, "cama de barro artesanal",  );
console.log(esquiteSanPedro.imprimir());

//Usar polimorfismo
const servirAlCliente = (tipoElote) =>{
    console.log ("Por favor, cliente, consuma lo siguiente: " + tipoElote. imprimir())
}
console.log("\n-----------Polimorfismo------")
servirAlCliente (vasoElote);
servirAlCliente (esquiteSanPedro);
