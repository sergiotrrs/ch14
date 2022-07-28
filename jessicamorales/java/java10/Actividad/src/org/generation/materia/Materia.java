package org.generation.materia;

public class Materia {
	private String nombreM;
	private int nAlumnos;
	
	public Materia(String nombreM, int nAlumnos) {
		super();
		this.nombreM = nombreM;
		this.nAlumnos = nAlumnos;
	}

	public String getNombreM() {
		return nombreM;
	}

	public void setNombreM(String nombreM) {
		this.nombreM = nombreM;
	}

	public int getnAlumnos() {
		return nAlumnos;
	}

	public void setnAlumnos(int nAlumnos) {
		this.nAlumnos = nAlumnos;
	}
}
