package org.generation.mascota;

public class Michi {
	public class Perrito {
		private byte edad;
		private String nombre;
		private String raza;
		private short size;
		private int vidas;
		
		public Perrito(byte edad, String nombre, String raza, short size, int vidas) {
			this.edad = edad;
			this.nombre = nombre;
			this.raza = raza;
			this.size = size;
			this.vidas = vidas;
		}
		public byte getEdad() {
			return edad;
		}
		public void setEdad(byte edad) {
			this.edad = edad;
		}
		public String getNombre() {
			return nombre;
		}
		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		public String getRaza() {
			return raza;
		}
		public void setRaza(String raza) {
			this.raza = raza;
		}
		public short getSize() {
			return size;
		}
		public void setSize(short size) {
			this.size = size;
		}
		public int getVidas() {
			return vidas;
		}
		public void setVidas(int vidas) {
			this.vidas = vidas;
		}
	}
}
