package com.corsarios.producto;
/**
 * clases abstractas
 * Algo abstracto no se puede materializar.
 * 
 * Si una clase tiene un método abstracto, la clase se debe
 * declarar también abstracta.
 * 
 * Una clase abstracta no se puede instanciar.
 * 
 * Los métodos abstractos no tienen cuerpo, terminan con punto y coma.
 * Se parecen a la sobreescritura de métodos, sin embargo,
 * debido a que el método superior no ha definido el comportamiento,
 * se dice que la subclase implementa el método.
 * 
 * En otras palabras, las subclases serán las responsables de 
 * implementar la funcionalidad del método.
 * 
 * 
 * @author enriq
 *
 * El modificador final en un atributo lo hace de tipo constante.
 * El modificador final en un método evita que este sea sobreescrito.
 * El modificador final en una clase, evita que pueda ser heredado.
 * 
 */
public abstract class Modelo {
	protected int id;
	protected int capacidad;
	static int nModelos;
	protected double costo;
	protected final String empresa = "corsarios"; 
	
	private Modelo() {
		nModelos++;
	}
	
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
		this.capacidad = capacidad;
	}
	public int getCapacidad() {
		return this.capacidad;
	}
	public double getCosto() {
		double valor = Math.PI; 
		return costo;
	}
	public void setCosto(double costo) {
		this.costo = costo;
	}
	
}
