USE tienda;
SHOW tables;
CREATE TABLE producto (nombre varchar(120),descripcion varchar(100));
DESCRIBE producto;
SELECT * FROM producto;
INSERT INTO producto (nombre,descripcion) VALUES ("camarones","comida");
INSERT INTO producto (nombre,descripcion) VALUES ("jokeis","comida");
DROP TABLE producto;
