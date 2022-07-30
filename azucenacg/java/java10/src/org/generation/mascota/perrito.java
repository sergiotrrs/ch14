package org.generation.mascota;

public class perrito {
	byte edad;
	String nombre;
	String raza;
	short size;
	
	public perrito (byte edad, String nombre, String raza, short size){
		this.edad=edad;
		this.nombre=nombre;
		this.raza=raza;
		this.size=size;
	}
	
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
	
	void setRaza(String raza) {
		this.raza=raza;
	}
	
	String getRaza() {
		return this.raza;
	}
	
	void setSize(short size) {
		this.size=size;
	}
	
	short getSize () {
		return this.size;
	}
	
	public String datos() {
		return this.nombre + " tiene " + this.edad + " años, es de raza " + this.raza;
	}

	

	
}
