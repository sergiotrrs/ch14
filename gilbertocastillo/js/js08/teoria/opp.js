console.log("Sesion JS08 OOP");

const elote = {
  tipo: "criollo",//atributo
  servido: "vasito",//atributo
  color: "amarillo",//atributo
  size: "chico",
  costo: 25,
  preparado: true,
  marcaMoriras: function(){ //metodos
    return `Elote ${this.tipo} con molleja en ${this.servido}`
  },
  dorilocos: function(conCuerito){//metodos
    return `Elote ${this.tipo} con doritos en bolsa 
    ${conCuerito? "y cueritos":""}`
    //operador ternario ${conCuerito == true operador ternario (?) si es true imprime "y cueritos" dos puntos: si es false imprime ""
  }
};

console.log("------Venga por su elote--------");
console.log("Tenemos elote tipo: " + elote.tipo); //Para llamar un elemento se escribe el nombre del objeto. punto nombre del atributo
console.log("Servido en: " + elote["servido"]);
console.log("Costo del producto $" + elote.costo);
console.log("\n-----Actualizacion del costo------");
elote.costo = 35;
elote["costo"] = 15;
console.log("costo de producto $" + elote.costo);
console.log("\n ----solicitud del cliente------")
console.log("Me sirve un " + elote.marcaMoriras());
//para llamar una funcion se poner nombre de la funcion con los parentesis para llamarla en ese momento.
console.log("me sirve un " + elote.dorilocos(false));
console.log("me sirve un " + elote.dorilocos(true));
console.log("\n-----agregando nuevo atributo-----")
console.log("antes del cambio" + Object.keys(elote));
elote.pica = true;
delete elote.tipo;
console.log("Nuevo atributo" + Object.keys(elote));