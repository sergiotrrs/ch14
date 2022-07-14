console.log("Practica datos de usuario Api Fetch");
// https://reqres.in/api/users?page=2
// 

function obtenerDatos(){
    fetch('https://reqres.in/api/users?delay=3')
      //.then(response => response.json()) 
      // como es solo una instrucción no es necesario poner corchetes ni return
      .then(responseJSON => { return responseJSON.json()}) 
      .then(usuarios => {
        // console.log(usuarios.data[0])
        let num = 1; 
        for (user of usuarios.data){ // user va a obtener cada objeto del arreglo usuarios.data 
           // console.log(`Id ${user.id} tiene email ${user.email}`);    
         
          // console.log(user);
            localStorage.setItem("Usuario "+num,JSON.stringify(user));
            num++;
              } 
              let tiempoInicial = Date.now();
              localStorage.setItem("TiempoInicial",tiempoInicial);
             
    });
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
            //JSON.parse retorna un objeto
            datosUsuarios[i-1]  = JSON.parse(localStorage.getItem("Usuario "+i)); //Usuario 1 2 3 ...
            }
            console.log("Datos aún en memoria local");
            console.log(datosUsuarios);
            return datosUsuarios;
        }
    }

    let datosGenerales = leerDatos();
    // console.log(datosGenerales[0].email)
    document.getElementById("id0").innerHTML = datosGenerales[0].id;
    document.getElementById("name0").innerHTML = datosGenerales[0].first_name;
    document.getElementById("lastName0").innerHTML = datosGenerales[0].last_name;
    document.getElementById("email0").innerHTML = datosGenerales[0].email;
    document.getElementById("imagen0").src = datosGenerales[0].avatar;

    document.getElementById("id1").innerHTML = datosGenerales[1].id;
    document.getElementById("name1").innerHTML = datosGenerales[1].first_name;
    document.getElementById("lastName1").innerHTML = datosGenerales[1].last_name;
    document.getElementById("email1").innerHTML = datosGenerales[1].email;
    document.getElementById("imagen1").src = datosGenerales[1].avatar;

    document.getElementById("id2").innerHTML = datosGenerales[2].id;
    document.getElementById("name2").innerHTML = datosGenerales[2].first_name;
    document.getElementById("lastName2").innerHTML = datosGenerales[2].last_name;
    document.getElementById("email2").innerHTML = datosGenerales[2].email;
    document.getElementById("imagen2").src = datosGenerales[2].avatar;

    document.getElementById("id3").innerHTML = datosGenerales[3].id;
    document.getElementById("name3").innerHTML = datosGenerales[3].first_name;
    document.getElementById("lastName3").innerHTML = datosGenerales[3].last_name;
    document.getElementById("email3").innerHTML = datosGenerales[3].email;
    document.getElementById("imagen3").src = datosGenerales[3].avatar;

    document.getElementById("id4").innerHTML = datosGenerales[4].id;
    document.getElementById("name4").innerHTML = datosGenerales[4].first_name;
    document.getElementById("lastName4").innerHTML = datosGenerales[4].last_name;
    document.getElementById("email4").innerHTML = datosGenerales[4].email;
    document.getElementById("imagen4").src = datosGenerales[4].avatar;

    document.getElementById("id5").innerHTML = datosGenerales[5].id;
    document.getElementById("name5").innerHTML = datosGenerales[5].first_name;
    document.getElementById("lastName5").innerHTML = datosGenerales[5].last_name;
    document.getElementById("email5").innerHTML = datosGenerales[5].email;
    document.getElementById("imagen5").src = datosGenerales[5].avatar;

    
    
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

    
    // leerDatos();
    
    
    // borrarDatos(tiempoInicial);