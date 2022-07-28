console.log("Sesion JS08 OOP");

const elote = {
    tipo:"criollo",
    servido:"vasito",
    color:"amarilo",
    size:"chico", 
    costo: 25, 
    preparado:true,
    marcaMoriras: function(){
        return `Preparado elote ${this.tipo} con molleja en ${this.servido} `
    },
    dorilocos: function(conCueritos) {
         return `Elote ${this.tipo} con doritos en bolsa 
                 ${conCueritos? "y cueritos":""}`
    }
    
} ;


console.log("----Venga por su elote----");
console.log("Tenemos eleotes tipo" + elote.tipo);
console.log("Servido en :"+ elote["servido"]);
console.log("Costo del servicio"+ elote.costo);
console.log("---Actualizacion de costo-----");
elote.costo = 35;
elote[`costo`] = 15;
console.log("Costo del pruducto"+ elote.costo);
console.log("\n-----solicitud del cliente-------");

console.log("Me sirve un elote"+ elote.marcaMoriras()); 
console.log("Me sirve un elote"+ elote.dorilocos(false)); 
console.log("Me sirve un elote"+ elote.dorilocos(true));
console.log("\n-------Agrgr un nuevo objeto-------");
console.log("Antes del cambio"+ Object.keys(elote));
elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo" + Object.keys(elote));





