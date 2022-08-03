package org.particpante;

public class Participante {

	//Definciones atributos de los objetos
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int nAmonestacion;
	private String musicaFay;
	
	//Definimos atributos de la clse
	static String bootCamp ="Generation";
	static String cohorte ="ch14";
	static int totalPersonas;
	
	/**
	 * Definimos un metodo constructor
	 * El metodo constructor debe tner el mismo nombre de la clase
	 * Los metodos constructores no tiene retorno, se precide de la palabra void
	 * 
	 * 1.- El mismo nombre del constructor
	 * 2.- Los palametro debes de ser diferentes tipos palametros
	 * 
	 * @return
	 */
	//Metodo constructor vacio
	Participante(){
		System.out.println("Se crea un nuevo obejto de Participantes");
		totalPersonas++;
	}
	
	//Metodos sobrecargados
	//Si se crea un mmetodo con parametros y se dea el metopdo 
	//constructior vacio,  hay que agregarlo manualmente
	Participante (String nombre, String apellido, int anioNac){
		//this.nombre objeto nombre es de parameroo
		this.nombre = nombre;
		this.apellido=apellido;
		this.edad= 2022-anioNac;
		this.rfc = apellido.substring(0,2)+nombre.substring(0, 2)+anioNac;
		totalPersonas++;
	}
	
	
	
	//Definimos metodos
	 String nombreCompleto() {
		 //this hace refencia al objeto que lo esta invocando
		 return this.nombre + "" +this.apellido;
	 }
	
	 String datosCompletos() {
		 //this hace refencia al objeto que lo esta invocando
		 return (this.nombre + "" +this.apellido+"edad"+this.edad+"años y RFC " + this.rfc);
	 }
	 
	 
	 String datosCompletos(String sobrenombre) {
		 //this hace refencia al objeto que lo esta invocando
		 return (this.nombre + "" +this.apellido+"edad"+this.edad+"años y RFC " + this.rfc
				 +" pero le puede decir" +sobrenombre);
	 }
	
	
	 
	
	 static String bootCampCohorte() {
		 return bootCamp+" "+cohorte+"con "+totalPersonas+"personas";
	 }
	
	 
	 void setNAmonestacion(int nAmonestaciones){
			this.nAmonestacion+=nAmonestaciones;
		}
		
		int getNAmonestacion() {
			return this.nAmonestacion;
		}
		
//		void setRfc(String rfc) {
//			this.rfc = rfc;
//		}
		
		String getRfc() {
			return this.rfc;
		}
		
		//Crear una clase de (tema abierto)
//Implementar por lo menos 3 metodos
		//Por lo menos 3 atrbutos de clase
		//por lo menos 1 atributo de clase
		//Implementar 2 constructores sobrecargados
		//Implementar setters and getter de los atributos
		//realizar pruebas de la clase
		
		int calcularEdad(int anioNacimiento) {
			return 25;
		}
		
		
		int calcularEdad(byte anioNacimiento, String ciudad) {
			return 25;
		}
		
	//El orden si importa 
		int calcularEdad(String ciudad,byte anioNacimiento) {
			return 25;
		}
		
		
		
		
		
		
	
}
