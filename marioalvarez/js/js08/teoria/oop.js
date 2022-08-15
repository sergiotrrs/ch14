console.log("OOP");

//Crear objetos
//Se acostumbra poner al último atributo  una coma, por si agregamos uno nuevo
const elote={
    tipo:"criollo",
    servido:"vasito",
    color:"amarillo" ,
    size:"chico",
    costo:25,
    preparado:true,
    //Crear método
    marcaMoriras:function(){
        return ` Elote ${this.tipo} con molleja en ${this.servido}`;
    },

    dorilocos:function(conCuerito){
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito?"con cueritos":""}`
    }
};

//Acceder  a los atributos del objeto (2 formas)
console.log("----Venga por su elote-----");
console.log("Tenemos  elote tipo: "+ elote.tipo);
console.log("Servido en: "+elote["servido"]);
console.log("Costo del producto $:"+elote.costo);

console.log("----Actualización del costo-----");
elote.costo=35;
elote["costo"]=36;
console.log("Costo del producto $"+elote.costo);
console.log("\n-----Solicitud del cliente---------");
console.log("Por favor, me sirve un: "+elote.marcaMoriras());
console.log("Por favor, me sirve un: "+elote.dorilocos(false));

//Object.value imprime  todo el objeto
console.log("Antes de agregar nuevo atributo: "+Object.values(elote));
//Como JS es devilmente tipado, puedo agregar atributos  sin haberlos declarado antes
elote.pica=true;
console.log("Nuevo atributo: "+Object.values(elote));

//Muestra todas las claves de los valores
console.log("Objec keys: "+Object.keys(elote));

//eliminar un atributo
delete elote.tipo;
console.log("Atributo eliminado: "+Object.values(elote));
