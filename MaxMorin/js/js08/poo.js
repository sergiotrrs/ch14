console.log("sesion js08 poo");

const elote = {
    tipo: "criollo",
    servido: "vasito",
    color: "amarillo",
    size: "chico",
    costo: 25,
    preparado: true,
    marcaMoriras: function () {
        return `Preparando elote ${this.tipo} con molleja en ${this.servido}`

    },
    dorilocos: function (conCuerito) {
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito ? "y cueritos" : ""}`
    }
};

console.log("---venga por su elote---")
console.log("tenemos elote tipo: " + elote.tipo);
console.log("servido en: " + elote["servido"]);
console.log("costo del producto $" + elote.costo);
console.log("\n---actualizacion del costo---")
elote.costo = 35;
elote["costo"] = 15;
console.log("costo del producto $" + elote.costo);
console.log("\n---Solicitudes del cliente---")
console.log("me sirve un " + elote.marcaMoriras());
console.log("me sirve un " + elote.dorilocos(false));
console.log("me srive un " + elote.dorilocos(true));
console.log("\n---Agregando nuevo atributo---")
console.log("antes del cambio" + Object.keys(elote));
elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo " + Object.keys(elote));