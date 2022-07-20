console.log("Sesion JS08 OOP");

//const miObjeto = {atributos};    
const elote = { 
     tipo:"criollo" ,
     servido:"vasito",
     color:"amarillo", 
     size:"chico" , 
     costo:25 , 
     preparado:true,
     marcaMoriras: function(){
        return  `Elote ${this.tipo} con molleja en ${this.servido} ` //this hace referencia al objeto donde esta
     }, //La "," es porque es un objeto declarando una funcion y no es el ultimo elemento
     dorilocos: function(conCuerito){

        return`Elote ${this.tipo} con doritos en bolsa ${conCuerito? "y cueritos": ""} ` // con cuerito no se coloca this porque es la entrada de la funsion
     },                                                            //ademas se usa un poerador ternario "?" que arroja valores boolbeanos true or false


    }; 

//acceder a objetos 
console.log("----Venga por su elote----");
console.log("Tenemos elote tipo " + elote.color); //miObjeto.atributo 
console.log("Tenemos en " + elote["servido"]);  //o con miObjeto[calve del objeto]
console.log("Costo del producto $ " + elote.costo); 
console.log("\n ----Actualizacion del costo-----");
elote.costo =35; //ya no vale 25 sino 35
elote['costo']=15; //ya no vale 35 sino 15 , linea 19 y 20 hacen los mismo diferente forma
console.log("Costo del producto $ " + elote.costo); 
console.log("\n------solicitud del cliente-------------");
console.log("Me sirve un  " + elote.marcaMoriras()); // + elote.marcaMoriras() los parentesis es porque estas llamando a la funcion en esa linea
console.log("Me sirve un  " + elote.dorilocos(false)); // aqui es el caso false de la linea 16 por el operador ternario "?"
console.log("Me sirve un  " + elote.dorilocos(true)); //  aqui es el true de la linea 16 por el operador ternario "?"
console.log("\n------agregando nuevo atributo------------");
console.log("antes del cambio " + Object.keys(elote));
elote.pica = true; // agregando nuevo aatributo
delete elote.tipo; //elimina "tipo" de los atributos del objeto
console.log("Nuevo atributo " + Object.keys(elote));//Objet.keys , imprime los atributos , pero sin el valor "servido,color,size,costo,preparado , etc"




