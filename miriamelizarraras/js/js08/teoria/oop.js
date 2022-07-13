console.log("Sesión JS08 OOP");

const elote = {
  tipo: "criollo",
  servido: "vasito",
  color: "amarillo",
  size: "chico",
  costo: 25,
  preparado: true,
  marcaMoriras: function () {
    return `elote ${this.tipo} con molleja en ${this.servido}`;
  }, //This hace referencia al objeto en el que está
  dorilocos: function (conCuerito) {
    return `elote ${this.tipo} con doritos en bolsa 
        ${conCuerito ? " y cueritos" : ""}`;/*Operador ternario "?" si es true se pone y cueritos, si es false : se pone lo que está después de los dos puntos.*/
  },
};

console.log("----Venga por su elote-----");
console.log("Tenemos elote tipo: " + elote.color);
console.log("Servido en: " + elote["servido"]);
console.log("Costo del producto $" + elote.costo);
console.log("\n--------Actualización del costo----");
elote.costo = 35;
elote["costo"] = 15;
console.log("Costo del producto $" + elote.costo);
console.log("\n-----Solicitud del cliente-----");
console.log("Por favor me sirve un " + elote.marcaMoriras()); // Se pone parentesis a elote.marcaMoriras() para llamar mandar a la funcion
console.log("Me sirve un " + elote.dorilocos(false));
console.log("Me sirve un " + elote.dorilocos(true));

console.log("\n------Agregando nuevo atributo----");
console.log("Antes del cambio " + Object.values(elote));
elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo " + Object.values(elote));

