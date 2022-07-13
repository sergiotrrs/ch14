console.log("sesion js08 OOP");

const elote = {
    tipo:"criollo",
    servido:"vaso",
    color:"amarillo ",
    size:"chico",
    costo:25,
    preparado:true,
    marcaMoriras: function(){
        return ` elote ${this.tipo} con mollejas en ${this.servido}`
    },
    dorilocos: function(conCueritos){
        return`Elotes ${this.tipo} con doritos en bolsa ${conCueritos? "y cueritos":""}`
    }
};
console.log ("---------venga por su elote--------===")
console.log("tenemos elote tipo: ", elote.tipo);
console.log("servido en:", elote['servido']);
console.log("color:",elote.color);
console.log("size:",elote.size);
console.log("actulizamos costo");
elote.costo=35;
console.log("costo:",elote.costo);
console.log('solicitud del cliente');
console.log(`por favor me das un  ${elote.marcaMoriras()}`);
console.log(`por favor me das un  ${elote.dorilocos(false)}`);
console.log(`por favor me das un  ${elote.dorilocos(true)}`);
console.log(`antes del cambio  ${Object.keys(elote)}`);
elote.pica = true;
delete elote.tipo;
console.log(`con nuevo atributo  ${Object.keys(elote)}`);