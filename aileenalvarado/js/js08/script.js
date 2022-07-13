console.log("Sesion JS08 OPP");

const elotes = {
    tipo: "criollo",
    servido: "vasito",
    color: "amarillo",
    size: "chico",
    costo: 25,
    preparado: true,
    marcaMoriras: function () {
        return `elote ${this.tipo} con molleja en ${this.servido}`
    }, 
    dorilocos: function(conCuerito){

        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito? " y cueritos": ""}`
    }, 
    
};

console.log("---------Venga por su elote---------------")
console.log("Tenemos elote tipo " + elotes.color);
console.log("Servido en: " + elotes["servido"]);
console.log("Costo del producto $: " + elotes.costo);
console.log("\n--------Actualizacion del costo----------");
elotes.costo = 35;
elotes['costo'] = 15;
console.log("Costo del producto $: " + elotes.costo);
console.log("\n----------Solicitudes del cliente--------")
console.log("Me sirve un " + elotes.marcaMoriras());
console.log("Me sirve un " + elotes.dorilocos(false));
console.log("Me sirve un " + elotes.dorilocos(true)); 
console.log("\n----------Agregando nuevo atributo--------")
console.log(" Antes del cambio " + Object.keys(elotes));
elotes.pica= true; 
delete elotes.tipo;
console.log("Nuevo atributo " + Object.keys(elotes));