console.log("Sesión tenebrosa JS09 npm");

// GET request for remote image in node.js
function adquirirDatos(directionhttp) {
    axios({
        method: 'get',
        url: directionhttp,
        responseType: 'stream'
      })
        .then( (response) => {
            console.log(response.data.data);
            
        });
    
}
  adquirirDatos('https://reqres.in/api/users?page=2');
// console.log(await adquirirDatos('https://reqres.in/api/users?page=2'));






