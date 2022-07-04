
function suma(num1, num2) {

let a= document.getElementById('num1').value;
let b= document.getElementById('num2').value;

let resultado = parseInt(a) + parseInt(b);
document.getElementById("demo").innerHTML = resultado ;

 }
 
 function resta(num1, num2) {

    let a= document.getElementById('num1').value;
    let b= document.getElementById('num2').value;
    let n1= parseInt(a);
    let n2= parseInt(b);
    const resultadoresta =  (n1,n2) => n1-n2 ;
    
    document.getElementById("demo").innerHTML = resultadoresta(n1,n2) ;
    
     }

     function multi(num1, num2) {

        let a= document.getElementById('num1').value;
        let b= document.getElementById('num2').value;
        
        let resultado = parseInt(a) * parseInt(b);
        document.getElementById("demo").innerHTML = resultado ;
        
         }

         function div(num1, num2) {

            let a= document.getElementById('num1').value;
            let b= document.getElementById('num2').value;
            
            let resultado = parseInt(a) / parseInt(b);
            document.getElementById("demo").innerHTML = resultado ;
            
             }
             
         
     