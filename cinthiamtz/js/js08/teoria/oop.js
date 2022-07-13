console.log("Sesion ");

const elote ={
    tipo:"criollo",
    servido: "vasito",
    color:"amarillo",
    size:"chico",
    costo:25,
    preparado: true,
    //metodos
    marcaMoriras: function(){
        return ` Elote ${this.tipo} con molleja en ${this.servido}`
    },//no olvidar la coma     
    dorilocos:function(conCuerito){
        //En cuertios no se pone this porque no pertenece al objeto se esta insertando
        return `Elote  ${this.tipo} con doritos en bolsa
         ${conCuerito? "y cuerito":""}`
    }
} 

console.log("-------Venga por su elote");
console.log("Tenemos elote tipo: " + elote.tipo);
console.log("Servido: " + elote["servido"]);
console.log("Costo del producto $: " +elote.costo);
console.log("\n ----Actuliazacion del costo--");
elote.costo=35;
elote['costo']=15;
console.log("Costo del producto $: " +elote.costo);
console.log("\n prepracion del cliente" )
console.log("Por favor, me sirve un "+ elote.marcaMoriras());
console.log("Por favor, me sirve un "+ elote.dorilocos(false));
console.log("Por favor, me sirve un "+ elote.dorilocos(true));
console.log("Antes del cambio" + Object.values(elote));
console.log("Antes del cambio" + Object.keys(elote));
//Agregando nuevo atributo
elote.pica=true;
//eliminar 
delete elote.tipo;

//console.log("Nuevo atributo" + Object.values(elote));
//.keys imprime todas las claves sin el valor
console.log("Nuevo atributo" + Object.keys(elote));