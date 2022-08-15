
public class Participante {

	
	
	//Definimos atributos de los objetos
	
	private String nombre;
	private String apellido;
	private int edad;
	private String rfc;
	private int nAmonestacion;
	private String musicaFav;
	//Definimos atributos de la clase
	private static String bootcamp = "Generation";
	private static String cohorte = "ch14";
	private static int totalPersonas; //Si se modifica en un dato, se modifica en todos.
	
	
	
	/*
	 * Definimos un método constructor.
	 * El método constructor debe tener el mismo nombre de la clase
	 * Los métodos constructores no tiene retorno, se prescinde de la palabra void
	 */
	
	//Método constructor
	Participante(){
		System.out.println("Se crea un nuevo objeto de Participante. ");
		totalPersonas++;
	}
	
	//Método sobrecargado
	// Si se crea un método con parámetros y se desea el método
	// constructor vacío, hay que agregarlo manualmente
	Participante(String nombre, String apellido, int anioNac){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 2022 - anioNac;
		this.rfc = apellido.substring(0,3) + nombre.substring(0,2) +  anioNac;
		totalPersonas++;
	}
	
	String nombreCompleto() {
		//This hace referencia al atributo
		return this.nombre + " "+ apellido;
	}
	
	String datosCompletos() {
		return this.nombre +  " "+
	this.apellido + " edad: " + this.edad +" años y RFC: " +this.rfc; 
	}
	
	static String bootCampCohorte() {
		return bootcamp+" "+cohorte+" con "+totalPersonas+" personas";
	}void setNAmonestacion(int nAmonestaciones){
		this.nAmonestacion+=nAmonestaciones;
	}
	
	int setNAmonestacion(int nAmonestaciones) {
		 this.nAmonestacion;
	}
	
	int getNAmonestacion() {
		return this.nAmonestacion}
	
//	void setRfc(String rfc) {
//		this.rfc = rfc;
//	}
	
	String getRfc() {
		return this.rfc;
	}
}
