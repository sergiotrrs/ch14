USE colonial;

SELECT * FROM base;

-- Min y MAX de valores
SELECT nombre, precio FROM paleta WHERE precio= (SELECT MIN(precio) FROM paleta);
SELECT *, nombre, MAX(precio) FROM paleta;
SELECT *, MIN(precio) FROM paleta;

-- Precio promerio
SELECT AVG(precio) FROM paleta;

-- SUM da autosuma de la columna 
SELECT SUM(precio) FROM paleta;
SELECT SUM(precio) Suma_limonada FROM paleta WHERE nombre="Limonada";
SELECT precio FROM paleta WHERE nombre="Limonada";


/**
*LIKE y operador WHERE ayudar a buscar un patrón
% representa cero, uno o múltiples caracteres
el signo _ represebnta un caracter
*/

SELECT * FROM paleta WHERE nombre LIKE "%mon%";
SELECT SUM(precio) FROM paleta WHERE nombre LIKE "%mon%"; -- caracteres a amabos lados

SELECT * FROM paleta WHERE nombre LIKE "_re%"; -- un caracter al lado y varios a laderecha
SELECT * FROM paleta WHERE nombre LIKE "%ada"; -- varios caracter a la izquierda

SELECT * FROM paleta WHERE nombre LIKE "%mo_"; -- varios caracteres a la izquierda y uno solo a la derecha

SELECT * FROM paleta WHERE nombre LIKE "__a%"; -- cuando hay dos a la izquierda

SELECT * FROM paleta WHERE nombre LIKE "l_____%";

/*
El operador IN permite multiplicar 
*/

SELECT * FROM paleta WHERE nombre IN("Guanapalet");

SELECT * FROM paleta WHERE idsabor IN(1 , 2, 3) ORDER BY nombre DESC, precio DESC;
SELECT * FROM paleta WHERE nombre IN("Limonada");
SELECT * FROM paleta WHERE nombre IN(SELECT DISTINCT nombre FROM paleta WHERE nombre LIKE "%mon%");


/*
Operador Between selecciona valores en un rango especificado
*/

SELECT * FROM paleta WHERE precio BETWEEN 30.00 AND 100.00 ORDER BY precio;

-- El operador IN y BETWEEN se pueden negar con NOT

SELECT * FROM paleta WHERE precio NOT BETWEEN 30.00 AND 50.00 ORDER BY precio DESC;

SELECT * FROM paleta WHERE precio NOT IN (180.00, 10.00, 5.00, 15.50) ORDER BY precio ASC;

/*El operador Alias (AS) nos sirve para cambiarle el nombre a una columna al mostrarla */

SELECT nombre AS "Paletas", precio AS "Precio Colonial" FROM paleta
WHERE precio NOT IN (180.00, 10.00, 10.50, 5.00, 15.50) ORDER BY precio ASC;