package org.generation;

public class Participante {
	//Definimos atributos de los objetos
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int nAmonestacion;
	private String musicaFav;
	//Podemos definir atributos de la clase
	static String bootCamp = "Generation";
	static String cohorte ="ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un método constructor.
	 * El método constructor debe tener  el mismo nombre de la clase
	 * Los métodos constructores no tienen retorno, se prescinde de la palabra void
	 * @return
	 */
	
	//Constructor default o constructor vacío
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante:");
		totalPersonas++;
		
	}
	
	//Los métodos sobrecargados
	//Si se crea un método con parametros y se desea el meotodo constructor vacío,
	// hay que agregarlo manualmente.
	
	/**
	 * 
	 * @param nombre
	 * @param apellido
	 * @param anioNac
	 */
	Participante(String nombre, String apellido, int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022 - anioNac;
		this.rfc = apellido.substring(0,2) + nombre.substring(0,2) + anioNac;
		totalPersonas++;
	}
	//Definimos un método para el Objetoooo :) 
	String nombreCompleto() {
		
		return this.nombre + " " + this.apellido;
	}
	
	String datosCompletos() {
		return this.nombre + " " + this.apellido + " edad " + this.edad+"años y RFC " + this.rfc;
				
	}
	//Método sobrecargado.
	String datosCompletos(String sobrenombre) {
		return this.nombre + " " + this.apellido + " edad " + this.edad+"años y RFC " + this.rfc
				+ " le puedes decir " + sobrenombre;
				
	}
	
	
	
	
	static String bootCampCohorte() {
		return bootCamp+" "+cohorte+" con "+totalPersonas+ " personas";
	}
	
	void setNAmonestacion(int nAmonestaciones){
		this.nAmonestacion += nAmonestaciones;
		
	}
	
	int getNAmonestacion() {
		return this.nAmonestacion;
	}
	
	
	String getRfc() {
		return this.rfc;
	}
	
	

}
