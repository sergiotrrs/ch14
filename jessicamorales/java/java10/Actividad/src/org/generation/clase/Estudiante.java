package org.generation.clase;

import org.generation.materia.Materia;

public class Estudiante {
	private String nombre;
	private String apellido;
	private int edad;
	private int nMaterias;
	private Materia materia;
	private Maestro maestro;
	
	
	public Estudiante(String nombre, String apellido, int edad, int nMaterias, Materia materia, Maestro maestro) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.nMaterias = nMaterias;
		this.materia = materia;
		this.maestro = maestro;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public int getnMaterias() {
		return nMaterias;
	}

	public void setnMaterias(int nMaterias) {
		this.nMaterias = nMaterias;
	}

	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}

	public Maestro getMaestro() {
		return maestro;
	}

	public void setMaestro(Maestro maestro) {
		this.maestro = maestro;
	}

	public String datos() {
		return this.nombre + " " + this.apellido + " tiene " + this.edad 
				+ " años y esta cursando " + this.nMaterias + " materias. Su siguiente materia es: " 
				+ this.materia.getNombreM() + " con prof. " + this.maestro.getNombre();
	}
}
