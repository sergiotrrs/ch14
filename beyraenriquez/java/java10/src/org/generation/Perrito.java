package org.generation;

public class Perrito {
	private byte edad;
	private String nombre;
	private String raza;
	private short size;
	
	public Perrito (byte edad, String name, String raza, short size){
	this.edad = edad;
	this.nombre = name;
	this.raza = raza;
	this.size = size;
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
	
	public void setSize(short size) {
		this.size = size;
	}
	
	public short getSize() {
		return this.size;
	}
	
	public String datos() {
		return this.nombre + " tiene " + this.edad + " años, es de raza " + this.raza + " y mide " + this.size +" cm.";
	}
}
	
