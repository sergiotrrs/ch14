package org.generation.cohorte;
import org.generation.Perrito;

public class Participantes {
	String nombre;
	private int edad;
	Perrito mascota;
	
	//Constructor
	public Participantes(String nombre, int edad, Perrito mascota) {
		this.nombre = nombre;
		this.edad = edad;
		this.mascota = mascota;
	}
	public Participantes(String nombre, int edad, Perrito mascota, Mentor mentor) {
		this.nombre = nombre;
		this.edad = edad;
		this.mascota = mascota;
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
		return this.nombre+", "+this.edad+". Tiene de mascota a "+this.mascota.getNombre();
	}

	
}
