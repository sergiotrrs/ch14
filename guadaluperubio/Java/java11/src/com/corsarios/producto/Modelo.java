package com.corsarios.producto;
/*
 * CLASES ABSTRACTAS
 * Algo asbtracto no se puede materizalizar
 * 
 * Si una clase tiene un método abstracto, la clase se debe declarar tambien como abstracta.
 * 
 * Una clase abstracta no se puede instanciar.
 * Los métodos abstractos no tiene cuerpo, terminan con punto y coma.
 * se  parece a la sobreescritura de métodos, sin embargo, debido a que el
 * método superior no ha definido el comportamiento, se dice que la subclase
 * implementa el método.
 * 
 * En otras palabras, las subclases serán ls responsables de implementar
 * la funcionalidad del método.
 * 
 * El modificador final en un atributo lo hace tipo constante.
 * El modifcador final es un método evita que este sea sobreescrito.
 * el modifical fnal es una clase, evita que pueda ser heredado.
 * 
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
		super();
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
