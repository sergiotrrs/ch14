package com.corsarios.producto;
/**
 * Clases abstractas 
 * Algo abstracto no se puede materializar
 * 
 * Si una clase tiene un método abstractto, la clase se debe declarar también como abstracta.
 * 
 * Una clase abstracta no se puede instanciar.
 * 
 * Los métodos abstractos no tienen cuerpo, terminan con ;
 * 
 * Se parece a la sobreescritura de métodos, sin embargo, debido a que el método
 * superior no ha definido el comprtamiento, se dice que la subclase implementa el método.
 * 
 * En otras palabras, las subclases serán las responsables de implementar la funcionalidad del método
 * 
 * @author mario
 */

public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected static int nModelos;
	protected double costo;
	


	private Modelo() {
		nModelos++;
	}
	
	public Modelo(int id, int capacidad, double costo) {
		this();
		this.id=id;
		this.capacidad=capacidad;
		this.costo=costo;
	}
	
	public abstract double agregarCarrito();
	public abstract boolean almacenar();
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCapacidad() {
		return capacidad;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}
	public double getCosto() {
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}
	
	
}
