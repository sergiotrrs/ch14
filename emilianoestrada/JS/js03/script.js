function calcGregorian()
{
   let daytext;

   let a= parseInt(document.getElementById("mes").value);
   console.log(a);
    switch (a){
        case(1):
        daytext='January';
        break;
        case(2):
        daytext='February';
        break;
        case(3):
        daytext='March';
        break;
        case(4):
        daytext='April';
        break;
        case(5):
        daytext='May';
        break;
        case(6):
        daytext='June';
        break;
        case(7):
        daytext='July';
        break;
        case(8):
        daytext='August';
        break;
        case(9):
        daytext='September';
        break;
        case(10):
        daytext='October';
        break;
        case(11):
        daytext='November';
        break;
        case(12):
        daytext='December';
        break;
        }
        console.log(daytext);


let dias= document.getElementById('dia').value;
let meses= daytext;
let anos = (document.getElementById("ano").value);
console.log(document.getElementById('dia').value);
console.log(meses);
console.log(document.getElementById("ano").value);
const weekday = ["DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"];
const d = new Date(meses + " "+dias+", "+ anos+ " 01:15:00");
let day = weekday[d.getDay()];

document.getElementById("demo").innerHTML = day;
console.log(d);
console.log(day);

}




