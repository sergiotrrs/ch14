function obtenerDatos(){
  fetch('https://reqres.in/api/users?delay=3')
    //.then(response => response.json()) 
    // como es solo una instrucción no es necesario poner corchetes ni return
    .then(responseJSON => { return responseJSON.json()}) 
    .then(usuarios => {
      // console.log(usuarios.data[0])
      let num = 1; 
      for (user of usuarios.data ){ // user va a obtener cada objeto del arreglo usuarios.data 
       
         console.log(user);
          localStorage.setItem("Usuario "+num,JSON.stringify(user));
          //console.log(JSON.parse(user))
          num++;
            } 
            let tiempoInicial = Date.now();
            localStorage.setItem("TiempoInicial",tiempoInicial);
           
  });
  
  
  leerDatos();
  }
  
  function leerDatos(){
      let tiempoInicial = localStorage.getItem("TiempoInicial");
      let evaluarTiempo = borrarDatos(tiempoInicial);
      console.log(evaluarTiempo);
  //Evalua tiempo de expiración si ha pasado determinado tiempo se eliminan, si no los datos siguen en localstorage
      if (evaluarTiempo == 1){
          // alert("Por seguridad se han eliminado los datos. Obtenga los datos nuevamente.")
          console.log(`Por seguridad se han eliminado los datos`);
          
      }else{   
          let datosUsuarios=[];
          for(let i=1; i<=6; i++){
          datosUsuarios[i-1] = JSON.parse(localStorage.getItem("Usuario "+i));
          }
          console.log("Datos aún en memoria local");
          console.log(datosUsuarios);
          mostrarDatos(datosUsuarios);
          return  datosUsuarios
      }
      
  }
  
  function borrarDatos(tiempoInicial){
  
      let minutos = .5;
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


  function mostrarDatos(datosGenerales){
  console.log("Se activa mostrar datos");
      // let datosGenerales = leerDatos();

//Usuario 1
  let imprimir1 = ''

  imprimir1 += `<tr class="p-1">
  <td><img class="rounded-circle" src ='${datosGenerales[0].avatar}'</td><br>
  <td> <b>ID:</b> ${datosGenerales[0].id} </td><br>
  <td> <b>Nombre:</b> ${datosGenerales[0].first_name}</td><br>
  <td> <b>Apellido:</b> ${datosGenerales[0].last_name}</td><br>
  <td> <b>e-mail:</b> ${datosGenerales[0].email}</td><br>
  </tr>`
  
  document.getElementById('user1').innerHTML = imprimir1
  
  //Usuario 2
  let imprimir2 = ''

  imprimir2 += `<tr>
  <td><img class="rounded-circle" src ='${datosGenerales[1].avatar}'</td><br>
  <td><b>ID:</b> ${datosGenerales[1].id} </td><br>
  <td><b>Nombre:</b> ${datosGenerales[1].first_name}</td><br>
  <td><b>Apellido:</b>${datosGenerales[1].last_name}</td><br>
  <td><b>e-mail:</b>${datosGenerales[1].email}</td><br>
  </tr>`
  
  document.getElementById('user2').innerHTML = imprimir2
  
  //Usuario 3
  let imprimir3 = ''

  imprimir3 += `<tr>
  <td><img class="rounded-circle" src ='${datosGenerales[2].avatar}'</td><br>
  <td><b>ID:</b> ${datosGenerales[2].id} </td><br>
  <td><b>Nombre:</b> ${datosGenerales[2].first_name}</td><br>
  <td><b>Apellido:</b>${datosGenerales[2].last_name}</td><br>
  <td><b>e-mail:</b>${datosGenerales[2].email}</td><br>
  
  </tr>`
  
  document.getElementById('user3').innerHTML = imprimir3

  //Usuario 4
  let imprimir4 = ''

  imprimir4 += `<tr>
  <td><img class="rounded-circle" src ='${datosGenerales[3].avatar}'</td><br>
  <td><b>ID:</b> ${datosGenerales[3].id} </td><br>
  <td><b>Nombre:</b> ${datosGenerales[3].first_name}</td><br>
  <td><b>Apellido:</b>${datosGenerales[3].last_name}</td><br>
  <td><b>e-mail:</b>${datosGenerales[3].email}</td><br>
  
  </tr>`
  
  document.getElementById('user4').innerHTML = imprimir4

  //Usuario 5
  let imprimir5 = ''

  imprimir5 += `<tr>
  <td><img class="rounded-circle" src ='${datosGenerales[4].avatar}'</td><br>
  <td><b>ID:</b> ${datosGenerales[4].id} </td><br>
  <td><b>Nombre:</b> ${datosGenerales[4].first_name}</td><br>
  <td><b>Apellido:</b>${datosGenerales[4].last_name}</td><br>
  <td><b>e-mail:</b>${datosGenerales[4].email}</td><br>
  
  </tr>`
  
  document.getElementById('user5').innerHTML = imprimir5

  //Usuario 6
  let imprimir6 = ''

  imprimir6 += `<tr>
  <td><img class="rounded-circle" src ='${datosGenerales[5].avatar}'</td><br>
  <td><b>ID:</b> ${datosGenerales[5].id} </td><br>
  <td><b>Nombre:</b> ${datosGenerales[5].first_name}</td><br>
  <td><b>Apellido:</b>${datosGenerales[5].last_name}</td><br>
  <td><b>e-mail:</b>${datosGenerales[5].email}</td><br>
  
  </tr>`
  
  document.getElementById('user6').innerHTML = imprimir6
  
}
