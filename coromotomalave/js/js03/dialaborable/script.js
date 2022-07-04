
// funcion para que me calcular
const isValidDay = (year, month, day) => {
    let  date = new Date(year, month, day); 
    //la fecha generada por la instancia Date debe ser igual a la ingresada.
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
};

const getMonthNameByIndex = (monthIndex) => {
    //monthIndex (Number): indice del mes para obtener su equivalente nombre
    const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'];
    return monthNames[monthIndex]; 
};

const createDateString = (dayName, dayNumber, monthNumber) =>  `${dayName}, ${dayNumber} de ${getMonthNameByIndex(monthNumber)}.`;

const isWeekendDay = (day) => {
    //['domingo', 'sabado'] array de dias no laborables
    //Me aseguro que el string (dayName) siempre este en minuscula cuando lo busque en el array
    //indexOf: obtiene la posicion del valor recibido como parametro en un array 
    return [0, 6].indexOf(day) > -1;
};

const getDateInfo = function getDateInfo(year, month, day) {
    //month: Number: Indice del mes 
    let dayName = ''; //Declarar la variable y asignar initial value
    const date = new Date(year, month, day);
    switch (date.getDay()) {
        case 0:
            dayName = `Domingo`;// Asignar el valor 'Domingo' en la variable dayName
            break;
        case 1:
            dayName = `Lunes`;
            break;
        case 2:
            dayName = `Martes`;
            break;
        case 3:
            dayName = `Miercoles`;
            break;
        case 4:
            dayName = `Jueves`;
            break;
        case 5:
            dayName = `Viernes`;
            break;
        case 6:
            dayName = `Sabado`;
            break;
        default:
           console.log('day', date.getDay(), day);
    }
    return createDateString(dayName, day, month) + ` Día ${ isWeekendDay(date.getDay()) ? 'no Laborable': 'Laborable'}`;
};
//Asignando referencias del DOM en variables

const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const result = document.getElementById("result");
const form  = document.getElementsByTagName('form')[0];

// definir el manejador del evento submit
const submitEventHandler = function (event) {
    event.preventDefault();
    //Check si el formulario es valido (todos los inputs son requeridos)
    if (form.checkValidity() === false) {
        //Si el formulario no es valido agregar la clase 'was-validated' y retornar
        form.classList.add('was-validated');
        return;
    }
    // Leer los input para obtener los valores
    day = Number(inputDay.value);
    month = Number(inputMonth.value ) - 1; //Restar 1 porque para crear la instancia Date
    year = Number(inputYear.value);
    //Validar si el dia existe
    if (isValidDay(year, month, day) === true) {
        //Obtener la informacion sobre el dia y 
        result.value = getDateInfo(year, month, day);
        result.classList.remove('text-danger');
    } else {
        //get la informacion sobre el dia
        result.value = 'El día ingresado no existe!';
        result.classList.add('text-danger');
    }
};
// Agregar el manejador al evento submit.
form.addEventListener('submit', submitEventHandler);


