package org.generation;

public class Participante {

	//Definimos atributos de los objetos
	
	private String nombre;
	private String apellido;
	private int edad;
	private String curp;
	private int amonestaciones;
	private String musicaFav;
	
	//Definimos atributos de la clase
	
	static String bootCamp="Generation";
	static String cohorte="ch14";
	static int totalPersonas;

	
	//El método constructor debe tener el mismo nombre de la clase
	// No tienen retorno, por lo tanto se precinde de la plabra void
	Participante(){
		System.out.println("Se creo participante");
		totalPersonas++;
	}
	
	Participante(String nombre, String apellido, int anioNac){
		this.nombre=nombre;
		this.apellido=apellido;
		this.edad=2022-anioNac;
		this.curp=apellido.substring(0,3)+nombre.substring(0,2)+anioNac;
		totalPersonas++;
		
	}
	
	
	
	//Método
	String nombreCompleto() {
		return this.nombre+" "+this.apellido;
	}
	
	
	//Métodos dobrecargados
	String datosCompletos() {
		return this.nombre+" "+this.apellido+ this.edad;
	}
	String datosCompletos(String sobrenombre) {
		return this.nombre+" "+this.apellido+" "+ this.edad+"  Pero le puedes decir"+sobrenombre;
	}
	
	static String bootCampCohorte() {
		return bootCamp+" "+cohorte+" con "+totalPersonas+" personas";
	}
	
	void setAmonestacion(int numAmonestaciones) {
		this.amonestaciones=numAmonestaciones;
	}
	
	int getAmonestacion() {
		return amonestaciones;
	}
	

	String getCurp() {
		return curp;
	}
	
}
