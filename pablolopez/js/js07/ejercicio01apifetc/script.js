
function boton(){
    
    fetch('https://reqres.in/api/users?delay=3')
    .then(responseJSON => {return responseJSON.json()})
    .then(usuarios => {
        let fila='';

        for(user of usuarios.data){
                

           localStorage.setItem("us",JSON.stringify({
                    usr: usuarios.data,
                    /*id: user.id,
                    nom: user.first_name,
                    ap: user.last_name,
                    em: user.email,
                    av: user.avatar,*/

        }));
        let con = JSON.parse(localStorage.getItem("us"));
        console.log(`Datos usuario:   ${con.usr}`);     
            
        }
    
        for(user of usuarios.data){
            let fil =  `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td><td><img id="img" src="${user.avatar}"></td><tr/>`;
            fila = fila + fil; 
        }
        document.getElementById("rw").innerHTML = fila;
    })
    
        
    
}





const myTimeout = setTimeout(clear, 30000);
function clear() {
    localStorage.removeItem("us");
}




//NSR--

/*fetch('https://reqres.in/api/users?delay=3')
.then(responseJSON => {return responseJSON.json()})
.then(usuarios => {
    let fila='';
    console.log(usuarios.user);
    for(user of usuarios.data){
        //console.log(user);
        
        let fil =  `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td><td><img id="img" src="${user.avatar}"></td><tr/>`;
        fila = fila + fil;
      
    }
    document.getElementById("rw").innerHTML = fila;
});*/

/*
//Se le indica una clave y un valor
    localStorage.setItem("Cohorte","Ch14");
    //localStorage.setItem("nombre",formulario.elements['nombre'].value);
    //localStorage.setItem("apellido",formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify( //Para guardar como objeto
        {
            nombre: formulario.elements['nombre'].value,
            apellido: formulario.elements['apellido'].value
            //Agregar expiracion: tiempo_en_milisegundos;//minutos de tiempo de expiración
        })
    );
*/   

/*
localStorage.setItem("us",JSON.stringify(
                {
                    id: user.id,
                    nom: user.first_name,
                    //usr: usuarios.data,
                    
                }

            )
            
            )
let con = JSON.parse(localStorage.getItem("us"));
console.log(`Datos usuario:  ${con['id']}  ${con.nom}`);
//console.log(`Datos usuario:  ${con['usr']}  `);            
*/            


/*let a="sal";
n=1;
document.getElementById(`f${n}`).innerHTML = `<tr><td>${a}</td><td>No</td><td>Aplido</td><td>Coreo</td><td>Aatr</td><tr/>`;*/

//COD
/*
fetch('https://reqres.in/api/users?delay=3')
.then(responseJSON => {return responseJSON.json()})
.then(usuarios => {
    let fila='';
    console.log(usuarios.user);
    for(user of usuarios.data){
        //console.log(user);
        
        let fil =  `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td><td><img id="img" src="${user.avatar}"></td><tr/>`;
        fila = fila + fil;
      
    }
    document.getElementById("rw").innerHTML = fila;
});

function boton(){
    
    fetch('https://reqres.in/api/users?delay=3')
    .then(responseJSON => {return responseJSON.json()})
    .then(usuarios => {
        for(user of usuarios.data){
                

           localStorage.setItem("us",JSON.stringify({
            //usr: usuarios.data,
                    id: user.id,
                    nom: user.first_name,
        }));
           
                
            let con = JSON.parse(localStorage.getItem("us"));
            console.log(`Datos usuario:  ${con.id}  ${con.nom}`);
        }
        
    })
    
    
}
*/