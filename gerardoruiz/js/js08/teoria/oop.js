console.log("Sesión O.O.P. JS08")


const elote  = {
    presentacion: "vasito",
    tipo: "criollo",
    color: "amarillo",
    size: "chico",
    precio: 25,
    preparado: true,
    marcaMoriras: function(){
        return `elote ${this.tipo} con molleja en ${this.presentacion}`
    },
    dorilocos(conCuerito){
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito ? "y cueritos": ""}`
    }

};

console.log("----------Venga por su elote----------");
console.log("Tenemos elote tipo " + elote.tipo)

console.log("Servido en" + elote["presentacion"])
console.log(`Le cobro ${elote.precio} por su elote`);

elote.precio = 35;
console.log(`El es precio del esquite grande es: $${elote.precio}` );
console.log(" \n --------------Solicitudes del cliente-------------")
console.log(" Me da un " + elote.marcaMoriras() );
console.log(" Me da un " + elote.dorilocos(false) );
console.log(" Me da un " + elote.dorilocos(true) );
console.log("Antes del nuevo atributo  " + Object.keys(elote) );
elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo  " + Object.keys(elote) );
