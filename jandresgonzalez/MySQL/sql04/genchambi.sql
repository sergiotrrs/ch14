USE generation;
SELECT * FROM generation.courses_has_students;

-- primera línea: Run the following SQL Query to complete your first JOIN to see more information about the Students:
SELECT 
    Students.*, Countries.name country
FROM
    Students
        INNER JOIN
    Countries ON Students.nationality = Countries.idCountries;
    

SELECT countries.name FROM countries;
SELECT * FROM courses_has_students;
SELECT idStudent FROM students ORDER BY idtype_id;
SELECT students_id_student FROM courses_has_students ORDER BY students_id_student;

-- Modify the previous SQL statment so it joins the Students table with the IDTypes table to know each students' type of ID.
SELECT students.name, students.last_name, idtypes.name FROM students INNER JOIN idtypes ON students.idtype_id = idtypes.id_idTypes;
-- Write an additional SQL statment to JOIN the Students table with the CourseHasStudent table to get the code of the courses that each students is enrolled in.
SELECT DISTINCT students.name, students.last_name, courses_has_students.course_code FROM students NATURAL JOIN courses_has_students ORDER BY course_code;
-- Write a SQL query to join the CourseHasStudent table with the Courses table to get the name of the course information with the student ID of students enrolled in the course.
SELECT DISTINCT courses_has_students.course_code, courses.name, courses.credits FROM courses_has_students INNER JOIN courses
ON courses_has_students.course_code = courses.code;
-- Now that you have the two queries, use an INNER JOIN to combine the results of the queries (this is called nested queries, and will allow you to combine SQL queries to order the data the way you like).
SELECT * FROM courses;
SELECT students.idstudent, students.last_name, students.name, courses.name, courses.credits, courses_has_students.course_code
FROM students INNER JOIN courses_has_students ON students.idstudent = courses_has_students.students_id_student
INNER JOIN courses ON courses_has_students.course_code = courses.code ORDER BY idstudent;

SELECT * FROM courses_has_students;

-- PART2
-- Write a SQL query that allows you to find all the students in a given country.
SELECT * FROM countries;
SELECT * FROM students;

-- //////
SELECT students.name AS Name, students.last_name AS LastName, countries.name AS Nationality FROM students INNER JOIN countries ON students.nationality=countries.idcountries
WHERE countries.name = "Canada";
-- ////

-- Write a SQL query that allows you to find all the Countries which name starts with 'Ca'.
SELECT countries.name AS AllGenerationCountries FROM countries WHERE countries.name LIKE "ca%";
-- Count all the students that are enrolled in the course 'JAVA-1'.
SELECT * FROM courses;
SELECT COUNT(module_code) FROM courses WHERE module_code LIKE "db%";
SELECT COUNT(course_code) AS PeopleTakingJAVAIntro
FROM students INNER JOIN courses_has_students ON students.idstudent = courses_has_students.students_id_student
INNER JOIN courses ON courses_has_students.course_code = courses.code 
WHERE course_code="JAVA-1"
ORDER BY idstudent;

-- Calculate the SUM of the credits of all the courses that have the word 'JAVA' in the name.
SELECT * FROM courses;
SELECT SUM(credits) FROM courses WHERE name LIKE "%JAVA%" OR "JAVA%";
-- CHALLENGE
-- Write a Query that allows you to count all the students that are enrolled in a given module. Hint: You need to count all the students enrolled in all the courses of the module.
SELECT * FROM modules;
SELECT * FROM courses;

SELECT * FROM modules INNER JOIN courses ON modules.code = courses.module_code;
SELECT * FROM modules;

SELECT 
    courses_has_students.students_id_student, modules.name
FROM
    courses_has_students
        INNER JOIN
    courses ON courses_has_students.course_code = courses.code
		INNER JOIN
	modules ON modules.code=courses.module_code ORDER BY modules.name;
    
    
SELECT * FROM modules;
    -- DOS: RETO
    
    SELECT
    COUNT(students_id_student)
FROM
    courses_has_students
        INNER JOIN
    courses ON courses_has_students.course_code = courses.code
		INNER JOIN
	modules ON modules.code=courses.module_code WHERE modules.code = "DB-MYSQL";
    
    
    -- SUBRETO DEL RETO
     SELECT
    COUNT(students_id_student) AS NumStudents, courses.module_code AS Curso
FROM
    courses_has_students
        INNER JOIN
    courses ON courses_has_students.course_code = courses.code
		GROUP BY courses.module_code ORDER BY NumStudents;
        
        
        -- SKETCHES
        
	SELECT * FROM students GROUP BY nationality;
    SELECT COUNT(nationality) AS cuentaNacional, students.nationality AS Nombre FROM students GROUP BY nationality ORDER BY cuentaNacional DESC;
    SELECT * FROM students;
    SELECT COUNT(nationality) AS cuentaNacional, countries.name AS Pais FROM students INNER JOIN countries
    ON students.nationality = countries.idcountries GROUP BY Pais ORDER BY cuentaNacional DESC;
    
    
	SELECT * FROM countries;
    SELECT DISTINCT COUNT(students.last_name), countries.name FROM students INNER JOIN countries ON students.nationality = countries.idcountries WHERE countries.name LIKE "Cr%" GROUP BY countries.name;