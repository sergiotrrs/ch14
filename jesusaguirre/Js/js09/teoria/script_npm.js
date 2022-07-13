console.log("sesion tenebrosa de ch14 js 09");
// GET request for remote image in node.js
/* axios({
    method: 'get',
    url: 'https://reqres.in/api/users?page=2',
    responseType: 'stream'
  })
    .then((response)=>{
        response.data.data.forEach(element => {
            console.log(element)
            
        });
    //  console.log(response.data.data); 
    }); */
    function adquirirDatos(direcHttp){

        axios({
            method: 'get',
            url:direcHttp,
            responseType: 'stream'
        })
        .then((response)=>{
            response.data.data.forEach(element => {
                console.log(element.first_name)
                
            });
            //  console.log(response.data.data); 
        });
       // return response.data.data;
    }
    adquirirDatos('https://reqres.in/api/users?page=2');
// GET request for remote image in node.js
/* function adquirirDatos(direccionhttp){
    axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
      })
        .then((response)=> {
          console.log(response.data.data);
          
        });

}

adquirirDatos("https://reqres.in/api/users?page=2"); */
