console.log("Sesion JS08 OOP");
//Manera de declarar un objeto
const elote = {
    //atributos
    tipo: "criollo",
    servido: "vasito",
    color: "amarillo",
    tamanio: "chico",
    costo: 25,
    preparado: true,
    //metodos
    marcaMoriras: function () {
        return `Elote ${this.tipo} con molleja en ${this.servido}`
    },
    dorilocos: function (conCuerito) {
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito ? "y cueritos" : ""}`
    }
};
console.log(elote);

console.log("Venga por su elote");
console.log("Tenemos elote tipo " + elote.tipo);
console.log("Servido en " + elote["servido"]);
console.log("Costo del producto " + elote.costo);
console.log("Actualizacion de costo");
/**
 * Las 2 maneras de abajo sirven para cambiar cualquier valor del objeto
 * 
 * objeto.atributo = "nuevoValor"
 * objeto[atributo] = "nuevoValor"
 */
elote.costo = 35;
elote["costo"] = 40;
console.log("Costo del producto " + elote.costo);
console.log("\n------Preparacion de cliente---------");
console.log("Me sirve un " + elote.marcaMoriras() + " por favor");
console.log("Me sirve un " + elote.dorilocos(false));
console.log("Me sirve un " + elote.dorilocos(true));
console.log("\n------Agregando nuevo atributo---------");
console.log("\n------antes del cambio---------"+Object.values(elote));
elote.pica=true;
console.log("Nuevo atributo "+Object.values(elote));
console.log("Nuevo atributo "+Object.keys(elote));

delete elote.tipo;
console.log("Nuevo atributo "+Object.keys(elote));