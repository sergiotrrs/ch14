package org.generation;

public class Participante {
	
	//Non-static fields (objetos)
	//Access modifiers. Con private, se encapsula para la clase
	//Con default se encapsula para clase y package
	//Con protected se encapsula hasta subclase
	//Con public se accede de cualquier lado
	private String nombre;
	private String apellido;
	private int edad;
	private String llaveGen;
	private int nAmonestaciones;
	private String musicaFav;
	
	//Static fields (classes)
	static String bootCamp = "Generation: ";
	static String cohorte = "poderosa ch14";
	static int totalPersonas;
	
	/**
	 * Dfinimos un método constructor
	 * El método constructor debe tener el mismo nombre de la clase
	 * Los métodos constructores no tienen retorno, se prescinde de la palabra void
	 * 
	 * 
	 * */
	
	Participante() {
		System.out.println("Se crea nuevo objeto de participante");
		totalPersonas++;
	}
	
	
	//Métodos sobrecargados
	//Es un método sobrecargado cuando es el mismo nombre
	//de otro método
	//Se pueden tener tantos métodos sobrecargados como se quieran
	//pero los tipos de datos o firma deben ser distintos
	//Si se crea un método con parámentros
	//y hay que agregar un método vacío, 
	//se añade todo manualmente
	//Esto significa que si el método constructor tiene parámetros
	//y se instancia la clase con constructor, dará error
	/**
	 * 
	 * @param nombre
	 * @param apellido
	 * @param anio
	 */
	Participante(String nombre, String apellido, int anio) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022-anio;
		this.llaveGen = apellido.substring(0,3) + nombre.substring(0, 2) + anio;
		totalPersonas++;
		System.out.println(nombre + apellido + edad + llaveGen);

	}
	
	
	String fullName() {
		//this hace referencia al objeto que lo invoca
		return this.nombre + " " + this.apellido ;
	}
	
	String datosCompletos() {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC:  "+ this.llaveGen;
	}
	String datosCompletos(String sobrenombre) {
		return this.nombre+ " " +
				this.apellido +" edad "+ this.edad+ " años y RFC:  "+ this.llaveGen +
				" y le puedes decir... " + sobrenombre;
	}

	
	static String bootcampCohorte() {
		return bootCamp + " " + cohorte + " con " + totalPersonas + " personas.";
	}
	
	
	void setNAmonestacion(int nAmonestaciones) {
		this.nAmonestaciones += nAmonestaciones;
	}
	
	int getNAmonestacion() {
		return this.nAmonestaciones;
				
	}
//	void setRFC(String newRFC) {
//		this.llaveGen = newRFC;
//	}
	
	String getRFC() {
		return this.llaveGen;
	}
	
	
	
//	static void ENESimaClase() {
//		System.out.println("Armé una clase que va en la ENES, cuida perritxs y es vegana");
//	}
	
	

}
