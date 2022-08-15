USE lacolonial;
SELECT * FROM lacolonial.paleta;
SELECT * FROM lacolonial.base;

INSERT INTO lacolonial.base(tipo_base) VALUES ("agua de coco");
INSERT INTO lacolonial.base(tipo_base) VALUE ("cocacola");
INSERT INTO lacolonial.base(tipo_base) VALUE ("almendra");

UPDATE lacolonial.base SET tipo_base="agua lokita" WHERE idbase=7;

INSERT INTO lacolonial.base(tipo_base) VALUE ("coco");
INSERT INTO lacolonial.base(tipo_base) VALUE ("sake");


UPDATE lacolonial.base SET tipo_base="coco" WHERE idbase="8";
UPDATE lacolonial.base SET tipo_base="agua sandia" WHERE tipo_base="sake";