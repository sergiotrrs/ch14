package org.generation;

public class Participante {
	// Definimos atributos de los objetos
	String nombre;
	String apellido;
	int edad;
	String rfc;
	int nAmonestacion;
	String musicaFav;
	// Definimos atributos de la clase
	static String bootCamp = "Generetion";
	static String cohorte = "ch14";
	static int totalPersonas;

	// Definir un metodo constructor
	// El metodo constructor debe tener el mismo nombre de la clase
	// Los metodos constructores no tienen retorno, se precinde de la palabra void

	Participante() {
		System.out.println("Se crea un nuevo participante");
		totalPersonas++;
	}

	// Los metodos sobrecargados
	// Si se crea un metodo con parametros y se desea el metodo constructor vacio
	// hay que agregarlo manualmente
	/**
	 * 
	 * @param nombre Nombre del participante
	 * @param apellido Apellido del participante
	 * @param anioNac amio de nacimiento del participante
	 */
	Participante(String nombre, String apellido, int anioNac) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022 - anioNac;
		this.rfc = apellido.substring(0, 2) + nombre.substring(0, 2) + anioNac;
		totalPersonas++;
	}

	String nombreCompleto() {
		// This hace referencia al objeto que lo invoca
		return this.nombre + " " + this.apellido;

	}

	String datosCompletos() {
		return this.nombre + " " + this.apellido + " edad " + this.edad + "años y RFC " + this.rfc;
	}

	static String bootCampCohorte() {
		return bootCamp + " " + cohorte + " con " + totalPersonas+" personas";
	}

}
