console.log("ejercicio05 cs03");

/* Elaborar un algoritmo para leer 3 numeros y determinar 
    si­ uno es la suma de los otros dos */

    let a = 10;
    let b = 25; 
    let c = 35; 
    
    if (a + b == c){
        console.log("c es suma de a y b: " + c );
    }
    
    else if (a + c == b ){
        console.log(" b es suma de a y c: " + b );
        
    }
    
    else if (c + b == a ){
        console.log(" a es suma de c y b: " + a );
        
    }
    
    else{
        console.log(" ninguno es suma del otro ");
    }
        