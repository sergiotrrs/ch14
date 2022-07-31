package org.generation.paises;

public class Paises {
	
	private String nombre;
	private String gentilicio;
	private int poblacion;
	public Paises(String nombre, String gentilicio, int poblacion) {
		super();
		this.nombre = nombre;
		this.gentilicio = gentilicio;
		this.poblacion = poblacion;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getGentilicio() {
		return gentilicio;
	}
	public void setGenticlicio(String gentilicio) {
		this.gentilicio = gentilicio;
	}
	public int getPoblacion() {
		return poblacion;
	}
	public void setPoblacion(int poblacion) {
		this.poblacion = poblacion;
	}
	
	public String datos() {
		return "A los de " + this.nombre + "les dicen " + this.gentilicio
				+ ". Tienen una población de " + this.poblacion;
	}
}
