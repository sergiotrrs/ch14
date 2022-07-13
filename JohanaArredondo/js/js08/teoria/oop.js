console.log("Sesion js08 oop");

const elote ={
    tipo: "criollo",
    servido: "vasito", 
    color: "amarillo", 
    size: "chico", 
    costo: 25, 
    preparado: "true", 
    marcaMoriras: function(){
        return `elote ${this.tipo} con molleja en ${this.servido}`
    },
    dorilocos: function(conCuerito){
        return  `elote ${this.tipo} con doritos en bolsa ${conCuerito? " y cueritos": ""}`
    }
};

console.log("Venga por su elote");
console.log("Tenemos elote tipo: "+elote.tipo);
console.log("servido en: "+ elote["servido"]);
console.log("costo del producto $ "+elote.costo);
console.log("\nActualizacion del costo");

elote.costo = 35;
elote['costo'] = 15;
console.log("Costo del producto $"+elote.costo); 
console.log("\n Solicitud del cliente");
console.log("Me sirve un "+elote.marcaMoriras());
console.log("Me sirve un "+elote.dorilocos(false));
console.log("Me sirve un "+elote.dorilocos(true));
console.log("antes "+Object.values(elote));

console.log("\n Agregando nuevo atributo");

elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo "+Object.keys(elote));
