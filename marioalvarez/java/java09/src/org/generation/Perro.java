package org.generation;

public class Perro {
	//Objeto
	private String nombre;
	private String raza;
	private char tamaño;
	private String apodo;
	
	//Es la de clase
	private static int numPerros;
	
	Perro(String nombre, char tamaño){
		this.nombre=nombre;
		this.apodo=nombre;
		this.tamaño=tamaño;
		numPerros++;
	}
	
	Perro(String nombre, char tamaño, String raza){
		this.nombre=nombre;
		this.apodo=nombre;
		this.tamaño=tamaño;
		this.raza=raza;
		numPerros++;
	}
		
	public void setApodo(String apodo) {
		this.apodo=apodo;
	}
	
	public String  getApodo() {
		return apodo;
	}
	public String  getNombre() {
		return nombre;
	}
	
	static public int  getNumPerros() {
		return numPerros;
	}
	
	
	public void ladrar(String sonido) {
		System.out.println("Perro con el nombre "+nombre+" ladra haciendo un sonido " +sonido+" "+sonido);
	}
	
	public void ladrar() {
		System.out.println(nombre+" está ladrando");
	}
	
	public void correr() {
		System.out.println(nombre+" está corriendo");
	}
	public void comer() {
		System.out.println(nombre+" está comiendo");
	}
	public void dormir() {
		System.out.println(nombre+" está durmiendo");
	}
	
}
