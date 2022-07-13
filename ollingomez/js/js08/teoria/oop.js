console.log("Sesión JS08");

//la calve es tipo o servido etc. y el valor es "criollo" "vasito" 25 etc
const elote ={
    //atributos
    tipo:"criollo", 
    servido:"vasito",
    color:"amrillo", 
    size:"chico", 
    costo:25, 
    preparado:true,
    //metododos
    marcaMoriras:function(){
        return `elote ${this.tipo} con molleja en ${this.servido}`
    },
    dorilocos: function(conCuerito){
        //This invoca los parametros de cada uno de nuestros objetos
        return `Elote ${this.tipo} con doritos en bolsa ${conCuerito? "y cueritos":""}`
    },
    
};

//se puede acceder de las dos formas al objeto ejemplo elote[costo], elote.costo
console.log("--------Venga por su elote------------");
console.log("Tenemos elote tipo: "+ elote.color);
console.log("Servido en: "+ elote["servido"]);
console.log("Costo del producto $ "+elote.costo);
console.log("\n-------Actualización del costo---------");
elote.costo=35;
elote['costo']=15;
console.log("Costo del producto $"+elote.costo);
console.log("\n-------Solicitud del cliente---------");
//Los parentesis sirben para llamar a la funsion sin parentesis es un callback de la funcion
console.log("Por favor, me sirve un "+ elote.marcaMoriras());
console.log("Por favor, me sirve un "+ elote.dorilocos(false));
console.log("Por favor, me sirve un "+ elote.dorilocos(true));
console.log("Antes del cambio "+Object.values(elote));
// elote.pica=true; //Ponemos un nuevo atributo
// console.log("Nuevo atributo "+ Object.values(elote));//a qui observamos el ultimo contenido de la clase
// //Nos da todos los atributos
// console.log("Antes del cambio "+Object.values(elote));//aqui observamos el ultumo contenido de la clase con el qnuevo atributo agregado
elote.pica=true; //Ponemos un nuevo atributo
console.log("Nuevo atributo "+ Object.keys(elote));
// //Nos da todos los atributos
console.log("Antes del cambio "+Object.keys(elote));
//elimino el atributo tipo
delete elote.tipo
console.log("Despues de borar atributo "+Object.keys(elote));