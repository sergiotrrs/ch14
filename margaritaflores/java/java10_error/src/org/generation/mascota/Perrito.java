//Estrucura básica de hacer una clase
package org.generation.mascota;
//Paso 1
public class Perrito {
	 private byte edad;
	 private String nombre;
	 private String raza;
	 private short size;
	//Paso 2 Constructor
	//Paso 3
	public Perrito(byte edad, String nombre, String raza, short size){
		this.edad =edad;
		this.nombre = nombre;
		this.raza = raza;
		this.size = size;
		//Modificador con private Paso 4
	}
	 public Perrito(int i, String nombre2, String raza2, int j) {
		// TODO Auto-generated constructor stub
	}
	//Paso 5. Escribir Setter(void,this), and getter(Dato, return)
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
	
	public void setRaza (String raza) {
		this.raza = raza;
	}
	
	public String getRaza() {
		return this.raza;
	}
	
	public void setSize (short size) {
		this.size = size;
	}
	
	public short getSize() {
		return this.size;
	}
	
	public String datos() {
		return this.nombre + " tiene " + this.edad + " años " + " es de raza " + this.raza + " mide " + this.size + " cm ";
	}
	
}
