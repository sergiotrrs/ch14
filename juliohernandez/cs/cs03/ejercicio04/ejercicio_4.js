//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
function multiplo3 (){
    let x=56
    for (let i=0; i<1;){
      x = Math.floor(Number(prompt("Dame un número entre 100 y 200")))
      if (x>100&&x<200){
        i++
        let y = x%3==0 ? `${x} SÍ es múltiplo del 3`: `${x} NO o es múltiplo del 3`
    console.log(y)
      }
    }
  }
  multiplo3()