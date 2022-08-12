-- Comentario uno 
/*Otro comentario*/
USE pruebajatg;
/*Se crea tabla con número que jamás es null y se autoincrementa*/
CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nombre varchar(100), apellido varchar(150), EdoRep INT, EdoCivil INT);
DESCRIBE users;
SELECT * FROM pruebajatg.estados;

INSERT INTO users (nombre, apellido, EdoRep, Edocivil)
VALUES ("Benito", "Salinas", 1, 6);
SELECT * FROM pruebajatg.edocivil;
SELECT * FROM prueba.users;
INSERT INTO users (nombre, apellido, EdoRep, Edocivil)
VALUES ("Jorge", "Abue", 9, 5);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Jorge", "Moltalvo", 6, 6);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Pablo", "López", 9, 4);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Andrés", "López", 9, 5);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Maga", "Flores", 5, 3);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Azu", "Flores", 5, 3);

DELETE FROM users WHERE id = 7;
SELECT users.nombre, users.apellido, edocivil.edoCivil 
FROM users INNER JOIN edocivil ON users.id = edocivil.id WHERE edocivil.id = "3" ;
