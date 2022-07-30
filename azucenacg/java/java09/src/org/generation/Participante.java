package org.generation;

/**
 * Atributos de clase: estáticos
 * Atributos de objetos: NO estáticos 
 *
 */
public class Participante {

	//Definimos atributos de los objetos 
	String nombre;
	String apellido;
	int edad;
	String rfc;
	int nAmonestacion;
	String musicafav;
	
	//Definimos atributos de clase
	static String bootcamp="Generation";
	static String cohorte="ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un método construtor 
	 * El método constructor debe tener el mismo nombre 
	 * de la clase
	 * Los métodos constructores no tienen retorno
	 * se usa la palabra void
	 */
	//constructor default o vacío
	//constructor mismo nombre de la clase 
	//los sobrecargados son útiles porque se pueden usar 
	//para diferentes fines, 
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante");
		totalPersonas++;
	}

	//Los métodos sobrecargados
	//se puede tener un método con el mismo nombre
	
	//Contructor no necesitan el VOID
	//los metodos constructores sobrecargados 
	Participante(String nombre, String apellido, int anioNac){
		this.nombre=nombre;
		this.apellido=apellido;
		this.edad=2022-anioNac;
		this.rfc=apellido.substring(0,2)+nombre.substring(0,2)+anioNac;
		totalPersonas++;	
		
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


	
	//Estos son métodos NO SON CONSTRUCTORES
	//los metodos que no tienen return, llevan void
	String nombreCompleto() {
		//this hace referencia al objeto que lo invoca y SOLO TIENE ALCANCE A LOS OBJETOS 
		return this.nombre + " " + this.apellido;
		
	}
	
	static String bootCampCohorte() {
		return bootcamp + " " + cohorte + "con " + totalPersonas + "personas";
	}
	
	void setNAmonestacion(int nAmonestaciones) {
		this.nAmonestacion+=nAmonestaciones;
	}
	
	int getNAmonestacion() {
		return this.nAmonestacion;
	}
	
	
	
	
}
