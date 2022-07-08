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
    tipo;
    color;
    costo;
    servido;

    //Me falta lo definir un constructor
    constructor(tipo = "crillo",  costo=0, servido=""){
        this.tipo = tipo;
        this.costo=costo;
        this.servido= servido;
        //tipo =tipoElote// no se usas
        /*console.log(`Se ha creado un objeto elote 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en : ${this.servido}
        `);*/
    }
    imprimir(){
        return (`Se ha creado un objeto elote 
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en : ${this.servido}
        `);
    }
}

const esquite = new Elote("blanco", 25 , "vasito");
const vasoElote =new Elote("amarillo" , 23 , "vasito");
const doriloki= new Elote("mezacla fina" , 35 , "bolsa");
const entero = new Elote("null" , 20 , "palito");
const enteroDos = new Elote(undefined, undefined, "vasito");

console.log (esquite.imprimir());
