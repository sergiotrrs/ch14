const a = document.getElementById('a');
const b = document.getElementById('b');
const result = document.getElementById('result');
const btnSuma = document.getElementById('suma');
const btnResta = document.getElementById('resta');
const btnMulti = document.getElementById('multi');
const btnDiv = document.getElementById('div');

const suma = (a, b) => parseInt(a.value) + parseInt(b.value);
const resta = (a, b) => parseInt(a.value) - parseInt(b.value);
const multi = (a, b) => parseInt(a.value) * parseInt(b.value);
const div = (a, b) => parseInt(a.value) / parseInt(b.value);

btnSuma.onclick = () => {
    if (a.value !== '' && b.value !== '') {
        result.value = suma(a, b);
    }
};
btnResta.onclick = () => {
    if (a.value !== '' && b.value !== '') {
        result.value = resta(a, b);
    }
};
btnMulti.onclick = () => {
    if (a.value !== '' && b.value !== '') {
        result.value = multi(a, b);
    }
};
btnDiv.onclick = () => {
    if (a.value !== '' && b.value !== '') {
        result.value = div(a, b);
    }
};
