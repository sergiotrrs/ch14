console.log('Sesion tenebrosa de JS09 muajajaa');

//GET request for remote image in node.js
function adquirirDatos(direccionhttp) {
    axios({
		method: 'get',
		url: direccionhttp,
		responseType: 'stream'
    })
	.then((response) => {
	    console.log(response);
	    response.data.data;
    });

}

adquirirDatos("https://reqres.in/api/users?page=2");
//cosole.log(await adquirirDatos("https://reqres.in/api/users?page=2"));
