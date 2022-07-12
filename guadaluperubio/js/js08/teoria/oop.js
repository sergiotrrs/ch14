console.log("SESIÓN JS02 OOP");

const elote ={ 
    tipo:"criollo",
    servido: "vasito",
    color: "amarillo" ,
    size: "chico", 
    costo: 25, 
    preparado: true,
    marcaMoriras: function(){
        return `elote  ${this.tipo} con molleja en ${this.servido} `
    }, 
    dorilocos: function(conCuerito) {
        return ` Elote ${this.tipo} con doritos en bolsa 
        ${conCuerito==true ? "y cueritos": ""}`
    },


};

console.log("venga por su elote")
console.log("tenenos elote tipo: " +elote.tipo)
console.log("servido en : " +elote["servido"]);
console.log("costo del producto: " +elote.costo);
console.log("\n------actualizacion del costo-------")
elote.costo= 35;
elote['costo']=15;
console.log("costo del producto $: " +elote.costo);
console.log("\n---Solicitud del cliente-----");
console.log("me sirve un " +elote.marcaMoriras());  //se manda a llamar asi porque es una funcion y queremos mandaar a llamrla en este momento
console.log("me sirve un " +elote.dorilocos(false));
console.log("me sirve un " +elote.dorilocos(true));

console.log("\n--------sagregando nuevo atributio-------");
console.log("antes del cambio" +object.keys(elote));

elote.pica =true;
delete elote.tipo;
console.log("");

