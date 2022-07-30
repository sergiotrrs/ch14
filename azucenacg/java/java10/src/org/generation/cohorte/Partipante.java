package org.generation.cohorte;

import org.generation.mascota.perrito;

public class Partipante {
	private String nombre;
	private int edad;
	private perrito mascota;
	private Mentor mentor;
	
	public Partipante(String nombre, int edad, perrito mascota,Mentor mentor) {
		this.nombre = nombre;
		this.edad = edad;
		this.mascota = mascota;
		this.mentor=mentor;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public perrito getMascota() {
		return mascota;
	}

	public void setMascota(perrito mascota) {
		this.mascota = mascota;
	}
	
	public String datos() {
		return this.nombre+", "+this.edad+
				" tiene de mascota a "+this.mascota.getNombre()
				+" su mentora es: "+this.mentor.getNombre();
	}
	
	
}
