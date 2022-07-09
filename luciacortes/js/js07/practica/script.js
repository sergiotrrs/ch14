console.log ("Lista de perfiles ");

fetch('https://reqres.in/api/users?page=1')
  .then(responseJSON =>{ return responseJSON.json()} )
  .then(usuarios=> {
    for (user of usuarios.data){
        console.log(`id: ${user.id} 
                email: ${user.email}
                nombre: ${user.first_name}
                apellido: ${user.last_name}
                avatar: ${user}`)
    }
  });
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON =>{ return responseJSON.json()} )
  .then(usuarios=> {
    for (user of usuarios.data){
        console.log(`id: ${user.id} 
                email: ${user.email}
                nombre: ${user.first_name}
                apellido: ${user.last_name}
                avatar: ${user}`)
    }
  });
