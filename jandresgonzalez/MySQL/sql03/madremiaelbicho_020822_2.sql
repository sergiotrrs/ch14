USE colonial;
-- select columnas from tabla
SELECT tipo_base FROM base;

 -- asterisco selecciona todpo
 SELECT * FROM base;
 SELECT * FROM paleta;
 
 -- se puede seleccionar una o más columnas
 SELECT nombre, size, precio FROM paleta;
 
/*
SELECT DISTINCT selecciona sólo cuando hay valores distintos en las tablas
en vez de todos los valores
*/

SELECT DISTINCT size FROM paleta;

-- para contar los valores: se puede usar COUNT

SELECT COUNT(tipo_base) DATOS_BASE FROM base;
SELECT COUNT(DISTINCT tipo_base) DATOS_BASE from base;

SELECT COUNT(DISTINCT sabor) DATOS_SABOR from sabor;

/*
La sentencia WHERE se usa para filtrar registros y acompaña
alguna condición
SELECT columnas FROM tabla //WHERE condición  ;
*/

SELECT COUNT(DISTINCT tipo_base) datos_base FROM base WHERE tipo_base="agua";
SELECT * FROM base WHERE tipo_base="leche";
SELECT * FROM base WHERE idbase>5;

SELECT COUNT(precio) FROM paleta WHERE precio>25.00;


-- AND, OR y NOT funcionan como booleans para las condiciones con WHERE
UPDATE base SET tipo_base="agua de cocacola" WHERE idbase!=10 AND idbase>10;

SELECT * FROM base WHERE idbase>10 OR idbase<=3;


SELECT * FROM paleta WHERE precio !=23.20;
SELECT * FROM paleta WHERE NOT precio=23.20;

-- Varios Booleans 
SELECT * FROM paleta WHERE precio<25 AND id>2 AND NOT precio=23;



SELECT * FROM paleta;

INSERT INTO sabor(sabor, idbase) VALUES ("guanabana", 2);
INSERT INTO sabor(sabor, idbase) VALUES ("platano", 1);

INSERT INTO base(tipo_base) VALUES ("agua de tang");
INSERT INTO base(tipo_base) VALUES ("lagrima de CH14");

INSERT INTO paleta(nombre, size, idsabor, precio) VALUES ("Guanapalet", "15", 11, 15.50);
INSERT INTO paleta(nombre, size, idsabor, precio) VALUES ("GourmetCH14", "17", 12, 10.00);


-- order by nos ayuda a acomodar las columnas de forma ascendente o descendente 

SELECT * FROM paleta ORDER BY nombre, idsabor, idpaleta; 