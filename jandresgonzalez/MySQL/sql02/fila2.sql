USE pruebajatg;

SELECT * FROM pruebajatg.base;
INSERT INTO base (tipo_base) VALUES ("leche");
INSERT INTO base (tipo_base) VALUES ("agua");
INSERT INTO base (tipo_base) VALUES ("almendras");
INSERT INTO base (tipo_base) VALUES ("soya");
INSERT INTO base (tipo_base) VALUES ("coco");
INSERT INTO base (tipo_base) VALUES ("arroz");

INSERT INTO base (tipo_base) VALUES ("Agua loca");


DELETE FROM base WHERE tipo_base="Agua loca";

UPDATE base SET idbase=8 WHERE idbase=7;

ALTER TABLE base auto_increment=9;