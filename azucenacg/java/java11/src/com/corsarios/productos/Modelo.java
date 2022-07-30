package com.corsarios.productos;

/**
 *Las clases abstractas no se pueden instanciar
 *
 *Si una clase tiene un método abstracto, la clase 
 *igual debe ser abstracta
 *
 *Los métodos abstractos no tienen cuerpo, terminan
 *con ;
 *Parecido a la sobreescritura de métodos, sin embargo,
 *como el método superior no ha definido el 
 *comportamiento 
 *se dice que la subclase implementa el método
 *
 *En otras palabras, las subclases serán las 
 *responsables de implementar la funcionalidad 
 *del método
 *El modificador final en un atributo lo hace de tipo constante
 *El modificador final en un metodo evita que sea sobreescritp
 *el modificador final en una clase evita que pueda ser heredado
 *
 */
public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected double costo;
	protected static int nModelos;
	protected final String EMPRESA="Corsarios";
	
	private Modelo() {
		nModelos++;
	}
	
	public Modelo(int id, int capacidad, double costo) {
		this();
		this.id = id;
		this.capacidad = capacidad;
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
