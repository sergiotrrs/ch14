console.log("ApiFetch");

function obtenerDatos(){
  fetch('https://reqres.in/api/users?delay=3')
    //.then(response => response.json()) 
    // como es solo una instrucción no es necesario poner corchetes ni return
    .then(responseJSON => { return responseJSON.json()}) 
    .then(usuarios => {
      // console.log(usuarios.data[0])
      let num = 1; 
      for (user of usuarios.data ){ // user va a obtener cada objeto del arreglo usuarios.data 
         // console.log(`Id ${user.id} tiene email ${user.email}`);    
       
         console.log(user);
  
          localStorage.setItem("Usuario "+num,JSON.stringify(user));
          //console.log(JSON.parse(user))
          num++;
            } 
            let tiempoInicial = Date.now();
            localStorage.setItem("TiempoInicial",tiempoInicial);
           
  });
  //leerDatos();
  }
  
  function leerDatos(){
      let tiempoInicial = localStorage.getItem("TiempoInicial");
      let evaluarTiempo = borrarDatos(tiempoInicial);
      console.log(evaluarTiempo);
  
      if (evaluarTiempo == 1){
      
      }else{   
          let datosUsuarios=[];
      for(let i=1; i<=6; i++){
          datosUsuarios[i-1] = JSON.parse(localStorage.getItem("Usuario "+i));
          }
          console.log("Datos aún en memoria local");
          console.log(datosUsuarios);
          llenarDatos(datosUsuarios);
          return  datosUsuarios
      }
      
      function llenarDatos(datosUsuarios){

        document.getElementById(`perfil ${1}`).src = datosUsuarios[0].avatar;
        document.getElementById(`nombre ${1}`).innerHTML = datosUsuarios[0].first_name;
        document.getElementById(`apellido ${1}`).innerHTML =datosUsuarios[0].last_name;
        document.getElementById(`email ${1}`).innerHTML =datosUsuarios[0].email;
        document.getElementById(`id ${1}`).innerHTML =datosUsuarios[0].id; 
    
        for(let i = 0; i < 6 ; i++){
            document.getElementById(`perfil ${i+1}`).src = datosUsuarios[i].avatar;
            document.getElementById(`nombre ${i+1}`).innerHTML = datosUsuarios[i].first_name;
            document.getElementById(`apellido ${i+1}`).innerHTML =datosUsuarios[i].last_name;
            document.getElementById(`email ${i+1}`).innerHTML =datosUsuarios[i].email;
            document.getElementById(`id ${i+1}`).innerHTML =datosUsuarios[i].id;
    
        }
    
    }


     
  }
  
  let datosGenerales = leerDatos();



  function borrarDatos(tiempoInicial){

    let minutos = 1;
     let tiempoFinal = (minutos*60)*1000;
     let tiempoNow= Date.now();
     let difTiempo= tiempoNow-tiempoInicial;
     console.log("Diferencia de tiempo: "+difTiempo);
    if(difTiempo>tiempoFinal){
       // localStorage.clear();
        for(let i=1; i<=6; i++){
            localStorage.removeItem(("Usuario "+i));
    }
    return 1
    } else{
    return 0
    }
}
