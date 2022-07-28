console.log("Sesión de POO");


const elote = { 
    tipo: "criollo",
    servido: "vasito",
    color : "amarillo", 
    size: "chico", 
    costo: 25, 
    preparado: true,
    marcaMoriras: function(){
        return `elote ${this.tipo} con molleja en ${this.servido}`
    },
    dorilocos: function(conCuerito){
        return `Elote ${this.tipo } con doritos en bolsa ${conCuerito? " y cueritos": ""} `
    },
    

};
console.log("--------------Venga por sus Elotes---------------");

console.log("Tenemos elote tipo " + elote.color);
console.log("Servido en: " + elote["servido"] );
console.log("Costo del producto $ " + elote.costo);

console.log("---------Actualización del Costo--------");
elote.costo = 35;
elote["costo"] = 15;

console.log("Costo del producto $ " + elote.costo);

console.log("--Solicitudes del Cliente--");

console.log("Me sirve un " + elote.marcaMoriras());

console.log("Me sirve un " +  elote.dorilocos(false));
console.log("Me sirve un " + elote.dorilocos(true));
console.log("----Agreagando un nuevo atributo----");
console.log("Antes del Cambio " + Object.keys(elote));
elote.pica = true;

console.log("Nuevo Atributo " + Object.keys(elote));






