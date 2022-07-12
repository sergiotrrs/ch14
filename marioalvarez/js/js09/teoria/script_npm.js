console.log("Sesion JS09");

// GET request for remote image in node.js
axios({
    method: 'get',
    url: 'https://reqres.in/api/users?page=2',
    responseType: 'stream'
  })
    .then((response)=> {
        console.log(response.data.data);
    });
  


