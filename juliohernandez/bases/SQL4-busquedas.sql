USE colonial;
SELECT * FROM colonial.sabor;
SELECT COUNT(sabor) FROM colonial.sabor;
SELECT COUNT(DISTINCT sabor) FROM colonial.sabor;
/*
La instrucción ORDER BY nos ayuda a order alfabéticamente la columna. ASC en orden ascendente.
Para hacerla de forma descendente: agregar DESC
*/
-- Primero por nombre, luego por idsabior
SELECT * FROM paleta ORDER BY nombre, idsabor;
SELECT * FROM paleta ORDER BY nombre DESC, idsabor DESC;
SELECT * FROM paleta ORDER BY idsabor DESC;

/*
MAX y MIN para encontrar máximos y minimos
*/
-- paleta más barata
SELECT MAX(precio) FROM paleta;
SELECT nombre, precio FROM paleta WHERE precio= (SELECT MAX(precio) FROM paleta);
SELECT MIN(precio) FROM paleta;
SELECT nombre, precio FROM paleta WHERE precio= (SELECT MIN(precio) FROM paleta);
SELECT * FROM paleta WHERE nombre="Morada";
SELECT * FROM paleta WHERE precio=23.2;

-- instrucción AVG para promedio
SELECT AVG(precio) FROM paleta;
-- Sumas con SUM
SELECT SUM(precio) FROM paleta;
SELECT SUM(precio) FROM paleta WHERE nombre="limonada";
/*
Con LIKE usada junto con WHERE ayuda a buscar un patrón especificado.
El signo de % representa un cero, uno o múliples caracteres
El signo _ representa un caracter
*/
SELECT * FROM paleta WHERE nombre LIKE "Limon%";
-- :ooooo
SELECT SUM(precio) FROM paleta WHERE nombre LIKE "%Limon%";
-- inicia con
SELECT * FROM paleta WHERE nombre LIKE "fres%";
-- termina con
SELECT * FROM paleta WHERE nombre LIKE "%ada";
-- con guion
SELECT * FROM paleta WHERE nombre LIKE "__a%";
SELECT * FROM paleta WHERE nombre LIKE "c________%";

/*El operador IN permite especificar múltiples valores, equivalente a varios OR*/
SELECT * FROM paleta WHERE nombre IN( "limonada", "rosa");
SELECT * FROM paleta WHERE idsabor IN (1,2,3) ORDER BY nombre;

/*BETWEEN selecciona valores en un rango especificado
BETWEEN e IN se pueden utilizar negándolos con NOT
*/
SELECT * FROM paleta WHERE precio BETWEEN 30 AND 50 ORDER BY precio,nombre;
SELECT * FROM paleta WHERE precio NOT BETWEEN 30 AND 50 ORDER BY precio,nombre;

/*AS alias nos sirve para cambiar el nombre a una columna durante el SELECT*/
SELECT nombre AS paletas FROM paleta WHERE idsabor=1;

-- Nos agrupa elemento que sean similares en la columna indicada.
SELECT COUNT(idpaleta), nombre, precio FROM paleta WHERE nombre LIKE "%mon%" GROUP BY nombre;

-- HAVING para realizar sentencias en donde WHERE no se puede utilizar
SELECT COUNT(idpaleta), nombre, precio FROM paleta GROUP BY nombre HAVING COUNT(idpaleta)>1;