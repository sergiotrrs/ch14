package org.generation;

public class Michi {
	private byte edad;
	private String nombre;
	private String raza;
	private short size;
	private String vidas;

	public Michi(byte edad, String nombre, String raza, short size, String vidas) {
		super();
		this.edad = edad;
		this.nombre = nombre;
		this.raza = raza;
		this.size = size;
		this.vidas = vidas;
	}

	Michi(){
		
	}
	
	public Michi (byte edad, String nombre, String raza, short size){
		this.edad=edad;
		this.nombre=nombre;
		this.raza=raza;
		this.size=size;
	}
	
	public void setEdad(byte edad) {
		this.edad=edad;
	}
	
	void setNombre(String nombre) {
		this.nombre=nombre;
	}
	
	void setRaza(String raza) {
		this.raza=raza;
	}
	
	void setSize(short size) {
		this.size=size;
	}
	
	public byte getEdad() {
		return this.edad;
	}
	String getNombre(String nombre) {
		return this.nombre;
	}
	
	public String getNombre() {
		return nombre;
	}

	public String getRaza() {
		return raza;
	}

	public short getSize() {
		return size;
	}
	
	public String datos() {
		return this.nombre + " tiene " + this.edad + " es de raza " + this.raza;
	}

	
}
