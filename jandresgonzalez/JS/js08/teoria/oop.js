/**
 * Sesión JS08 OOP, 07/07/22
 */

//console.log("Link");

const elote = {
    tipo: "criollo",
    servido:"vaso",
    color: "amarillo",
    size:"chico", 
    costo: "25",
    preparado: true,
    marcaMoriras: function() {
        return `Chilazo: Preparando elote ${this.tipo}
        con molleja en ${this.servido}`
    },
    doriLocos: function(conCuerito) {
        return `Se abren doritos y va elote ${this.tipo}
        ${conCuerito ? "con cueritos" : ""}, con zanahorita y jugo de limón`
    }
};

console.log("Venga por su elote");
console.log("Tenemos elote tipo: ", elote.tipo);
console.log("Tenemos elote tipo: ", elote["servido"]);
console.log("Y cuesta: ", elote.costo);
console.log("\nAh, ya se infló todo");
elote.costo = "35";
console.log("Ahora cuesta: " + elote.costo);

console.log(elote.marcaMoriras());
console.log(elote.doriLocos(true));

console.log("Antes del cambio, van values: " + Object.values(elote));
console.log("Antes del cambio, van keys:" + Object.keys(elote));
elote.pica = true;
console.log("Nuevo atributo"+ Object.values(elote));
console.log("Luego del cambio, van keys:" + Object.keys(elote));

delete elote.tipo;
console.log(Object.keys(elote));
