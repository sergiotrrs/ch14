package org.generation.relevancia;

public class Famosos {
	
	private String nombre;
	private String ocupacion;
	private int edad;
	public Famosos(String nombre, String ocupacion, int edad) {
		super();
		this.nombre = nombre;
		this.ocupacion = ocupacion;
		this.edad = edad;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getOcupacion() {
		return ocupacion;
	}
	public void setOcupacion(String ocupacion) {
		this.ocupacion = ocupacion;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	

}
