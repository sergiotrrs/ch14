USE colonial;
-- GROU BY agrupa elementos 
SELECT COUNT(idpaleta), nombre, precio FROM paleta WHERE nombre LIKE "%mon%" GROUP BY nombre;

 -- HAVING ayuda donde no se usa WHERE
 
 SELECT COUNT(IDPALETA), nombre, precio FROM paleta GROUP BY nombre; 
 SELECT COUNT(IDPALETA), nombre, precio FROM paleta GROUP BY nombre HAVING COUNT(idpaleta)>1; 
 
  SELECT COUNT(IDPALETA), nombre, precio FROM paleta GROUP BY nombre HAVING COUNT(idpaleta)>1; 