/**Función para obtener los datos de la página de la api con delay */
function obtenerDatos(){
    setInvisible(false);
fetch('https://reqres.in/api/users?delay=3')
  //.then(response => response.json()) 
  // como es solo una instrucción no es necesario poner corchetes ni return
  .then(responseJSON => { return responseJSON.json()}) 
  .then(usuarios => {
    // console.log(usuarios.data[0])
    let num = 1; 
    for (user of usuarios.data ){ // user va a obtener cada objeto del arreglo usuarios.data 
        localStorage.setItem("Usuario "+num,JSON.stringify(user));
        //num sirve para nombrar las claves de los objetos al guardarlos 
        num++;
          } 
          //obtenemos los milisegundos iniciales
          let tiempoInicial = Date.now();
        
          localStorage.setItem("TiempoInicial",tiempoInicial);
          //Se manda llamar la función leer datos
        leerDatos(1);   
        
});

}

/**LeerDatos obtiene los datos del almacenamiento local y los guarda en string de objetos */
function leerDatos(inicio){
    //inicio de evaluación del tiempo
    let tiempoInicial = localStorage.getItem("TiempoInicial");
    //funcion que nos va a dar el valor del tiempo válido 
    let evaluarTiempo = borrarDatos(tiempoInicial);
    console.log(evaluarTiempo);
    if(inicio == 1){
        evaluarTiempo = 0;
    }
    
    if (evaluarTiempo == 1){ // Si no está dentro del tiempo establecido se imprime:
        console.log(`Por seguridad se han eliminado los datos guardados después del tiempo transcurrido.`);
    }else{   //si está dentro del tiempo establcido (1 min) se guardan los datos
        let datosUsers=[];
    for(let i=1; i<=6; i++){
        datosUsers[i-1] = JSON.parse(localStorage.getItem("Usuario "+i));
        }
        console.log("Datos aún en memoria local");
        console.log(datosUsers);
        llenarDatos(datosUsers);

    }   
}
 
//Esta función hace los cálculos necesarios para realizar la validación del tiempo 
//y si el tiempo valido ha expirado elimina los datos del almacenamiento local 
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

//Esta función accede a la apiDom y llena la información de los usuarios para que se pueda ver
function llenarDatos(datosUsuarios){

    setInvisible(true);
    for(let i = 0; i < 6 ; i++){
        document.getElementById(`perfil ${i+1}`).src = datosUsuarios[i].avatar;
        document.getElementById(`nombre ${i+1}`).innerHTML = datosUsuarios[i].first_name;
        document.getElementById(`apellido ${i+1}`).innerHTML =datosUsuarios[i].last_name;
        document.getElementById(`email ${i+1}`).innerHTML =datosUsuarios[i].email;
        document.getElementById(`id ${i+1}`).innerHTML =datosUsuarios[i].id;

    }
 }

 //Esta función es para mostrar u ocultar la animación de carga
 function setInvisible(estado){

    const carga = document.getElementById("load");
    
    let status = 'inline';
    if(estado) status = 'none';
    carga.style.display = status;//oculta o muestra el elemento con el id= limpiar
    }

    //Esta función limpia la información en pantalla
    
    function limpiarDatos(){
        for(let i = 0; i < 6 ; i++){
            document.getElementById(`perfil ${i+1}`).src = "";
            document.getElementById(`nombre ${i+1}`).innerHTML = "";
            document.getElementById(`apellido ${i+1}`).innerHTML ="";
            document.getElementById(`email ${i+1}`).innerHTML ="";
            document.getElementById(`id ${i+1}`).innerHTML ="";
    
        }
    }