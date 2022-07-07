console.log("Sesión JS08 POO");

const elote = {
    tipo: "criollo",
    servido: "vaso",
    color:"amarillo",
    tamaño:"chico",
    costo: 25,
    preparado: true,
    marcaMoriras: function(){
        return `elote ${this.tipo} con molleja en ${this.servido}`
    },
    dorilocos: function(conCuerito){
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito ? " y cueritos" : ""}`
    }
};

console.log(`------- Venga por su elote -------`);
console.log(`Tenemos elote tipo: ${elote.tipo}`);
console.log(`Tenemos elote servido: ${elote["servido"]}`);
console.log(`------- Actualización de costo -------`);
elote.costo = 15;
console.log(`Elote costo: ${elote.costo}`);
console.log("\n -----Solicitudes del cliente.----");
console.log(`Me sirve un ${elote.marcaMoriras()}`) //con paréntesis para que se ejecute la función y no sea sólo un callback
console.log(`Me sirve un ${elote.dorilocos(true)}`);
console.log(`Me sirve un ${elote.dorilocos(false)}`);

