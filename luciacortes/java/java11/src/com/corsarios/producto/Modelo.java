package com.corsarios.producto;
/**
 * Clases abstractas
 * Algo abstracto que no se puede materializar.
 * 
 * Si una clase tiene un método abstracto, la clse se debe
 * declarar también como abstracta.
 * 
 * Una clase abstracta no se puede instanciar.
 * 
 * Los métodos abstractos no tienen cuerpo, terminan con punto y coma.
 * Se parece a la sobreescritura de métodos, sin embargo, debido a que el método
 * superior no ha definido el comportamiento,
 * se dice que la subclase incrementa el método.
 * 
 * En otras palabras, las subclases serán las responsables de implementar
 * la funcionalidad del método.
 * 
 * @author lucia
 * 
 * La palabra final en un atributo lo hace tipo constante
 * El modificador final en un método evita que este sea sobreescrito.
 *El modificador final en una clase evita que pueda heredar.
 */

public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected int nModelos;
	protected double costo;
	protected final String EMPRESA = "Corsarios";
	
	private Modelo() {
		nModelos++;
	}
	
	/**
	 * @param id
	 * @param capacidad
	 */
	public Modelo(int id, int capacidad, double costo) {
		this();
		this.id = id;
		this.capacidad = capacidad;
		this.costo = costo;
	}
	public abstract double agregarCarrito();
	public abstract boolean almacenar();
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad= capacidad;
	}
	
	public int getCapacidad() {
		return this.capacidad;
	}

	public double getCosto() {
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}
	
}
