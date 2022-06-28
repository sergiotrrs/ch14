/* Elaborar un algoritmo para leer 3 números y determinar 
    sí uno es la suma de los otros dos */

    let a = 8;
    let b = 4; 
    let c = 4; 
    
    if (a + b == c){
        console.log(" a y b es igual a ="+" "+c)    
    }
    
    if (a + c == b ){
        console.log(" a mas c es igaul a ="+" "+b)
        
    }
    
    if (c + b == a ){
        console.log(" c mas b es igaul a"+" "+a)
        
    }
    
    else{
        console.log(" ningunon es suma de los otros dos ")
    }
        
    