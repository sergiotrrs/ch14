package org.generation;

public class Equipo {
	// Atributos de los objetos
	private String nombre;
	private String posicion;
	private int edad;
	private int estatura;

// Definimos atributos de la clase
	static int plantilla;

	Equipo() {
		System.out.println("Se inicia constructor vacio");
	}

	Equipo(String nombre, String posicion, int edad, int estatura) {
		this.nombre = nombre;
		this.posicion = posicion;
		this.edad = edad;
		this.estatura = estatura;
		plantilla++;
	}

	Equipo(String nombre, String posicion, int edad) {
		this.nombre = nombre;
		this.posicion = posicion;
		this.edad = edad;
		plantilla++;
	}

	String jugador() {
		return this.nombre + " mide " + this.estatura + " centimetros, juega de " + 
	this.posicion + " y tiene " + this.edad + " años";
	}
//	
//	String nombreCompleto() {
//		// This hace referencia al objeto que lo invoca
//		return this.nombre + " " + this.apellido;

	int getEdad() {
		return this.edad;
	}

	int getEstatura() {
		return this.estatura;
	}

	String getNombre() {
		return this.nombre;
	}

	String getPosicion() {
		return posicion;
	}

}
