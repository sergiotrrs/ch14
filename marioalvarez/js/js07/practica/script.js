console.log("Práctica JS07");

fetch('https://reqres.in/api/users?page=2')
  .then(responseIsJSON =>{return responseIsJSON.json()})
  .then(usuariosObject =>{ 
        //console.log(usuariosObject.data[0].id); //Imprime 7
        for(user of usuariosObject.data){
            console.log(`id ${user.id} tiene email: ${user.email}`);
        }   
    });