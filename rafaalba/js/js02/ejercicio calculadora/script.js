/* function leerDatos(){
    const a=parseInt(document.getElementById("A").value);
    const b=parseInt(document.getElementById("B").value);
    return {a: a, b:b};
}

function suma(){
    dato = leerDatos();
    document.getElementById("C").innerHTML = dato.a +dato.b;
} */

//FUNCIÓN SUMA *************************************************
    function operacionSum () {
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        //console.log(valor1, valor2);
        // llamo a la función suma y la guardo en una nueva variable
        let sum = suma(parseFloat(valor1),parseFloat(valor2));
        // mando al html
        document.getElementById("calcu").innerHTML=" "+ sum;
    }

    const suma = (a,b) => a+b ;
        //console.log(a+b);


//FUNCIÓN RESTA *************************************************
    function operacionRest () {
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        //console.log(valor1, valor2);
        // llamo a la función resta y la guardo en una nueva variable
        let res = resta(parseFloat(valor1),parseFloat(valor2));
        // mando al html
        document.getElementById("calcu").innerHTML=" "+ res;
    }

    const resta = (a,b) => a-b ;
        //console.log(a-b);

//FUNCIÓN MULTIPLICACIÓN *************************************************
    function operacionMult () {
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        //console.log(valor1, valor2);
        // llamo a la función multi y la guardo en una nueva variable
        let mul = multi(parseFloat(valor1),parseFloat(valor2));
        // mando al html
        document.getElementById("calcu").innerHTML=" "+ mul;
    }

    const multi = (a,b) => a*b ;
        //console.log(a*b);


//FUNCIÓN DIVISIÓN *************************************************
    function operacionDiv () {
        let valor1 = document.getElementById("valor1").value;
        let valor2 = document.getElementById("valor2").value;
        //console.log(valor1, valor2);
        // llamo a la función divi y la guardo en una nueva variable
        let div = divi(parseFloat(valor1),parseFloat(valor2));
        // mando al html
        document.getElementById("calcu").innerHTML=" "+ div;
    } 

    const divi = (a,b) => a/b ;
        //console.log(a/b);

        function borrar(){
            document.getElementById("valor1").value = "";
            document.getElementById("valor2").value = "";
        }
