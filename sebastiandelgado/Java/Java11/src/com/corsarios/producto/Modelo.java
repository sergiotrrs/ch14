package com.corsarios.producto;

/*
 * Clases abstractas
 * Algo abstracto no se puede materializar
 * es una idea pero no es algo establecido.
 * 
 * Si una clase tiene un método abstracto, la clase se debe
 * declarar también como abstracta.
 * 
 * Una clase abstracta no se puede instanciar
 * 
 * Los métodos abstractos no tienen cuerpo. Terminan con ;
 * Se parece a la sobre escritura de métodos, sin embargo,
 * debido a que el método superior no ha definido el comportamiento
 * se dice que la subclase incrementa el método
 * 
 * En otras palabras, las subclases serán las reponsables de implementar 
 * la funcionalidad del método.
 * 
 * 
 * Lapalabra final en un atributo lo hace tipo constante
 */
public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected static int nModelos;
	protected double costo;
	protected final String EMPRESA = "Corsarios";
	
	public Modelo() {
		nModelos++;
	}
		
	public Modelo(int id, int capacidad, double costo) {
		this();
		this.id = id;
		this.capacidad = capacidad;
		this.costo =costo;
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
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}

	
}