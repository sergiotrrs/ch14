package org.generation.continente;

public class Continente {

	String nombre;
	int nPaises;
	public Continente(String nombre, int nPaises) {
		super();
		this.nombre = nombre;
		this.nPaises = nPaises;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getnPaises() {
		return nPaises;
	}
	public void setnPaises(int nPaises) {
		this.nPaises = nPaises;
	}
	
	
}
