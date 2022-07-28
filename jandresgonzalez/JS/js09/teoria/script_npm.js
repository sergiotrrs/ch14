console.log("Link");

function adquirirDatos(direc){
  axios({
  method: 'get',
  url: `${direc}`,
  responseType: 'stream'
})
  .then((response) => {
    console.log(response.data.data);
    return response.data.data;
  });
}

adquirirDatos("https://reqres.in/api/users?page=2");