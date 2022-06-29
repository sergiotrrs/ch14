const resultado=document.getElementById("outR");
let a=0;
let b=0;
function obtenerValores(){
    a=Number(document.getElementById("inA").value);
    b=Number(document.getElementById("inB").value);
}

function suma(){
    obtenerValores();
    resultado.innerHTML=a+b;
}

function resta(){
    obtenerValores();
    resultado.innerHTML=a-b;
}

function division(){
    obtenerValores();
    if(b==0)
        resultado.innerHTML="Error.No dividir entre cero."
    else 
        resultado.innerHTML=a/b; 
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
document.getElementById("mul").onclick=()=>{obtenerValores();resultado.innerHTML=a*b;};

