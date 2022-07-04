function leerDatos() {
  let a = parseFloat(document.getElementById("valor1").value);
  let b = parseFloat(document.getElementById("valor2").value);
  return { a: a, b: b };
}

let sumar = ()=>{
  dato = leerDatos();
  document.getElementById("resultado").innerHTML = dato.a + dato.b;
}

let restar = ()=>{
  dato = leerDatos();
  document.getElementById("resultado").innerHTML = dato.a - dato.b;
}

let multiplicar = ()=>{
  dato = leerDatos();
  document.getElementById("resultado").innerHTML = dato.a * dato.b;
}

let dividir = ()=>{
  dato = leerDatos();
  document.getElementById("resultado").innerHTML = dato.a / dato.b;
}

let reset = ()=> {
  document.getElementById("valor1").innerHTML = "";
  document.getElementById("valor2").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
