/*
3. Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
   -Determinar si el número de las unidades está entre el 0 y el 9 de uno en uno, ir al siguiente paso cuando se haya encontrado.
   -Determinar si el número de las decenas está entre el 0 y el 9 de uno en uno, ir al siguiente paso cuando se haya encontrado.
   -Determinar si el número de las centenas está entre el 0 y el 1 de uno en uno, ir al siguiente paso cuando se haya encontrado.
   -Formar el número uniendo en número de las centenas, el de las decenas y el de las unidades.
   -Dar el resultado.
*/

let unidadBool = false;
let unidad;
let decenaBool = false;
let decena;
let centenaBool = false;
let centena;

for(let i=0; centenaBool!=true; i++){
   centenaBool = confirm ("¿La centena de tu número es " + i + "?");
   centena = i;
   if(i==1){
      i=-1;
   }
}

for(let i=0; decenaBool!=true; i++){
   decenaBool = confirm ("¿La decena de tu número es " + i + "?");
   decena = i;
   if(i==9){
      i=-1;
   }
}

for(let i=0; unidadBool!=true; i++){
   unidadBool = confirm ("¿La unidad de tu número es " + i + "?");
   unidad = i;
   if(i==9){
      i=-1;
   }   
}

console.log("Tu número es "+centena+decena+unidad);
alert("Tu número es "+centena+decena+unidad);
