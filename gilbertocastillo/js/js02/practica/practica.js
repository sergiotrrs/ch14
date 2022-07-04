const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorActual=document.getElementById('valor-actual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        display.addNumber(boton.innerHTML);
    });
});

botonesOperador.forEach(boton=>{
    boton.addEventListener('click',()=>{
        display.computar(boton.value);
    });
});