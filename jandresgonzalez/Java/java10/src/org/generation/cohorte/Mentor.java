package org.generation.cohorte;

public class Mentor {
	private String nombre;
	private String numero;
	private String mascota;
	/**
	 * @param nombre
	 * @param numero
	 */
	public Mentor(String nombre, String numero, String mascota) {
		this.nombre = nombre;
		this.numero = numero;
		this.mascota = mascota;
	}
	public String getMascota() {
		return mascota;
	}
	public void setMascota(String mascota) {
		this.mascota = mascota;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}


	
	
	

}
