console.log ("JS08");

const elote = {
    tipo: "criollo", servido: "vasito", 
    color: "amrillo", size: "chico", 
    costo: 25, preparado: "true",
    marcaMoriras: function(){
    return `Elote ${this.tipo } con molleja en ${this.servido}`
    },
    dorilocos: function(conCuerito){
    return `Elote ${this.tipo } con DORILOCOS ${conCuerito==true ? "y cueritos": ""}`
    
    }
};

console.log("-----Venga por su elote-----");
console.log("Tenemos elote tipo: " + elote.tipo);
console.log("Servido en: " + elote["preparado"]);
console.log("Costo del producto: " + elote.costo);
console.log("Actualización del costo");
elote.costo=35;
elote['costo'] = 15;
console.log("Costo del producto" + elote.costo)
console.log("Solicitud del cliente");
console.log("Por favor, me sirve un " + elote.marcaMoriras());
console.log("Me sirve un "+ elote.dorilocos(false));
console.log("Me sirve un " + elote.dorilocos(true));

console.log("Antes del cambio" + Object.keys(elote));
elote.pica = true;
delete elote.tipo;
console.log("Después del cambio" + Object.keys(elote));

