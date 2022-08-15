package org.generation.cohorte;

import org.generation.mascota.Perrito;

public class Participante {
	private String nombre;
	private int edad;
	private Perrito mascota;
	private Mentor mentor;
	
	public Participante(String nombre, int edad, Perrito mascota, Mentor mentor) {
		this.nombre = nombre;
		this.edad = edad;
		this.mascota = mascota;
		this.mentor = mentor;
	}

	
	public Mentor getMentor() {
		return mentor;
	}

	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
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

	public Perrito getMascota() {
		return mascota;
	}

	public void setMascota(Perrito mascota) {
		this.mascota = mascota;
	}

	public String datos() {
		return this.nombre + ", " +this.edad
				+". Tiene de mascota a "+this.mascota.getNombre()
				+". Su mentora es " + this.mentor.getNombre();
	}

		
	
	
}
