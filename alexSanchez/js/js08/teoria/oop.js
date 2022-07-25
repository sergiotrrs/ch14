console.log("Sesion JS08 OOP")
const elotes = {
tipo:"criollo",
servido:"vaso",
color:"amarillo" , 
size:"chico", 
costo:25 , 
preparado:true,
marcaMoriras: function(){
        return `elote ${this.tipo} con molleja en ${this.servido}`
    },
dorilocos: function(conCuerito){

    return `elote ${this.tipo} con doritos en bolsa ${conCuerito? " y cueritos": ""}`

}
};
console.log("-----Venga por su elote------")
console.log("Tenemos elotes tipo " + elotes.tipo)
console.log("Servido en : " + elotes["servido"])
console.log("Costo del producto $ " +elotes.costo)
elotes.costo=35;
elotes['costo']= 15;
console.log("Actualiacion del costo $" +elotes.costo);
console.log("\n-----Solicitudes de clientes-----")
console.log("Por favor me sirve un " +elotes.marcaMoriras())
console.log("Por favor me sirve un " +elotes.dorilocos(false))
console.log("Por favor me sirve un " +elotes.dorilocos(true))
console.log("Antes del cambio " + Object.keys(elotes))
elotes.pica=true;
delete elotes.tipo;
console.log("Nuevo atributo "+ Object.keys(elotes));
