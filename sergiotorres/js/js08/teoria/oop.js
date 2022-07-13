console.log("Sesión JS08 OOP");

const elote = {
    tipo:"criollo",
    servido: "vasito", 
    color:"amarillo", 
    size:"chico ", 
    costo: 25, 
    preparado: true,
    marcaMoriras: function(){
        return `Elote ${this.tipo } con molleja en ${this.servido} `
    },
    dorilocos: function(conCuerito){
        return `Elote ${this.tipo } con doritos en bolsa 
                ${conCuerito==true ? " y cueritos": ""}`
    }

};

console.log("-----Venga por su elote-----")
console.log("Tenemos elote tipo: " +  elote.tipo);
console.log("Servido en: " + elote["servido"]);
console.log("Costo del producto $" + elote.costo);
console.log("\n-----Actualización del costo-----")
elote.costo = 35;
elote["costo"] = 15;
console.log("Costo del producto $" + elote.costo);
console.log("\n-----Solicitudes del cliente------")
console.log("Me sirve un " + elote.marcaMoriras() );
console.log("Me sirve un " + elote.dorilocos(false));
console.log("Me sirve un " + elote.dorilocos(true));
console.log("\n-----Agregando nuevo atributo------")
console.log("Antes del cambio " + Object.keys(elote));
elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo " + Object.keys(elote));
