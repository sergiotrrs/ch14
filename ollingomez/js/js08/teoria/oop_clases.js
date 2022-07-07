console.log("JS08 OOP Clases");

// /**
//  * Pausa para recordar unas cosas
//  */
// const miArreglo=[1,2,3,4];
// //const miArregloConstructor= new Array(1,2,3,4);
// const miArregloConstructor= new Array(10); //genera un arrelo vasio de 10 elementos

// console.log(miArreglo);
// console.log(miArregloConstructor);
// miArreglo.splice(1,1,50,35,66);

//************************************************************ */

//Todas las clases que realisemos las empesaremos con la primera letra mayuscula
class Elote {
    //Definiendo atributos
    tipo;
    costo;
    servido;

    //Definiendo constructor
    //Inicielizar un parametro en una funsión se inicializa poniendo un igual
    constructor(tipo="criollo", costo=0, servido="") {
        //this hase referencia al objeto en caso de que se ambiguo 
        //tipo=tipo entoces se pone this.tipo
        //para no usarlo se pone un nombre diferente en el argumento de la función
        this.tipo=tipo;
        this.costo=costo;
        this.servido=servido;
        // console.log(`Se ha generado un objeto elote:
        // tipo: ${this.tipo}
        // costo: ${this.costo}
        // servido en: ${this.servido}`);
    }

    //Realizando método de mi clase
    imprimir(){
        return (`Se ha generado un objeto elote:
        tipo: ${this.tipo}
        costo: ${this.costo}
        servido en: ${this.servido}`);
    }
}

const esquite = new Elote("blanco",25, "vasito");
const vasoElote = new Elote("amrillo",23,"vasito");
const doriloKo = new Elote("mezcla fina",35,"bolsa");
//const entero = new Elote(undefined,undefined,"palito");//salen los valores definidos en el constructor
const entero = new Elote("asado",20,"palito");

console.log(esquite.imprimir());