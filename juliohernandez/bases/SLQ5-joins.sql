UPDATE paleta SET idsabor=null WHERE idpaleta=45;
/*----   INNER JOIN ----*/
SELECT paleta.idpaleta AS identificador, paleta.nombre, sabor.sabor,paleta.precio -- Se selccionan todas las columnas a visualizar
	FROM paleta -- tabla izq
    INNER JOIN sabor -- tabla derecha
    ON paleta.idsabor = sabor.idsabor -- sobre qué condición hará la unión
    WHERE paleta.nombre LiKE "%mon%"
    ORDER BY paleta.precio DESC;
/*No aparece el registro 45 porque los id no coinciden, uno es 45 mientras que el otro es null*/
SELECT * FROM paleta;
SELECT * FROM sabor;

/*----- LEFT JOIN -----*/
SELECT paleta.*, sabor.sabor, sabor.idsabor
	FROM paleta
    LEFT JOIN sabor
    ON paleta.idsabor=sabor.idsabor
    WHERE paleta.nombre LIKE '%lim%';
-- Aquí sí se muestran todos los registros, aunque no coincidan

/*----- RIGHT JOIN -----*/
SELECT paleta.*, sabor.*
	FROM paleta
    RIGHT JOIN sabor
    ON paleta.idsabor=sabor.idsabor
    WHERE sabor.idsabor NOT IN (21,23,24,25,26,16)
    ORDER BY sabor.idsabor;
    
SELECT * FROM paleta WHERE idsabor IN (21,23,24,25,26,16);

/*---- FULL OUTER JOIN -----
SELECT paleta.*, sabor.*
	FROM paleta
    FULLL JOIN sabor
    ON paleta.idsabor=sabor.idsabor;
    */
    
/*---- NATURAL JOIN -----*/
SELECT * -- Selecciona todas las tablas?
	FROM paleta
    NATURAL JOIN sabor
    WHERE paleta.nombre LIKE "%lim%";
-- Para que funcione, deben tener columnas en común (inclusive las filtra para que no aparezcan dobles)
-- Primero muestra la columna en común (nombre y valores).

/*---JOINS ANIDADOS---*/
-- Mostrar los elementos de [paleta con el nombre del {sabor] y nombre de la base}    
-- Paleta U Sabor
SELECT paleta.idpaleta, paleta.nombre, sabor.sabor, paleta.precio
	FROM paleta
    INNER JOIN sabor
    ON paleta.idsabor=sabor.idsabor;

-- Sabor U base
SELECT sabor.sabor, base.tipo_base
	FROM sabor
    INNER JOIN base
    ON sabor.idbase=base.idbase;
    
SELECT paleta.idpaleta, paleta.nombre, sabor.sabor, base.tipo_base, paleta.precio
	FROM paleta 
    INNER JOIN sabor
    ON paleta.idsabor=sabor.idsabor
    INNER JOIN base
    ON sabor.idbase=base.idbase
    WHERE paleta.nombre LIKE "%ada%";