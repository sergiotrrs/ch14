package org.generation;

public class Participante {
	//Definimos atributos de los objetos
	private String nombre;
	private String apellido;
	private int edad;
	private String curp;
	private int nAmonestacion;
	private String musicaFav;
	private String rfc; //Con el private los estamos encapsulando para que no se puedan modifica(encapsulamiento)
	//Hay otra manera para encapsular 
	//Una vez encapsulado ya no vas a poder acceder a tus objetos
	
	
	//Definimos atributos de la clase
	
	static String bootCamp = "Generation";
	static String cohorte = "ch14";
	static int totalPersonas ;
	
	/*
	 * Definimos un método constructor.
	 * El método constructor debe tener el mismo nombre de la clase
	 * Los métodos constructores no tiene retorno, se prescinde de la palabra void
	 */
	
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante");
	}	
	
	//Los métodos sobrecargados
	//Si se crea un método con parámetros y se desea el método
	//Constructor vacío, hay que agregarlo manualmente
	Participante(String nombre, String apellido, int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0, 2)+nombre.substring(0, 2)+anioNac;
		totalPersonas++;
	}
	
	
	//Definir un método
	
	String nombreCompleto( ) {
		//this hace referencia al objeto que lo invoca(Atributos que son de objetos)
		return this.nombre+ " "+ this.apellido;
	}
	
	String datosCompletos() {
		return this.nombre +  " "+
	this.apellido + " edad: " + this.edad +" años y RFC: " +this.rfc; 
	}
	
	static String bootCampCohorte() {
		return bootCamp+" "+cohorte+" con "+totalPersonas+" personas";
	}
	
	void setNAmonestacion(int nAmonestaciones) {
		this.nAmonestacion+=nAmonestaciones;
	}
	
	int getNAmonestacion(){
		return this.nAmonestacion;
	} //No necesita parametros el get es solo devolver el valor
	
//	void setRfcString rfc() {
//		this.rfc = rfc;
//	}
//	
	String getRfc () { 
		return this.rfc;
	}
	
	
	
	String datosCompletos(String sobrenombre) {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC "+ this.rfc 
				+ " pero le puedes decir " + sobrenombre ;
	}
	
	
	
	
}
