function suma(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    return a+b;    
    }

function resta(){
        let a = parseFloat(document.getElementById('a').value);
        let b = parseFloat(document.getElementById('b').value);
        return a-b;
    }

    function multi(){
        let a = parseFloat(document.getElementById('a').value);
        let b = parseFloat(document.getElementById('b').value);
        return a*b;
    }

    const div = () => {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let resultado = a/b;
        document.getElementById("resul").innerHTML = resultado;}


function sumar(){
    document.getElementById("resul").innerHTML = suma();}
function restar(){
    document.getElementById("resul").innerHTML = resta();}
function multip(){
    document.getElementById("resul").innerHTML = multi();}

    
    console.log("Inicia el programa ");

