console.log("hola");
const numerito=[2,2,3,3,15];
let multiplicacion=numerito[0]
suma=numerito[0];
//creando ciclo donde tome el valor del arreglo y //
//multiplicarlo por si mismo y mostrar el valor en producto//
// se le añadio la variable suma y se aplico lo mismo//
for(i=1; i<numerito.length; i++){
multiplicacion= numerito[i]*multiplicacion;
suma= numerito[i]+suma;

}

console.log("la multiplicacion del arreglo    "+numerito+"    ES:\n"+ multiplicacion);
console.log("la suma del arreglo    "+numerito+"    ES:\n"+ suma);