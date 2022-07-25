package org.generation;

public class Participantes {
	//Definimos atributos de los objetos
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int nAmonestacion;
	String musicaFav;
	//Definimoa atributos de la clase
	static String bootCamp="Generation";
	static String Cohorte="ch14";
	static int totalPersonas;
	
	/*
	 * Definimos un método constructor.
	 * El método constructor debe tener el mismo nombre de la clase
	 * Los metodos constructores no pueden tener un retorno, se presinde de la pablabra void
	 */
	
	//Constructor por default y no es necesario hacerlo
	//Tiene que tener el mismo  nombre de mi clase
	Participantes(){
		System.out.println("Se crea un nuevo objeto de Participante");
		totalPersonas++;
	}
	//Los metodos sobrecargados
	//Si se crea un método con parametros y se desea el metodo
	//constructor vacio, ha que agregarlo manualmente
	/*
	 * @param nombre
	 * @param apellido
	 * @param anioNacimiento
	 * 
	 * */
	Participantes(String nombre,String apellido, int anioNac){
		this.nombre=nombre;
		this.apellido=apellido;
		this.edad=2022-anioNac;
		this.rfc= apellido.substring(0,2)+nombre.substring(0,2)+edad;
		totalPersonas++;
		
	}
	
	String datosCompletos() {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC "+ this.rfc;
	}

	String datosCompletos(String sobrenombre) {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC "+ this.rfc + " Pero le puedes decir "
				+ sobrenombre;
	}
	
	
	String nombreCompleto() {
		//this hace referencia la objeto que lo invoca
		return this.nombre + " " + this.apellido;
	}
	
	static String bootCampCohorte() {
		return bootCamp+ " "+ Cohorte+ " con "+ totalPersonas+" personas ";
	}
	
	void setNAmonestacion(int nAmonestaciones) {
		this.nAmonestacion+=nAmonestaciones;
		
	}
	
	int getNAmonestacion() {
		return this.nAmonestacion;
	}
	
	String getRFC() {
		return this.rfc;
	}	
	
	
}
