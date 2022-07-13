function fecha() {
    /*let fecha = new Date();
    document.getElementById("dia").value = fecha.getDay();
    document.getElementById("mes").value = fecha.getMonth() + 1;
    document.getElementById("año").value = fecha.getFullYear()*/
   /*let fecha = new Date();
    let dia = document.getElementById("dia").value -1;
    let mes = document.getElementById("mes").value ;
    let año = document.getElementById("año").value;
    fecha.setFullYear(año, mes,dia);
    fecha.getFullYear();
    fecha.getMonth() + 1;
    fecha.getDate();
    
    if (fecha.getDate() > 0 && fecha.getDay() < 6) {
        console.log(`${dias[fecha.getDate()]}, es día laboral`);
    } else {
        console.log(`${dias[fecha.getDate()]}, es día libre`);
    }*/
    
    let año = document.getElementById("año").value;
    let mes = document.getElementById("mes").value -1
    let dia = document.getElementById("dia").value
    let fecha = new Date(año, mes, dia);
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    diaNombre = dias[fecha.getDay()-1];
    if (fecha.getDay()-1 >= 0 && fecha.getDay()-1< 5) {
        document.getElementById("resultado").value = `El Día ${diaNombre} es laboral`;
    } else {
        document.getElementById("resultado").value = `El Día ${diaNombre} es libre`;
    }

}