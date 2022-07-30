package org.generation.cohorte;

public class Mentor {
	

String nombre;
String telefono;
private int edad;
	
	public Mentor(String nombre, String telefono, int edad) {
		this.nombre = nombre;
		this.telefono = telefono;
		this.edad=edad;
	}	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

}
