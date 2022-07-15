console.log("sesion tenebrosa JS09");

function adquirirDatos(direccionhttp){
    axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
    })
    .then((response) => {
        console.log(response.data.data);
    });
}

adquirirDatos("https://reqres.in/api/users?page=2");