USE colonial;
-- SELECT columnas FREOM tabla;
SELECT tipo_base FROM base;
-- usando * se seleccionan todas las columnas
SELECT * FROM base;
-- Puedo seleccionar más de una columna
SELECT nombre, size, precio FROM paleta;
/*
SELECT DISTINCT selcciona solo valores diferentes en las tablas indicadas (los tipos)

*/
/*
Usando la instrucción SELECT COUNT, nos entrega el número de elementos encontrados
SELECT COUNT(size) FROM paleta;
*/
-- Tipos diferentes
SELECT COUNT( DISTINCT tipo_base) FROM base;
-- Todos los tipos
SELECT COUNT(tipo_base) FROM base;
-- ¿Cómo saber cuántos hay de cada sabor?
/*
La sentencia WHERE es usada para filtrar los registros, se acompmaña de una condición
SELECT columnas FROM nombre_tabla WHERE condicion;
*/
SELECT * FROM base WHERE idbase=4;
SELECT * FROM base WHERE tipo_base='Coca Cola';
-- Paletas arriba de 25
SELECT * FROM paleta WHERE precio>25.0;
-- Cantidad de paletas arriba de 25
SELECT COUNT(precio) FROM paleta WHERE precio > 25.0;
-- Cambiar el precio de los registros con idsabor a 24.50 en precio
UPDATE paleta SET precio=24.50 WHERE idsabor="4";
-- Cambiar el precio de 23.5 a los que tengan precio menor o igual a 25
UPDATE paleta SET precio=23.20 WHERE precio<=25.0;

-- cambiar size = 10 a todos los registros que sean diferente de 23.2
UPDATE paleta SET size = 10 WHERE precio != 23.2;

/*
Se pueden usar los operadores AND, OR, y NOT para combinarlas con la instrucción WHERE
*/

SELECT * FROM  paleta WHERE precio =23.2 AND idsabor=4;
SELECT * FROM paleta WHERE precio<25.00 OR idsabor=4;

SELECT * FROM paleta WHERE precio !=23.2;
SELECT * FROM paleta WHERE NOT precio = 23.2;

-- seleccionar los campos menor a 25 y que idsabor <4 y que su tamaño no sea 10
SELECT * FROM paleta WHERE precio < 25 AND idsabor < 4 AND NOT size = 10;
INSERT INTO base (tipo_base) VALUES ("calcetín");
INSERT INTO base (tipo_base) VALUES ("chicarrón");
INSERT INTO sabor (idsabor, sabor) VALUES (30, "calcetín");
INSERT INTO sabor (idsabor, sabor) VALUES (31, "chicarrón");
INSERT INTO paleta (nombre, size, idsabor, precio) VALUES ("porquinho",4,31,25);
INSERT INTO paleta (nombre, size, idsabor, precio) VALUES ("Té de Calcetín",7,30,50);


SELECT * FROM base;
