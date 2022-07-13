console.log("SESION JS07 apiFetch");

//el mètodo por default que hace fetch es get

fetch('https://reqres.in/api/users?page=2')
  //.then(response => response.json())
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios=>{
    console.log(usuarios.data);
    //este es un for of
    // for (user of usuarios.data) {
    //     console.log(`id: ${user.id} tiene email: ${user.email}` );
    // }
  });


  //user hace referencia a cada index, es una variable
  //que nosotros pusimos 

  //.then(data => console.log(data));

  //el segundo then agarra el valor del json
  //porque es lo inmediato