/**
 *  Comandos para instalar bootstrap 
 * 
 * En consola ******
 * Entrar a la direccoión de la carpeta donde va estar nuestro trabajo ***
 * se entra con cd "carepta "
 * 
 * luego en consola 
 * npm init 
 * next , next , next 
 * 
 * En consola colocamos 
 * 
 * ntp install bostrap 
 * 
 * nos instala la ultima version estable de bootstrap 
 * 
 * 
 * 
 */

 console.log("Sesión tenebrosa de JS09 muajajajajaja")

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
    axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
      })
        .then((response)=> {
          console.log(response.data.data);
          
        });

}

adquirirDatos("https://reqres.in/api/users?page=2");
