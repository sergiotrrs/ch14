console.log("Se ejecuta el programa con exito");

function boton() {
//El metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?delay=3')
  .then(response => (response.json()))
  .then(usuarios =>  {

    let num = 1; 
        for (user of usuarios.data ){ // user va a obtener cada objeto del arreglo usuarios.data 
           // console.log(`Id ${user.id} tiene email ${user.email}`);    
         
          // console.log(user);
            localStorage.setItem("Usuario "+num,JSON.stringify(user));
            num++;
              } 
              let tiempoInicial = Date.now();
              localStorage.setItem("TiempoInicial",tiempoInicial);




    //console.log(usuarios.data[0])
  //   let imprimir = ''
  //   console.log(usuarios.length);
  //  for (user of usuarios.data){
  //      console.log(`id tiene: ${user.id} 
  //      tiene email: ${user.email} 
  //      nombre tiene: ${user.first_name}`)
  //   imprimir += `<tr>
  //   <td> ${user.id} </td>
  //   <td id="nombre">${user.first_name}</td>
  //   <td id="apellido">${user.last_name}</td>
  //   <td>${user.email}</td>
  //   <td><img class="rounded-circle" src ='${user.avatar}'</td>
  //   </tr>`
    
  //   document.getElementById('data').innerHTML = imprimir
  //   }
    
    

})
.catch(error => console.log(error));

}

function leerDatos(){
  let tiempoInicial = localStorage.getItem("TiempoInicial");
  let evaluarTiempo = borrarDatos(tiempoInicial);
  console.log(evaluarTiempo);

  if (evaluarTiempo == 1){
      console.log(`Por seguridad se han eliminado los datos guardados después de ${minutos} minutos transcurridos.`);
  }else{   
      let datosUsuarios=[];
  for(let i=1; i<=6; i++){
      datosUsuarios[i-1] = JSON.parse(localStorage.getItem("Usuario "+i));
      }
      console.log("Datos aún en memoria local");
      console.log(datosUsuarios);
      return  datosUsuarios
  }
  
//     let info = datosUsuarios;
//    console.log(info);
  
}

let datosGenerales = leerDatos();
console.log(datosGenerales[0].avatar);
//
document.getElementById("email").innerHTML=datosGenerales[0].avatar;
document.getElementById("imagen1").src = datosGenerales[0].avatar;

// let imagen = document.getElementById("imagen");
// imagen.src = 

function borrarDatos(tiempoInicial){
  let minutos = 1; 
  let tiempoFinal = ((minutos*60)*1000)+tiempoInicial;

  //let borrar = tiempoFinal-tiempoInicial;

  if(tiempoInicial<tiempoFinal){
     // localStorage.clear();
      for(let i=1; i<=6; i++){
          localStorage.removeItem(("Usuario "+i));
  }
  return 1
  } else 
  return 0
}


