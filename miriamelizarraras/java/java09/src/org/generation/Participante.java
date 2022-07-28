package org.generation;

public class Participante {
	//Definimos atributos de los objetos-No son estáticos
	String nombre;
	String apellido;
	int edad;
	String rfc;
	int numAmonestacion;
	String musicaFav;
	
	//Definimos atributos de la clase-Son estáticos
	//Se le agrega static porque es clase static
	static String bootcamp= "Generation";
	static String cohorte= "ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un método constructor.
	 * El método constructor debe tener el mismo nombre de la clase
	 * Los métodos contructores no tienen retorno, se prescinde de la palabra void.
	 * 
	 * 
	 * 
	 */
	Participante(){
		System.out.println("Se crea un nuevo objeto de participante");
		totalPersonas++;
	}
	
	//Los métodos sobrecargados
	//Si se crea un método con parámetros y se desea el método constructor...
	//hay que agregarlo manualmente
	Participante(String nombre, String apellido, int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anioNac;
		this.rfc = apellido.substring(0,2) + nombre.substring(0,2)+ anioNac;
		totalPersonas++;
	}
	
	String datosCompletos() {
		return this.nombre + " " + 
				this.apellido + this.edad + "años y RFC" + this.rfc;
	}
	
	String datosCompletos(String sobrenombre) {
		return this.nombre + " " + 
				this.apellido + this.edad + "años y RFC" + this.rfc;
	}
	
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca y SOLO TIENE ALCANCE A LOS OBJETOS 
		return this.nombre + " " + this.apellido;
		
	}
	
	
	
	
	static String bootCampCohorte() {
		return bootcamp +" "+cohorte+" con "+totalPersonas+" personas";
	}

	void setAmonestacion(int nAmonestaciones) {
		this.numAmonestacion+=nAmonestaciones;
	}
	
//	int getAnonestacion() {
//		return this.nAmonestacion;
//	}
//	
	void setRfc(String rfc) {
		this.rfc = rfc;
	}
	
//	static String bootCampCohorte() {
//		return bootCamp + " " + coorte + "con " + totalPersonas + "personas";
//	}
//	
//	
	/**
	 * Crear una clase (tema abierto)
	 * por lo menos 3 métodos
	 * por lo menos 1 atributo de clase  
	 * implementar 2 contructores sobrecargados 
	 * implementar setters and getters de los atributos 
	 * realizar pruebas de la clase 
	 * 
	 */
	
	
	
	 
}
