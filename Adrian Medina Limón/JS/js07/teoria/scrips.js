/*function recuperarDatos(){
    const formulario = document.getElementById('formulario');
   // formulario.elements['nombre'].value = localStorage.getItem("nombre");
   // formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = JSON.parse( localStorage.getItem("datos") );
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido ;
}
    //localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
     {
        nombre: formulario.elements['nombre'].value,
        apellido:formulario.elements['apellido'].value
     })
    );*/


    calculos();
    function calculos(){
        const resta = (a, b ) => a-b;
        console.log("el resultado de la resta es:" + resta(4,3));
            
    }
    const suma = (a,b) =>
        const operacionSuma = new Promise ((resolve, reject) =>{
            if(a>+ &&b>0)*/

   /**
   * Se determinará si el número ingresado es par
   * Si es par se retornará true
   * Si no es par, se retorna un mensaje del error.
   */
  const esPar = (numero) => {
    //return (numero%2==0 ? true : false);
    return new Promise((resolve, reject) => {
      if ( numero%2 == 0 ) resolve(true);
      else reject ("El número no es par");
    });    
  }
suma(5, 6)
  .then( resultado => {
      console.log("Promesa Suma:" + resultado);
      //console.log("Es par?: "+ esPar(resultado));
      return esPar(resultado);
    })
  .then( resultadoEsPar =>{   //Este .the, consume la promesa de esPar(resultado);
      console.log("Promesa es par? " + resultadoEsPar);
  }  )
  .catch( error => console.log("Rechazado por: " + error));
