package org.generation;

public class Participante {
	//Definimos atibutos de los objetos
	//No son estáticos
	private String nombre;
	private String apellido;
	private int edad;
	private String curp;
	private int nAmonestacion;
	private String musicaFav;
	private String rfc;
	
	//Definimos atributos de la clase
	//Son estáticos
	static String bootcamp="Generation";
	static String cohorte="ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un método contructor.
	 * El método contructor debe tener el mismo nombre de la clase
	 * Los métodos contructores no tiene retorno, se prescinde de la palabra void
	 */
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante");
		totalPersonas++;
	}
	
	//Los métodos sobrecargados
	Participante(String nombre, String apellido, int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0, 2)+nombre.substring(0,2)+anioNac;
		totalPersonas++;
	}
	
	Participante(String nombre, String apellido, double anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = (int)((int)2022-anioNac);
		this.rfc = apellido.substring(0, 2)+nombre.substring(0,2)+anioNac;
		totalPersonas++;
	}

	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca
		return this.nombre + " " + this.apellido;
	}
	
	static String bootCampCohorte() {
		return bootcamp+" "+cohorte+" con "+totalPersonas+" personas";
	}

	String datosCompletos() {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC "+ this.rfc;
	}

	String datosCompletos(String sobrenombre) {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC "+ this.rfc 
				+ " pero le puedes decir " + sobrenombre ;
	}
	
	void setNAmonestacion(int nAmonestaciones){
		this.nAmonestacion+=nAmonestaciones;
	}
	
	int getNAmonestacion() {
		return this.nAmonestacion;
	}
	
//	void setRfc(String rfc) {
//		this.rfc = rfc;
//	}
	
	String getRfc() {
		return this.rfc;
	}

	


}
