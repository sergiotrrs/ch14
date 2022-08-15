CREATE TABLE `gen_sql01`.`worker` (
  `employee_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `salary` INT NULL,
  `start_date` DATETIME NULL,
  `department` VARCHAR(45) NULL,
  PRIMARY KEY (`employee_id`));

CREATE TABLE `gen_sql01`.`bonus` (
  `employee_ref_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `bonus_date` DATETIME NULL,
  `bonus_amount` INT NULL,
  PRIMARY KEY (`employee_ref_id`));

CREATE TABLE `gen_sql01`.`title` (
  `employee_ref_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `job_title` VARCHAR(45) NULL,
  `affected_from` INT NULL,
  PRIMARY KEY (`employee_ref_id`));

USE gen_sql01;
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ('Monika', 'Arora', '100000', '2014-02-20	', 'HR');
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Santiago", "Carrillo", '80000', '2014-06-11', "Admin");
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Ian", "Smith", 300000, "2014-02-20", "HR");
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Boyd", "Ndonga", 500000, "2014-02-20", "Admin");
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Vivek", "Bhati", 500000, "2014-06-11", "Admin");
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Elise", "Guimares", 200000, "2014-06-11", "Account");
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Barrack", "Obama", 75000, "2014-01-20", "Account");
INSERT INTO worker (`first_name`, `last_name`, `salary`, `start_date`, `department`) VALUES ("Vivian", "Muyu", 90000, "2014-04-11", "Admin");







SELECT * FROM worker ORDER BY first_name;
SELECT * FROM worker WHERE first_name="Vivek" AND last_name="Bhati";
SELECT * FROM worker WHERE NOT first_name="Vivek" AND NOT last_name="Bhati";
SELECT * FROM worker WHERE department="Admin";
SELECT * FROM worker ORDER BY first_name ASC, department DESC; 



/*-----------------*/
 -- Parte dos
 
 INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('1', 'France', 'FRA');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('2', 'Germany', 'GER');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('3', 'Brazil', 'BRA');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('4', 'Columbia', 'COL');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('5', 'Kenya', 'KEN');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('6', 'Mexico', 'MEX');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('7', 'South Africa', 'RSA');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('8', 'Anited States of America', 'USA');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('9', 'Britain', 'BRI');
INSERT INTO `generation`.`Countries` (`idCountries`, `Name`, `Code`) VALUES ('10', 'Italy', 'ITA');


INSERT INTO `generation`.`IdTypes` (`id_idTypes`, `name`) VALUES ('1', 'ABC');
INSERT INTO `generation`.`IdTypes` (`id_idTypes`, `name`) VALUES ('2', 'XYZ');
INSERT INTO `generation`.`IdTypes` (`id_idTypes`, `name`) VALUES ('3', 'DAB');
INSERT INTO `generation`.`IdTypes` (`id_idTypes`, `name`) VALUES ('4', 'TAB');
INSERT INTO `generation`.`IdTypes` (`id_idTypes`, `name`) VALUES ('5', 'SEN');


INSERT INTO `generation`.`Students` (`idStudent`, `IdType_id`, `name`, `last_name`, `email`, `address`, `birthdate`, `nationality`) VALUES ('1', '1', 'Ian', 'Smith', 'ian.smith@example.com', '909, baringo rd', '1992-01-13', '5');
INSERT INTO `generation`.`Students` (`idStudent`, `IdType_id`, `name`, `last_name`, `email`, `address`, `birthdate`, `nationality`) VALUES ('2', '1', 'Sarah ', 'Conor', 'sarah.conor@example.com', '89, forest drive', '1978-02-20', '9');
INSERT INTO `generation`.`Students` (`idStudent`, `IdType_id`, `name`, `last_name`, `email`, `address`, `birthdate`, `nationality`) VALUES ('3', '2', 'John', 'Conor', 'john.conor@example.com', '976, future avenue', '1996-02-20', '9');
INSERT INTO `generation`.`Students` (`idStudent`, `IdType_id`, `name`, `last_name`, `email`, `address`, `birthdate`, `nationality`) VALUES ('4', '3', 'Benedict', 'Cumberbach', 'ben.cumbach@example.com', '90, mubery drive', '1987-05-26', '10');


CREATE DATABASE generation;
USE generation;

CREATE TABLE `generation`.`idtypes` (
  `id_idtypes` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_idtypes`));
  
CREATE TABLE generation.students(
`idStudent` INT NOT NULL AUTO_INCREMENT,
`IdType_id` INT NULL,
`name` VARCHAR(100) NULL,
`last_name` VARCHAR(100) NULL,
`email` VARCHAR(100) NULL,
`address` VARCHAR(100) NULL,
`birthdate` DATETIME NULL,
`nationality`  INT,
PRIMARY KEY (`idStudent`)
);

CREATE TABLE generation.countries(
`idCountries` INT NOT NULL AUTO_INCREMENT,
`Name` VARCHAR(45),
`Code` VARCHAR(3),
PRIMARY KEY (`idCountries`)
);

UPDATE `generation`.`cOUNTRIES` SET `Name`='United States of America' WHERE `idCountries`='8';

SELECT * FROM generation.cOUNTRIES;
SELECT * FROM generation.idtypes;
SELECT * FROM generation.students;
SELECT * FROM generation.students WHERE nationality=8;

SELECT * FROM generation.students ORDER BY last_name DESC;
