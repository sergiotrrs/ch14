// Se cargan las posibilidades de número
let opciones=[0,1,2,3,4,5,6,7,8,9]
let primos=[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,71,73,79,83,89,97]
let inicio=0
let final=0
let medio
let resuelto=false
for (let i=0; i<=99; i++)
  {
    opciones[i]=(i+1)
  }
console.log(opciones)

if (confirm("¿El número es par?")){
  //Borra los impares
  for (let i=0; i<=opciones.length-1; i++){
    if (opciones[i]%2==1){
      opciones.splice(i,1)  
      i-- //El vector se acorta!
    }
  }
  final=opciones.length-1

  //Busqueda binaria
busquedaBinaria(opciones)
 
}else{
  //Borra los pares
  for (let i=0; i<=opciones.length-1; i++){
    if (opciones[i]%2==0){
      opciones.splice(i,1)
      i--
    }
  }
  
  console.log(`Estos son los números primos: 
${primos}`)
  if (confirm("¿El número es un primo?")){
    opciones=primos.slice()
    console.log(opciones)
  }else{
    //Borra los primos
    for (let i=0; i<=primos.length-1;i++){
    if ((opciones.indexOf(primos[i]))!=-1){
        opciones.splice(opciones.indexOf(primos[i]),1);
    }
  }
}
  //Busqueda binaria
busquedaBinaria(opciones)
}

function busquedaBinaria(arreglo){
  let resuelto=false
  let medio=0
    //Busqueda binaria
    while (!resuelto){
      medio=Math.floor((arreglo.length/2))
  
      if (arreglo.length<=3){
        break;
      }
      if (confirm(`¿Tu número es menor o igual que el ${arreglo[medio]}`)){
        for (let i=0; i<=opciones.length-1; i++){
          if (opciones[i]>opciones[medio]){
            opciones.splice(i,1)
            i--
          }
        }
      }else{
        //Si son mayores, elimina los menores
        for (let i=0; i<=arreglo.length-1; i++){
           if (arreglo[i]<=arreglo[medio]){
             arreglo.splice(i,1)
             i--
            }
         }
      }
      console.log(arreglo)
    }
  
    //Tres oportunidades para adivinar
    for (let j=0;j<=arreglo.length;j++){
      if (confirm(`¿Tu número es el ${arreglo[j]}?`)){
        console.log("Adiviné tu número")
        break;
      } 
    }
}
