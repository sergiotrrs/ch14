console.log("Código");
//Se pide al usuario que piense un número
numero=window.prompt("Piensa en un número entre 0 y 100");
// Se transforma en un número
numero1=parseInt(numero);

//Variables auxiliares para obtener límites de búsqueda
n=0;
topeS=100/(2**n);
topeI=0;

//Se recorren los posibles límites
for(let i=0;i<100;i++){
        if(0<numero1 && numero1<100){ //Primero se valida si se dio un número en el rango adecuado
                if(numero1>topeI && numero1-topeI<0.09765625){ //En caso de que el número sea muy cercao al mímite inferior,
                        console.log("Tu número es: "+Math.ceil(topeI)); //se da ese dato redondeado
                        console.log("Se encontró en "+i+" pasos."); //y se informa en qué paso se encontró
                        break; //Se termina el algoritmo
                } else{ //Caso contrario
                        if(topeI<numero1 && numero1<topeS){ //Si el número está entre los límites iniciales
                                n+=1; //Se aumenta el n auxiliar
                                topeS=topeI+100/(2**n); //Disminuye el límite superior para acotar mejor el número
                                //console.log("n: "+n+", en el paso: "+i); //para verificar que funciona
                        }else{ //Caso contrario
                                topeI=topeS; //Ahora el límite inferior es el superior anterior
                                topeS=topeI+100/(2**n); //y el superior será el inferior más la mitad de los números entre los límites anteriores
                                //*console.log("n: "+n+", en el paso: "+i); //para verificar que funciona
                        }
                }
        }else{// si no está en el rango
                console.log("El número no está en el rango especificado");//manda una advertencia
                break;//termina el algoritmo
        }
}