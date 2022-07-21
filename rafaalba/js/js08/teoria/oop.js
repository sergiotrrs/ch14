console.log("Sesión JS08 OOP");

const elote = {
    tipo: "criollo", //Atributo
    servido: "vaso",
    color:"amarillo", 
    size:"chico", 
    costo: 25, 
    preparado: true,
    marcaMoriras: function () { //Método
        return `elote ${this.tipo} con molleja en ${this.servido} `
    },
    dorilocos: function (conChorizo) {
        
        return `Elote ${this.tipo} con dorito en bolsa 
        ${conChorizo ? " y chorizo " : "" }` //operador ternario ? x : y ;
    }
};

console.log("---------- venga por su elote ------------");
console.log("Tenemos elote tipo: " + elote.color);
console.log("Servido en: " + elote['servido']);
console.log("Costo del elote: $ " + elote.costo);
console.log("\n----------Actualización del costo------");
elote.costo = 35;
elote['costo'] = 15;
console.log("Costo del elote: $ " + elote.costo);
console.log("\n----------Solicitudes del cliente------");
console.log("Me sirve un " + elote.marcaMoriras() );
console.log("Me sirve un " + elote.dorilocos(false));
console.log("Me sirve un " + elote.dorilocos(true));
console.log("\n----------Agregando nuevo atributo------");
console.log("Antes del cambio " + Object.keys(elote)); //las clases inician con mayus "Object"
elote.pica = true;
delete elote.tipo;
console.log("Despues del cambio " + Object.keys(elote));







