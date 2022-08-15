const operacion = require ("../scripts/operaciones");

test ("debera sumar dos numeros positivos ", ()=>{
    //expect (fncProbada).matcher();
    expect (operacion.multiplica(5,6)).toBe(30);
} );
