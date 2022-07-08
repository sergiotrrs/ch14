// Esta función nos permite leer los datos de las 2 entradas
// Se manda a llamar para las funciones de cada botón
function leerDatos() {
    const v1= Number(document.getElementById("valor1").value);
    console.log(v1);
    const v2= Number(document.getElementById("valor2").value);
    console.log(v2);
    return {v1:v1, v2:v2}
}

// Función de los botones 
// Primero se llama a la función que lee datos
// Luego se manda el valor calculado al espacio de resultados 

let suma = () =>{
    valor=leerDatos();
    let sum=valor.v1+valor.v2;
    console.log("El valor de la suma es: "+ sum);
    document.getElementById("resul").value=sum;
}

let resta = () =>{
    valor=leerDatos();
    let res=valor.v1-valor.v2;
    console.log("El valor de la resta es: "+ res);
    document.getElementById("resul").value=res;
}

let division = () =>{
    valor=leerDatos();
    let div=valor.v1/valor.v2;
    console.log("El valor de la división es: "+ div);
    document.getElementById("resul").value=div;
}

let multiplica = () =>{
    valor=leerDatos();
    let mul=valor.v1*valor.v2;
    console.log("El valor de la multiplicación es: "+ mul);
    document.getElementById("resul").value=mul;
}


// Función que borra los datos en pantalla
let limpia = () =>{
    document.getElementById("valor1").value= " ";
    document.getElementById("valor2").value= " ";
    document.getElementById("resul").value= " ";
}


