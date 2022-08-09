package org.generation.mascota;

public class Perrito {
	//1.-Atributos
	private byte edad;
	private String nombre;
	private String raza;
	private short size;
	
	
	//2.-Creamos el constructor, se pone public para que tenga aceso todos los otro paquetes
	public Perrito (byte edad, String nombre, String raza, short size){
		this.edad= edad;
		this.nombre= nombre;
		this.raza= raza;
		this.size=size;
	}

	//3.- set
	public void setEdad(byte edad) {
		this.edad=edad;
	}
	
	public byte getEdad() {
		return this.edad;
	}
	
	public void setNombre(String nombre) {
		this.nombre=nombre;
	}
	
	public String getNombre() {
		return this.nombre;
	}
	
	public void setRaza(String raza) {
		this.raza = raza;
	}
	
	public String getRaza() {
		return this.raza;
	}
	
	public void setSize(short size) {
		this.size= size;
	}
	
	public Short getSize() {
		return this.size;
	}
	
	public String datos() {
		return this.nombre + " tiene " + this.edad + " es de raza " + this.raza+ " y mide "+ this.size+" cm";
	}

	
	
	
	
	
	
	
	
	
}
