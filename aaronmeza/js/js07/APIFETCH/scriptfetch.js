
fetch('https://reqres.in/api/users?page=2')
    .then(response => {return  response.json()})
    .then(data => console.log(data));