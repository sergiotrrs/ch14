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
    console.log(datosGenerales[0].email);
    document.getElementById("email").innerHTML=datosGenerales[0].email;
    
    
    
    function borrarDatos(tiempoInicial){
        let minutos = 1; 
        let tiempoFinal = ((minutos*60)*1000)+tiempoInicial;
    
        //let borrar = tiempoFinal-tiempoInicial;
    
        if(tiempoInicial>tiempoFinal){
           // localStorage.clear();
            for(let i=1; i<=6; i++){
                localStorage.removeItem(("Usuario "+i));
        }
        return 1
        } else 
        return 0
    }