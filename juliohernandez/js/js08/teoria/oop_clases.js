console.log("JS08 OOP Clases");

/**
 * new Array es la clas Array!
 */

//Declaración Comienza mayúscula
class Elotes{
    //Definición de atributos
    tipo; 
    color;
    costo;
    servido;

    //Definición de constructor
    //Atributo de la clase
     constructor(tipo="criollo", color="amarillo", costo=0, servido=""){
        this.color = color; //Se inicializa el color de la clase como el color del parámetro.
        this.costo = servido;
        this.servido = servido;
    }

    //Creando métodos
    imprimir(){
        return (`Se ha creado un obj Elote de 
        tipo: ${this.tipo}
        color: ${this.color}
        costo: ${this.costo}`);
    }
}

const esquite = new Elotes("blanco"); //Parámetro de entrada
const vasoElote = new Elotes("criollo","negro",23);
const doriloki = new Elotes("",null,34);
const entero = new Elotes("",undefined,15);

//Llamando al método.
console.log(esquite.imprimir())