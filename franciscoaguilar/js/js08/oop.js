console.log("JS08 OOP");
const elote = { 
tipo:"criollo",
servido: "vasito",
color: "amarillo", 
size: "chico", 
costo: 25, 
preparado: true,
marcaMoriras: function(){
    return ` elote ${this.tipo} con molleja en ${this.servido}`  
},//this apunta a un elemento dentro del mismo ojeto

dorilocos: function(conCueritos){
    
    return `Elote ${this.tipo} con doritos en bolsa ${conCueritos ? "y cueritos" : " "}` 
}

};

console.log("---------Venga por su elote---------");
console.log("Tenemos elote tipo: " + elote.color);
console.log("Servido: " + elote["servido"]);
console.log("Costo del producto: $"+elote.costo);

console.log("\n---------Actualización del costo---------");
//Para modificar el valor de un atributo del objeto: 
elote.costo = 35;
elote['costo'] = 15;
console.log("Costo del producto: $"+elote.costo);

console.log("\n---------Solicitud del cliente---------");
console.log("Por favor, me sirve un" + elote.marcaMoriras()); //Los paréntesis en la funcion es para que la función se ejecute en este momentos
console.log("Por favor, me sirve un" + elote.dorilocos(false));
console.log("Por favor, me sirve un" + elote.dorilocos(true));
console.log("Antes del nuevo atributo " + Object.values(elote));
console.log("Antes del nuevo atributo (claves)" + Object.keys(elote));
console.log("\n---------Agregando nuevo atributo---------");
elote.pica = true;
console.log("Nuevo atributo " + Object.values(elote));
console.log("Nuevo atributo (claves) " + Object.keys(elote));
console.log("\n---------Eliminar un atributo---------");
delete elote.tipo
console.log("Nuevo atributo " + Object.values(elote));
console.log("Nuevo atributo (claves) " + Object.keys(elote));
