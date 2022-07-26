package org.generation.mascota;

public class Perrito {
	byte edad;
	String nombre;
	String raza;
	short size;
	
	public Perrito (byte edad, String nombre, String raza, short size) {
		this.edad = edad;
		this.nombre = nombre;
		this.raza = raza;
		this.size = size;
		System.out.println("Un perrito creado con los siguientes anios: " + this.edad);
	}
	
	public void setEdad(byte edad) {
		this.edad = edad;
	}
	
	public byte getEdad() {
		return this.edad;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
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
	
	public void setSize (short tamanio) {
		this.size = tamanio;
	}
	
	public short getSize() {
		return this.size;
	}
	
	public String datos() {
		return this.nombre + " con " + this.edad + " y de raza " + this.raza +
				" mide " + this.size + " cm";
	}

}
