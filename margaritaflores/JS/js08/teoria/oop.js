console.log("Sesión JS08");

const elote =  { 
    tipo: "criollo",
    servido: "vasito",
    color: "amarillo", 
    size:"chico",
    costo: 25,
    preparado: true,
    marcaMoriras: function(){
        return `Preparando elote ${this.tipo } con molleja en ${this.servido} `
    },
    doriLocos: function( conCuerito){
        return `Elote ${this.tipo} con doritos en bolsa 
        ${conCuerito? " y cueritos": "" }`
    }

};

console.log("------------Venga por su elote----------------");
console.log("Tenemos elote tipos: " + elote.tipo );
console.log("Servido en : " + elote["servido"] );
console.log("Costo del producto $" + elote.costo);
console.log("/n-------Actualización del costo--------")
elote.costo = 35;
elote['costo'] = 15;
console.log("Costo del producto $ " + elote.costo);
console.log("/n------Solicitud del cliente--------");
console.log("Me sirve un " + elote.marcaMoriras() );
console.log("Me sirve un " + elote.doriLocos(false));
console.log("Me sirve un " + elote.doriLocos(true));
console.log("--------Agregando nuevo atributo-------");
console.log("Antes del cambio " + Object.keys(elote));
elote.pica = true;
console.log("Nuevo atributo " + Object.keys(elote));
//Para eliminar
delete elote.tipo;
console.log("Nuevo atributo " + Object.keys(elote));