alert("Piensa un número entre el 1 y el 100"); 
li=2;
ls=99;

//Función cuantos numeros son
/*s=ls i=li*/
function calNum(s,i) {
    return s-i+1;
}

//Función calculo r
/*i=li n=num*/
function calR(i,n) {
    return i+parseInt(n/2);
}

num= calNum(ls,li); 
r=calR(li,num);

console.log(num);
console.log(r);

//Pregunta
preg=prompt("¿Tu número es mayor, menor o igual a " + r +"?");
  
    for (preg; preg=='mayor'||preg=='menor'; preg=prompt("¿Tu número es mayor, menor o igual a " + r +"?")){
        if (preg=='menor'){
            //Cálculo de ímites    
            li=li;  
            ls=r-1;
            console.log("valor de li= "+li+" valor de ls= "+ ls); //pa checar que onda 

        }

        else {
            //Cálculo de ímites    
            li=r+1;  
            ls=ls;
            console.log("valor de li= "+li+" valor de ls= "+ ls); //pa checar que onda 
        }

        //Cuántos números son
            num= calNum(ls,li);
       
        if (num==1){
            console.log("Tu número es igual a: "+ li);
            alert ("Tu número es igual a: "+ li);
            break;
        }
        
        //Cálculo de r
            r=calR(li,num);
        
    }

alert("Tu número es igual a: " + r); 