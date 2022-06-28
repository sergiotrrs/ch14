console.log("codigo 02 de cs04")

//El método map()  crea un nuevo arreglo iterando a través de los elementos y aplicando la lógica que proveemos en la función como argumento. 

const arrayofnumbers=[1,2,4,5];
duplicar = (valor) => valor * 2;

arrayofnumbers.map(duplicar);

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
/*
const arrayofnumbers2=[1,2,4,5]

function duplicar (valor) {
   arrayofnumbers.forEach( valor => console.log(valor *2))
    
}

duplicar();
*/