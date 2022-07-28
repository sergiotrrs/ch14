package org.generation;

public class Participante {
	//Definimos atributos de objetos
	String nombre;
	String apellido; 
	int edad;
	String RFC;
	byte amonestaciones;
	String musicaFAv;
	
	/**
	 * Definimos el método constructor
	 * Debe llevar mismo nombre que clase
	 * No tiene retorno
	 * Se prescinde de void
	 */
	
	Participante(){
		System.out.println("Se crea un nuevo obj participante");
		
		//Contador de objetos Participante
		totalPersonas++;
	}
	
	/**
	 * Métodos sobrecargados (pero no deben ser idénticos)
	 * @param nombre del participante
	 * @param apellido del participante
	 * @param anioNac : Año del nacimiento
	 */
	Participante(String nombre, String apellido, int anioNac){
		//this.nombre : el de la clase = nombre : el del método
		this.nombre=nombre;
		this.apellido = apellido; 
		this.edad = 2022-anioNac; 
		this.RFC=apellido.substring(0, 2)+nombre.substring(0, 2)+anioNac;
		
		//Contador de objetos Participante
		totalPersonas++;
	}
	
	//Si se agrega el método constructor con parámetros, ya no se puede usar el constructor vacío a menos que se agregue manualmente
	
	//Definimos atributos de clase
	static String bootCamp = "Generation";
	static String cohorte = "Ch14";
	static byte totalPersonas;
	
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca (objeto)
		return this.nombre + " " + this.apellido;
	}
	
	static String bootCampCohorte() {
		return bootCamp+" "+cohorte+" "+"con total de " + totalPersonas +" personas";
	}
	
	String datosCompletos() {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ "años y RFC "+ this.RFC;
	}


}
