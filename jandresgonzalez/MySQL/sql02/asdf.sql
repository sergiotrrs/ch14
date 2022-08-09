USE pruebajatg;
SELECT * FROM pruebajatg.sabor;
SELECT * FROM sabor;
INSERT INTO sabor(sabor, idbase) VALUES ("uva", 2);
INSERT INTO sabor(sabor, idbase) VALUES ("limón", 2);
INSERT INTO sabor(sabor, idbase) VALUES ("vainilla", 1);
INSERT INTO sabor(sabor, idbase) VALUES ("galleta", 1);
INSERT INTO sabor(sabor, idbase) VALUES ("ciruela", 4);
INSERT INTO sabor(sabor, idbase) VALUES ("arroz con leche", 6);
INSERT INTO sabor(sabor, idbase) VALUES ("higo", 3);
INSERT INTO sabor(sabor, idbase) VALUES ("pepino", 1);
INSERT INTO sabor(sabor, idbase) VALUES ("frutos secos", 5);


INSERT INTO sabor(sabor, idbase) VALUES ("frutos secos", 15);

INSERT INTO sabor(sabor, idbase) VALUES ("betabel", 1);
INSERT INTO sabor(sabor, idbase) VALUES ("pepino pasado", 1);

UPDATE sabor SET idbase=1 WHERE idbase=10;
