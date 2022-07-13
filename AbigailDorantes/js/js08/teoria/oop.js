console.log("Sesion JS08 OOP");

const elotes = {
    type: "criollo",
    servido: "vasito",
    color: "amarillo", 
    size: "chico", 
    costo: 25, 
    preparado:true,
    marcaMoriras: function(){
        return `Preparando elote ${this.type} con molleja en ${this.servido}`
    },
    dorilocos:function(conCuerito){
        return `Elote ${this.type} con doritos en bolsa ${conCuerito? "y cueritos" : ""}`
    } ,
};

console.log("Venga por su elote");
console.log("Tenemos elote tipo:" + elotes.type);
console.log("Servido en: " + elotes["servido"]);
console.log("Costo del producto $" + elotes.costo);
console.log("\n --------- Actualizacion del costo-------------" );
elotes.costo = 35;
elotes["costo"] = 15;
console.log("Costo del producto $" + elotes.costo);
console.log("\n ---------  Solicitudes del cliente -------------" );
//Queremos que se ejecute en este momento por eso lleva parentesis
console.log("por favor me sirve un " + elotes.marcaMoriras());
console.log("por favor me sirve un " + elotes.dorilocos(false));
console.log("por favor me sirve un " + elotes.dorilocos(true)); 
console.log("Antes del cambio: " + Object.keys(elotes));
elotes.pica=true;
delete elotes.type;
console.log("Nuevo atributo: " + Object.keys(elotes));




