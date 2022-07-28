package org.generation;

public class Futbolistas {
	
	private String nombre;
	private String apellido;
	private String equipo;
	private int dorsal;
	private String apodo;
	private int goles;
	private boolean champions;
	
	
	Futbolistas(String nombre, String apellido, String equipo){
		this.nombre=nombre;
		this.apellido = apellido;
		this.equipo = equipo;
		
	}
	
	Futbolistas(String apodo, int dorsal, boolean champions){
		this.apodo = apodo;
		this.dorsal = dorsal;
		this.champions = champions;
		
	}
	
	String datosAlbum() {
		return this.nombre+ " " +
	this.apellido +" que juega en el "+ this.equipo;
	}
	String premium () {
		return this.apodo+ " que usaba el número" +
				this.dorsal +". ¿Ganó la champions?:  "+ this.champions;
	}
	
	void setGoles(int goles){
		this.goles += goles;
	}

	int getGoles() {
		return this.goles;
	}

}
