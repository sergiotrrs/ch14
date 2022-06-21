function Main(){
    // PROGRAMA QUE DESCUBRE TU NÚMERO del 1-100
    
    let opciones= []
    
    // Se cargan las posibilidades de número
    
    for (let i=0; i<=99; i++)
      {
        opciones[i]=(i+1)
      }
    console.log(opciones)
    
    // PRIMERA ELIMINACIÓN DE POSIBILIDADES
    if (confirm("¿Tu número es par?")){
      for (let i=0; i<=99; i++){
        //Se eliminan si su módulo 2 es 1 (números impares)
        if (opciones[i]%2==1){
          opciones.splice(i,1)  //El vector se acorta!
        }
      }
      console.log(opciones)
      //SEGUNDA ELIMINACIÓN
      if (confirm("¿La suma de los dígitos es un número par?")){ //Criterio
    
        let a=49 //Al inicio el vector tiene 49 elementos y el 100
        for(let j=0; j<=a;j++){
          resultado=doblado(opciones[j]) //Se calcula la suma
            if (resultado%2==1){
            opciones.splice(j,1) //Elimina y acorta el vector
              j-- //Como el longitud del vector se redujo, reducimos j
              a-- //Reducimos el criterio de parada, también.
            }
        }
        console.log(opciones)
    
        //TERCERA ELIMINACIÓN
        if (confirm("¿La suma de los dígitos es menor o igual que 6")){
          let b=23
          for (let j=0; j<=b; j++){
            resultado=doblado(opciones[j]) //Se calcula la suma
            if (resultado>6){
            opciones.splice(j,1) //Elimina y acorta el vector
              j-- //Como el longitud del vector se redujo, reducimos j
              b-- //Reducimos el criterio de parada, también.
            }
          }
          console.log(opciones)
    
          //CUARTO CRITERIO
          if (confirm("¿Tu  número es mayor o igual que el 22")){//El número es mayor o igual que el 22, inclusive
            preguntaCorrido(opciones.indexOf(22),opciones.length,opciones)
          }else{
            //El número es menor que el 22, no inclusive
            preguntaCorrido(0,opciones.indexOf(22),opciones)
          }
        } else{
          //La suma es mayor que el 6
          let b=23
          for (let j=0; j<=b; j++){
            resultado=doblado(opciones[j]) //Se calcula la suma
            if (resultado<=6){
            opciones.splice(j,1) //Elimina y acorta el vector
              j-- //Como el longitud del vector se redujo, reducimos j
              b-- //Reducimos el criterio de parada, también.
            }
          }
          console.log(opciones)
          if (confirm("¿Tu número es menor o igual que el 62?")){
            //El número es mayor o igual que el 62
            preguntaCorrido(0,opciones.indexOf(62)+1,opciones)
          }else{
            preguntaCorrido(opciones.indexOf(62)+1,opciones.length,opciones)
          }
        }
      }else{
        //Si la suma de sus dígitos no es un número par
        let a=49 //Al inicio el vector tiene 49 elementos y el 100
        for(let j=0; j<=a;j++){
          resultado=doblado(opciones[j]) //Se calcula la suma
            if (resultado%2!=1){
            opciones.splice(j,1) //Elimina y acorta el vector
              j-- //Como el longitud del vector se redujo, reducimos j
              a-- //Reducimos el criterio de parada, también.
            }
        }
        console.log(opciones)
        
        if (confirm("¿La suma de los dígitos es menor o igual que 9")){
          let b=23
          for (let j=0; j<=b; j++){
            resultado=doblado(opciones[j]) //Se calcula la suma
            if (resultado>9){
            opciones.splice(j,1) //Elimina y acorta el vector
              j-- //Como el longitud del vector se redujo, reducimos j
              b-- //Reducimos el criterio de parada, también.
            }
          }
          console.log(opciones)
    
          //CUARTO CRITERIO
          if (confirm("¿Tu  número es mayor o igual que el 50")){//El número es mayor o igual que el 22, inclusive
            preguntaCorrido(opciones.indexOf(50),opciones.length,opciones)
          }else{
            //El número es menor que el 22, no inclusive
            preguntaCorrido(0,opciones.indexOf(50),opciones)
          }
        } else{
          
          let b=23
          for (let j=0; j<=b; j++){
            resultado=doblado(opciones[j]) //Se calcula la suma
            if (!(resultado>9)){
            opciones.splice(j,1) //Elimina y acorta el vector
              j-- //Como el longitud del vector se redujo, reducimos j
              b-- //Reducimos el criterio de parada, también.
            }
          }
          console.log(opciones)
    
          //CUARTO CRITERIO
          if (confirm("¿Tu  número es mayor o igual que el 78")){//El número es mayor o igual que el 22, inclusive
            preguntaCorrido(opciones.indexOf(78),opciones.length,opciones)
          }else{
            //El número es menor que el 22, no inclusive
            preguntaCorrido(0,opciones.indexOf(78),opciones)
          }
        } 
        }
        //Hasta aquí todo vien
    }else{
      //Si el número es IMPAR
      for (let i=0; i<=99; i++){
        if (opciones[i]%2==0){
          opciones.splice(i,1)
        }
    }
      console.log(opciones)
      let primos=[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,71,73,79,83,89,97]
      console.log(`Estos son los números primos: 
    ${primos}`)
      if (confirm("¿Tu número es un primo?")){
        //Si sí es un primo
        
      }else{
        //si no es un primo
      }
    
      
    }
    }
      function doblado(a) {
        let suma
        let first
        let second
        let third
        //Se requiere determinar el número de dígitos
        switch (Number(a.toString().length)) {
          case 1:
            suma = a
            break;
          case 2:
            first = a.toString().charAt(0)
            second = a.toString().charAt(1)
            suma = Number(first) + Number(second)
            break;
          case 3:
            first = a.toString().charAt(0)
            second = a.toString().charAt(1)
            third = a.toString().charAt(2)
            suma = Number(first) + Number(second) + Number(third)
            break;
        }
    
        return suma;
      }
      function preguntaCorrido(inicio,final, arreglo) {
        //k es el índice desde donde empieza
        //arreglo es el vector de números
        for (k = inicio; k < final; k++) {
          if (confirm(`¿Tu número es ${arreglo[k]}`)) {
            console.log("¡Ja, adiviné tu número!")
            break;
          }
        }
      }
    Main()
    