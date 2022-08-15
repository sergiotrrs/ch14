console.log("JS08 OOP Clases");

/**
 * new Array es la clas Array!
 */

//Declaración Comienza mayúscula
class Elotes{
    //Definición de atributos
    tipo; 
    color;
    #costo;
    #servido;
    //Encapsulamiento de métodos y atributos
    //Al estar encapsulado, no puedo acceder directamente al atributo
    
    
    //Definición de constructor
    //Atributo de la clase
    constructor(tipo="criollo", color="amarillo", costo=0, servido=""){
        this.color = color; //Se inicializa el color de la clase como el color del parámetro.
        this.costo = servido;
        this.servido = servido;
    }
    
    /**
     * Existen métodos especiales llamados setters and getters
     * Se realiza una función y se le antepone la palabra set(establecer) o get(obtener)
     */

    //Para acceder, se utiliza get
    get costo(){
        return this.#costo
    }

    //Para cambiar costo, se utiliza set
    set costo(nuevoCosto){
        this.#tipo = nuevoCosto
    }

    //Creando métodos
    imprimir(){
        return (`Se ha creado un obj Elote de 
        tipo: ${this.tipo}
        color: ${this.color}
        costo: ${this.costo}`);
    }
}

//Se realiza una subclase(child) de Elote
class EloteGourmet extends Elotes{
    #caducidad

    constructor(tipo,costo,servido){
        //Así como .this hace referencia al obj que lo invoca
        //'super' invoca a los atributos y métodos de la clase superior
        //super.costo = costo; //De esta forma podríamos 
        super(tipo,costo,servido); //De esta forma se accede al constructor de la clase superior
    }

    //Sobreescritura de métodos
    //Se tiene que usar el mismo nombre de método de mi clase superior
    imprimir(){
        return super.imprimir()+"\n la caducidad es: " + new Date(this.#caducidad); //Imprime lo mismo que la clase superior

    }
}

const esquite = new Elotes("blanco","blanco",34,"vasito"); //Parámetro de entrada
const vasoElote = new Elotes("criollo","negro",23);
const doriloki = new Elotes("",null,34);
const entero = new Elotes("",undefined,15);

//Llamando al método.
console.log(esquite.imprimir());
console.log(`Cambio del cost: ${esquite.costo}`);


/** * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * */
console.log("\n Usando la herencia");
const esquiteSanPedro = new EloteGourmet();
console.log(esquiteSanPedro.imprimir()); //Las clases padres no pueden acceder a los atributos y métodos hijas

//Polimorfismo: que una función debe tener acceso de igual manera a la clase superior tanto como la inferior
const servirCliente = function (tipoElote){
    console.log("Por favor, cliente, consuma lo siguiente: " + tipoElote.imprimir());
}

servirCliente(vasoElote);
servirCliente(esquiteSanPedro);