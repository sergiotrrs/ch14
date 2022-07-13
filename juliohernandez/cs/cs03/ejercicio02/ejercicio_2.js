//Algoritmo que solicita 3 números (entre el 1 y el 100)  y define cuál es el menor
function ordenaAscendente(numeros){    //PROGRAMA QUE ORDENA ASCENDENTEMENTE
    let mayor
    let ordenados=[]
    
    //Ordena el vector
    for (let i=0;i<=numeros.length+2; i++){
      let j=0
      mayor = numeros[0]
      //Agarra el mayor
      for (;j<=3;j++){
        if (mayor<numeros[j]){
          mayor=numeros[j]
        }
      }
      //Agrega al otro vector
      j=numeros.indexOf(mayor)
      ordenados.unshift(numeros.splice(j,1)[0])
    
      
    }
    return ordenados
}
  
function solicitud(){  //Carga vector
    const vector=[]
    for (let i=0;i<=2;){
        vector[i]=Number(prompt( `Teclee el ${(i+1)}° número:`))
        if ((vector[i]>=1&&vector[i]<=100)){
            i++
        }else{
            console.log("¡Escribe un número entre 1 y 100,inclusive ambos!")
        }
    }
    return vector
}
  //Finalmente...
  let uno=solicitud()
  let dos=ordenaAscendente(uno)
  console.log("el número menor es: ", dos[0])