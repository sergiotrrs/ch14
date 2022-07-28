package org.generation;

import java.util.HashMap;

import org.generation.clase.Estudiante;
import org.generation.clase.Maestro;
import org.generation.materia.Materia;

public class Test {

	public static void main(String[] args) {
		Maestro maestro = new Maestro("Laura", 37);
		Materia materia = new Materia("Historia", 32);
		Estudiante estudiante = new Estudiante("Luis", "Lopez", 16, 6, materia, maestro);
		
		System.out.println(estudiante.datos());
		
		System.out.println("--------Con HashMap-----------");
		HashMap<Integer, Estudiante> alumnos = new HashMap<Integer, Estudiante>();
		alumnos.put(1, estudiante);
		alumnos.put(2, new Estudiante(
				"Martha", "Ramirez",
				18, 7, materia, maestro));
		materia.setNombreM("Programacion");
		maestro.setNombre("Daniel");
		
		for(Estudiante alumno: alumnos.values()) {
			System.out.println("Alumno:  " + alumno.datos());

		}
	}

}
