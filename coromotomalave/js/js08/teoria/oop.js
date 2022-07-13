console.log("Sesion js08 OOP");


const elotes = {
color:'amarillo',
size:"chico",
costo: 25,
preparado:"true",
marcaMoriras: function() {
    return `Preparando elotes ${this.tipo} con mollejaen ${this.servido}`;
},
//Dorilocos es un metodo 
dorilocos: function(conCuerito){

    return `Elote ${this.tipo} con doritos en bolsa ${conCuerito? " y cueritos" : ""}`
}
};

console.log("------Venga por su elote------");
console.log("------tenemos elote tipo------: " + elotes.tipo);
console.log("------Costo del producto $------: " +['servido']);
console.log("------Costo del producto $:------ " + elotes.costo);
elotes.costo = 35;
elotes['costo'] = 15;
console.log("-------costo del producto------ $ " + elotes.costo);
console.log("-------Solicitudes del cliente-------")
console.log(" Por favor " + elotes.marcaMoriras())
console.log(" Me sirve un " + elotes.dorilocos(false))
console.log(" Me sirve un " + elotes.dorilocos(true))
//nuevos atributos
console.log("1. Antes del cambio " + Object.keys(elotes))
elotes.pica = true;
console.log('2. Nuevo atributo ' + Object.keys(elotes))
//para eliminar de un object

delete elotes.tipo;
console.log('1 Nuevo atributo des[ues de eliminar' + Object.keys(elotes));