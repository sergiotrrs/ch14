package org.generation;

public class Participante {
	//Definimos atributos de los objetos-No son estáticos
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int numAmonestacion;
	private String musicaFav;
	
	//Definimos atributos de la clase-Son estáticos
	//Se le agrega static porque es clase static
	static String bootcamp= "Generation";
	static String cohorte= "ch14";
	static int totalPersonas;
	
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca y SOLO TIENE ALCANCE A LOS OBJETOS 
		return this.nombre + " " + this.apellido;
		
	}
	
	String datosCompletos() {
		return this.nombre + " " + this.apellido+" edad " + this.edad+ " años y RFC "+this.rfc;
	}

	String datosCompletos(String sobrenombre) {
		return this.nombre + " " + this.apellido+" edad " + this.edad+ " años y RFC "+this.rfc
		+" pero le puedes decir: "+ sobrenombre;
	}
	static String bootCampCohorte() {
		return bootcamp + " " + cohorte + "con " + totalPersonas + "personas";
	}
	
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
	//Si se crea un método con parámetros y se desea el método
	//constructor vacío hay que agregarlo manualmente.
	
	/**
	 * 
	 * @param nombre del participante
	 * @param apellido del participante
	 * @param año de NAcimiento del participante.
	 */
	Participante(String nombre, String apellido, int anioNac){
		//Esto queda ambiguo -> nombre = nombre
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0,2)+ nombre.substring(0,2)+ anioNac;
		totalPersonas++;
	}
	
	void setNAmonestacion (int numAmonestaciones) {
		this.numAmonestacion+=numAmonestaciones;
	}
	int getNAmonestacion() {
		return this.numAmonestacion;
	}
	
	String getRfc() {
		return this.rfc;
		
	
	}
	
}
