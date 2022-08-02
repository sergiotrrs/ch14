console.log(`Sesion JS08 Orientada a objetos`);

const elote = {
    tipo:"Criollo",
    presentacion: "Vaso", 
    color:"Amarillo", 
    size:"Chico", 
    costo: 25, 
    preparado: true,
    //Es un metodo, que tiene acciones
    marcaMoriras: function() { 
        //El .this se utiliza cuando 
        return `Elote ${this.tipo} con molleja en ${this.presentacion}`
    },
    //Es un metodo, que tiene acciones
    dorilocos: function(conCuerito) { 
        //No se le coloca .this porque es una entrada de la funcion
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito ? `y cueritos` : ``}`;
    },
};
console.log(`**** Venga por su elote ****`.toUpperCase());
console.log(`Tenemos elote de tipo: ${elote.tipo}`);
console.log(`Presentacion: ${elote["presentacion"]}`);
console.log(`Costo: $${elote.costo} pesos`);
console.log(`**** ACTUALIZACION DE COSTO ****`);
elote.costo = 35;
console.log(`Costo: $${elote.costo} pesos`);
//elote["presentacion"] = "Azado";
//console.log(`Presentacion: ${elote["presentacion"]}`);
console.log(`\n **** Solicitudes del cliente ****`);
console.log(`Me sirve un ${elote.marcaMoriras()}`);
console.log(`Me sirve un ${elote.dorilocos(true)}`);
console.log(`Me sirve un ${elote.dorilocos(false)}`);

console.log(`\n **** AGREGANDO NUEVO ATRIBUTO ****`);
console.log(`Antes del cambio ${Object.keys(elote)}`);
//Agrega un nuevo atributo
elote.pica = true;
console.log(`Despues del cambio ${Object.values(elote)}`);
delete elote.tipo;
console.log(`Antes del cambio ${Object.keys(elote)}`);
