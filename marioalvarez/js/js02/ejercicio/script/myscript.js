const resultado=document.getElementById("outR");
let a=0;
let b=0;

/**
 * Obtenermos los valores y los convertimos a numerico.
 */
function obtenerValores(){
    a=Number(document.getElementById("inA").value);
    b=Number(document.getElementById("inB").value);
}

/**
 * Realiza la suma
 */
function suma(){
    obtenerValores();
    resultado.value=a+b;
}

/**
 * Realiza la resta
 */
function resta(){
    obtenerValores();
    resultado.value=a-b;
}

/**
 * Realiza la división
 */
function division(){
    obtenerValores();
    //Comprueba  si es posible realizarla
    if(b==0)
        resultado.value="Error. No dividir entre 0."
    else 
        resultado.value=a/b; 
}
/*
    https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dom
    HTML: <p id="demo">Click me.</p>
    <script>
        document.getElementById("demo").onclick = function() {myFunction()};
        function myFunction() {
            document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
        }
    </script>
*/
//Realiza la función  de multiplicación con arrow
document.getElementById("mul").onclick=()=>{obtenerValores();resultado.value=a*b;};

