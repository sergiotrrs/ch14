CREATE DATABASE gen;
USE gen;
CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nombre varchar(100), apellido varchar(150),EdoRep INT, EdoCivil INT);
-- Se muestra la tabla
DESCRIBE users;
SELECT * FROM users;
INSERT INTO users (nombre, apellido, EdoRep, EdoCivil) VALUES ("Jorge", "Abue", 9 , 7);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Benito", "Salinas", 1, 6);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Jorge", "Abue", 9, 5);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Jorge", "Moltalvo", 6, 6);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Pablo", "López", 9, 4);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Andrés", "López", 9, 5);
INSERT INTO users (nombre, apellido, EdoREp, EdoCivil) VALUES ("Maga", "Flores", 5, 3);

DELETE FROM users WHERE id=7;
SELECT users.nombre, users.apellido, edos_civil.Edo_civil FROM users INNER JOIN edos_civil ON users.id= edos_civil.id WHERE users.id=5;
