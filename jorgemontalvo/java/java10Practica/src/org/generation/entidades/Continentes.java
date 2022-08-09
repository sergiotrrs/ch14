package org.generation.entidades;

public class Continentes {

	String nombre;
	int nPaises;
	public Continentes (String nombre, int nPaises) {
		
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
	
public String datos() { 
	return "en el continente " + this.nombre + " el cual tiene " + this.nPaises + " paises.";
		
	}
	
}
