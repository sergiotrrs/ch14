package org.generation.cohorte;

import org.generation.mascota.Perrito;

public class Mentor {

	private String nombre;
	private String telefono;
	
	public Mentor(String nombre, String telefono) {
		this.nombre = nombre;
		this.telefono = telefono;
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

	public void setEdad(String telefono) {
		this.telefono = telefono;
	}

	
	
	public String datos() {
		return this.nombre + " , " + this.telefono; 
		}
				
	}
	
	

