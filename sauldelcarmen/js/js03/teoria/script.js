console.log('Teoria de la sesion JS03');


//Declaracion de bloque***********
let nombre = 'Sebastian';
{

	//Este codigo esta en un bloque
    let nombre = 'Valeria';
    var apellido = 'Mojica';
    console.log("Nombre: " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condiconal if***********

let edad = 20;
console.log('Instruccion antes de if');

if (false){
	console.log('if se ejecuta si la condicion verdadera');
}
console.log('Instruccion despues de if');

//Condiconal switch*******************

let opcionElegida = 1;

switch (opcionElegida) {//evaluacion de la condicion de forma extricta
    	case 0:
	    console.log('Accedio a ventas');
	    break;
	case 1:
	    console.log('Accedio a credito');
	    break;
	case 2:
	    console.log('Accedio a cobranza');
	    break;
        case 9:
	    console.log('Se transfiere con un humano');
	    break;
	default:
	    console.log('Opcion invalida');
	    break;
}
console.log("Instruccion despues de case");
