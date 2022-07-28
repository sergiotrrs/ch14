package org.generation;

public class Participante {
	//Definimos atributos de los objetos
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int nAmonestacion;
	private String musicFav;
	//Definimos atributos de la clase
	static String bootCamp="Generation";
	static String cohorte="ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un método constructor.
	 * El método constructoe debe tener el mismo nombre de la clase
	 * Ños métodos constructores no tiene retorno, se prescinde de la palabra void
	 * 
	 */
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante");
		totalPersonas++;
	}
	
	
	/**
	 * Los métodos sobrecargados
	 * Si se crea un método con parámetros y se desea el método
	 * constructor vacío, hay que agregarlo manualmente.
	 * @param nombre del participante
	 * @param apellido del participante
	 * @param año de nacimiento 
	 */
	Participante(String nombre, String apellido, int anioNac){
		this.nombre=nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0,2)+nombre.substring(0,2)+anioNac;
		totalPersonas++;
	}
	
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca
		return this.nombre + " " + this.apellido;
	}
	
	String datosCompletos() {
		return this.nombre+ " " +
	this.apellido +" edad "+ this.edad+ "años y RFC "+ this.rfc;
	}
	
	
	String datosCompletos(String sobrenombre) {
		return this.nombre+ " " +
	this.apellido +" edad "+ this.edad+ "años y RFC "+ this.rfc+
	" pero le puedes decir " + sobrenombre;
	}
	
	static String bootCampCohorte() {
		return bootCamp+" "+cohorte+" con "+totalPersonas+" personas";
	}
	
	void setNAmonestacion(int nAmonestaciones){
		this.nAmonestacion += nAmonestaciones;
	}

	int getNAmonestacion() {
		return this.nAmonestacion;
	}
	
//	void setRfc (String rfc) {
//		this.rfc = rfc;
//	}
	
	String getRfc () {
		return this.rfc;
	}
	
	int calcularEdad( int anioNacimiento) {
		return 25;
	}
	int calcularEdad( int anio) {
		return 25;
	
}
