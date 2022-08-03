package com.pokemon;

public class Pocketmonsters {
	private String nombre;
	private String tipo;
	private int size;

	/**
	 * @param nombre
	 * @param tipo
	 * @param size
	 */
	public Pocketmonsters(String nombre, String tipo, int size) {
		this.nombre = nombre;
		this.tipo = tipo;
		this.size = size;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}
	
	public String data() {
		return "El pokemon es "+this.nombre+" de tipo "+this.tipo+" y mide "+this.size+" cm.";
	}

}
