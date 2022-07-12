function suma (a,b){
   // let suma = parseInt
    return Number (a)+ Number (b);
}

multiplica =(a,b)=> a*b;
// indica la exportacion 


function palabras(palabra){


    let arregloUno = ['Math', 'español', 'Programming'];
//let student1Courses = ['Math', 'English', 'Programming'];
let arregloDos = ['españoll', 'oro', 'Programming', 'español', 'Math'];
let max=0
if( arregloUno.length > arregloDos.length ){
    max = arregloUno.length;
}
else {
    max = arregloDos.length;
}

for (let i=0; i<max; i++){
    for(let j=0; j<max; j++){
        if(arregloUno [i] == arregloDos [j]){
        console.log(arregloUno [i]);
        }        
    }    
}
   
}




module.exports ={suma, multiplica}


