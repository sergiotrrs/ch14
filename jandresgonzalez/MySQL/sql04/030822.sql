USE colonial;

SELECT * FROM paleta;
SELECT paleta.idpaleta AS NumID, paleta.nombre AS Nombre, sabor.sabor AS Sabor, paleta.precio AS Kachinkachin
FROM paleta -- tabla izquierda
INNER JOIN sabor
ON paleta.idsabor = sabor.idsabor
WHERE paleta.nombre LIKE "%mon%"
ORDER BY paleta.precio DESC; -- tabla derecha


SELECT * FROM paleta ORDER BY precio ASC;

SELECT *, sabor.sabor FROM paleta INNER JOIN sabor ON paleta.size = sabor.idsabor;

SELECT * FROM paleta;
SELECT * FROM sabor;

SELECT * FROM sabor INNER JOIN base ON sabor.idbase = base.idbase;

SELECT * FROM paleta WHERE nombre LIKE "%imo%";

UPDATE paleta SET paleta.idsabor=null WHERE idpaleta=45;

SELECT sabor.sabor, base.tipo_base FROM sabor INNER JOIN base ON sabor.idbase = base.idbase;

SELECT paleta.*, sabor.sabor FROM paleta LEFT JOIN sabor
ON paleta.idsabor = sabor.idsabor WHERE paleta.nombre LIKE "%mon%"
ORDER BY precio DESC;

SELECT paleta.*, sabor.* FROM paleta RIGHT JOIN sabor ON paleta.idsabor = sabor.idsabor;
-- WHERE paleta.nombre LIKE "%mon%";

SELECT * FROM paleta WHERE idsabor IN(21, 22, 23, 24, 25, 26, 27, 28, 29, 30);

SELECT * FROM sabor WHERE sabor.sabor LIKE "cub%";

SELECT paleta.*, sabor.* FROM paleta RIGHT JOIN sabor ON paleta.idsabor = sabor.idsabor
WHERE NOT sabor.idsabor IN(16, 17, 18, 19, 20) ORDER BY sabor.idsabor;

SELECT *FROM paleta FULL JOIN sabor ORDER BY nombre;

-- Full Join 
SELECT * FROM paleta 
	LEFT JOIN sabor ON paleta.idsabor=sabor.idsabor
		UNION
SELECT * FROM paleta
    RIGHT JOIN sabor ON paleta.idsabor=sabor.idsabor
	
    ORDER BY nombre;


SELECT * FROM paleta NATURAL JOIN sabor WHERE paleta.nombre LIKE "%imo%";

SELECT * FROM paleta;

SELECT * FROM sabor;

SELECT * FROM base;

SELECT paleta.nombre, paleta.size, paleta.precio, sabor.sabor 
	FROM paleta INNER JOIN sabor ON paleta.idsabor = sabor.idsabor 
	ORDER BY sabor;
    
SELECT sabor.idsabor, sabor.sabor, base.tipo_base
	FROM sabor INNER JOIN base ON sabor.idbase=base.idbase
    ORDER BY sabor;
    
    
    /*JOINS anidados*/
    
SELECT paleta.nombre, paleta.size, paleta.precio, sabor.sabor, base.tipo_base
	FROM paleta
    INNER JOIN sabor
    ON paleta.idsabor = sabor.idsabor
		INNER JOIN base
		ON sabor.idbase=base.idbase
		ORDER BY paleta.nombre;

SELECT paleta.*, sabor.*, base.*
	FROM paleta
    INNER JOIN sabor
    ON paleta.idsabor = sabor.idsabor
		INNER JOIN base
        ON sabor.idbase = base.idbase
        ORDER BY paleta.nombre;

SELECT paleta.*, sabor.*, base.*
	FROM paleta
    INNER JOIN sabor
    ON paleta.idsabor = sabor.idsabor
		INNER JOIN base
        ON sabor.idbase = base.idbase
		ORDER BY paleta.nombre;
