package org.generation;

public class Participante {
	//Definimos atributos de los objetoa:
	//Solo pertenecen al objeto
	
	//Encapsular para proteger los atributos
	//No se pueden acceder si no es por medio de las capas de 
	// getters y setters
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int nAmonestacion;
	private String musicaFav;
	
	//Definimos atributos de la clase:
	/*
	 * Son atibutos que aplican a todos los objetos que utilizan la clase
	 * 
	 */
	
	static String bootCamp = "Generation";
	static String cohorte = "ch14";
	static int totalPersonas;
	
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca
		return this.nombre+" "+this.apellido;
	}
	
	String datosCompleto() {
		return this.nombre+" "+this.apellido+" edad "+this.edad+" años y RFC "+this.rfc;
	}
	String datosCompleto( String sobrenombre) {
		return this.nombre+" "+this.apellido+" edad "+this.edad+" años y RFC "+this.rfc+ " pero le puedes decir "+sobrenombre;
	}
	
	//Método de clase debe tener definido el tipo de dato 
	static String bootCampCohorte(){
		return bootCamp + " "+cohorte+" con "+totalPersonas+" personas";
		}
	
	/**
	 * Definimos un método contructor.
	 * El método constructor debeb tener el mismo nombre de la Clase
	 * Los métodos contructores NO tienen retorno, por lo que se prescidnde de la 
	 * palabra void
	 * Constructor por default
	 * 	 */
	
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante");
		totalPersonas++;
		
	}
	
	
	/**
	 * Métodos sobrecargados
	 * Es un constructor (método) que tiene el mismo nombre a otro método pero con diferentes tipos de parámetros de entrada al otro constructor
	 * ej. diferentes tipos de datos
	 * 
	 * Los métodos sobrecargados
	 *	Si se crea un método con parámetros y se desea el método
	 *constructor vacío, hay que agregarlo manualmente.
	 *
	 * @param nombre del participante
	 * @param apellido
	 * @param anioNac
	 * 
	 * Si se le cambia el nombre ya no es contructor y se debe definir el retorno o tipo void
	 * 
	 */
	Participante(String nombre, String apellido,int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0,2)+nombre.substring(0,2)+anioNac;
		totalPersonas++;
	}
	
	
	
	void setNAmonestacion(int nAmonestaciones){
		this.nAmonestacion += nAmonestaciones;
	}
	int getNAmonestacion(int nAmonestaciones){
		return this.nAmonestacion;
	}
//	void setRfc(String rfc) {
//		this.rfc = rfc;
//	} El rfc no debería poderse modificar, ese se crea de forma automática
	
	//Con el rfc 
	String getRfc() {
		return this.rfc;
	}
	
	int calcularEdad(int anioNac) {
		return 25;
	}
	int calcularEdad(int anioNac, String ciudad) {
		return 25;
	}
	
	
//Al cambiar el orden de los parámetros pero también funciona
//Aunque sean los mismo parámetros pero con otro orden se crea otro método sobrecargado
	int calcularEdad(String ciudad, int anioNac) { 
		return 25;
	}
	float calcularEdad(String ciudad, byte anioNac) { 
		return 25;
	}
	
	
	
	
}



	


