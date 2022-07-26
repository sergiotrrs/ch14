package com.cohorte;

import org.generation.mascota.Perrito;

public class Participantes {
	String nombre;
	int edad;
	Perrito mascota;
	////////////////////////////
	
	
	
	
	
	public Participantes(String nombre, int edad, Perrito mascota) {
		this.nombre = nombre;
		this.edad  =edad;
		this.mascota = mascota;
	}
	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}
	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	/**
	 * @return the edad
	 */
	public int getEdad() {
		return edad;
	}
	/**
	 * @param edad the edad to set
	 */
	public void setEdad(int edad) {
		this.edad = edad;
	}
	/**
	 * @return the mascota
	 */
	public Perrito getMascota() {
		return mascota;
	}
	/**
	 * @param mascota the mascota to set
	 */
	public void setMascota(Perrito mascota) {
		this.mascota = mascota;
	}
	
	public String datos() {
		return this.nombre + " ," + this.edad
				+" . Tiene de mascota a " + this.mascota.getNombre();
	}
	
	

}
