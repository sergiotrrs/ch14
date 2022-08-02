console.log(`JS07 API Fetch`);
//Para almacenar se usa con JSON
//Para trabajar se usa como objeto
//El método por default que realiza fetch es GET
fetch('https://reqres.in/api/users?page=2')
   //Se coloca {} y return cuando es mas de una intruccion
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios => {
    //console.log(usuarios.data[0]);
    for (const user of usuarios.data) {
        console.log(`El id: ${user.id}, tiene el email: ${user.email}`);
    }
  });
  //.then(responseJSON => {console.log(responseJSON)})
  
/*
fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))
*/
  
 //Para el lunes 11 a las 10 de la noche
//Leer los usuarios de forma inmediata
//Imagen de los usuarios de manera redonda
//Guardar localmente el JSON para ver la primera pagina nuevamente (tiempo de vida o expiracion)
//Se puede hacer en una tabla
