console.log('Hola')

  //Start - Exercise.
  const STORAGE_KEY = 'my-localStorage-key';
  //response
  //then() retorna una Promesa. Recibe dos argumentos: funciones callback  para los casos de éxito y fallo de Promise.
  //lee hasta completarlo. Devuelve una promesa que resuelve como JSON.
  const fetchUsers = (url) => fetch(url)
        .then(response => response.json());
  
  //Set the data  got in the localStore.
  const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
    console.log('setLocalStorage');
  };
  
  //Set timer to remove the data
  const setRemoveDelayed = (key, delayInSeconds) => {
    setTimeout(() => {
       localStorage.removeItem(key);
       console.log('setRemoveDelayed');
    }, delayInSeconds * 1000);
  };
  
  const getUsers = async (url) => {
    try {
      console.time('getUsers');
      let data = localStorage.getItem(STORAGE_KEY);
      if(data) {
        return JSON.parse(data);
      }
     
      data = await fetchUsers(url);
      setLocalStorage(STORAGE_KEY, data);
      setRemoveDelayed(STORAGE_KEY, 60);
      return data;
    } catch(error) {
      return error;
    }
  };
  
  const createCardElement = (data) => {
    const element = document.createElement('div');
    element.classList = 'row p-2 item';
    element.innerHTML = `
      <div class="col-md-12">
          <div class="card flex-row w-100 shadow rounded border-0" style="height: 100px;" >
            <div class="card-body d-flex align-items-center">
               <ul class="list-group list-group-flush flex-row w-100 border-0 align-items-center">
                <li class="list-group-item col-md-2 border-0"> 
                  <img src="${ data.avatar }" class="img-fluid img-thumbnail rounded-circle" alt="..." style="height: 80px;" >
                </li>
                <li class="list-group-item col-md-1 border-0">${ data.id }</li>
                <li class="list-group-item col-md-3 border-0">${ data.first_name }</li>
                <li class="list-group-item col-md-3 border-0">${ data.last_name }</li>
                <li class="list-group-item col-md-3 border-0">${ data.email }</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    return element;
  };
  
  const createListUI = (users) => {
     const container = document.getElementById('users');
     document.getElementById('header').classList.remove('d-none');
     users.forEach( user => {
        const element = createCardElement(user);//objecto user -> map -> HTML element mostrando con la data del usuario
        container.append(element); //HTML element -> append -> lo agrega al DOM
     });
     
     return container;
  };
  
  const button = document.getElementById('getUsers');
  const eventHandler = () => {
    document.querySelectorAll('.item').forEach(el => el.remove());
    button.querySelectorAll('.loading').forEach(el => el.classList.remove('visually-hidden'));
    button.querySelectorAll('.lable').forEach(el => el.classList.add('visually-hidden'));
    button.setAttribute('disabled', true);
    getUsers('https://reqres.in/api/users?delay=3')
      .then(response => response.data)
      .then(response => {
        console.timeEnd('getUsers');  
        return response;
      })
      .then(createListUI)
      .then(() => {   
        button.querySelectorAll('.loading').forEach(el => el.classList.add('visually-hidden'));
        button.querySelectorAll('.lable').forEach(el => el.classList.remove('visually-hidden'));
        button.removeAttribute('disabled');
      });
  }
  
  button.addEventListener('click', eventHandler);