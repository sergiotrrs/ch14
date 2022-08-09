package org.generation.mascota;

public class Michis {
	//1.-Atributos
	private byte edad;
	private String nombre;
	private String raza;
	private short size;
	rpivate int vidas;
	
	
	//2.-Creamos el constructor, se pone public para que tenga aceso todos los otro paquetes
	public Michis (byte edad, String nombre, String raza, short size, int vidas){
		this.edad= edad;
		this.nombre= nombre;
		this.raza= raza;
		this.size=size;
		this.vidas=vidas;
	}

	//3.- set
	
	
	public void setEdad(byte edad) {
		this.edad=edad;
	}

	public byte getEdad() {
		return this.edad;
	}
	
	public int getVidas() {
		return vidas;
	}

	public void setVidas(int vidas) {
		this.vidas = vidas;
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
