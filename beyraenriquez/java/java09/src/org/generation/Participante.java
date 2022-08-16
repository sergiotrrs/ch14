package org.generation;

public class Participante {
	//Definimos atributos de los objetos (solo pertenecen al objeto no a la clase)
	String nombre;
	String apellido;
	int edad;
	String rfc;
	int nAmonestaciones;
	String musicaFav;
	//Definimos atributos de la clase (todos los objetos que saque a partir de ese molde compartirán el mismo atributo)
	static String bootCamp = "Generation";
	static String cohorte= "ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un método constructor.
	 * El método constructor debe tener el mismo nombre de la clase
	 * Los métodos constructores no tienen retorno, se presciden de la palabra void
	 */
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante");
	}
	
	/**
	 * Los métodos sobrecargados
	 * Si se crea un método con parámetros y se desea el método
	 * constructor vacío, hay que agregarlo manualmente
	 * @param nombre del participante
	 * @param apellido
	 * @param anioNac
	 */
	
	Participante(String nombre, String apellido, int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0, 2)+nombre.substring(0, 2)+anioNac;
		totalPersonas++;
	}
	
	Participante(String nombre, String apellido, double anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = (int) ((int)2022-anioNac);
		this.rfc = apellido.substring(0, 2)+nombre.substring(0, 2)+anioNac;
		totalPersonas++;
	}
	
	
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca
		return this.nombre+ " " + this.apellido;
	}
	
	String datosCompletos() {
		return this.nombre+ " " + 
				this.apellido + " edad "+ this.edad+ " años y RFC "+ this.rfc;
	}
	
	static String bootCampCohorte() {
		return bootCamp+ " "+cohorte+" con "+totalPersonas+ " personas";
	}
	
	//Completar sesión 40
	
}
