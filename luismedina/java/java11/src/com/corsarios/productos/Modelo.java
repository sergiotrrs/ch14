package com.corsarios.productos;

/**
 * Clases abstractas. Algo Abstracto es algo que no se puede materializar
 * 
 * Si una clase tiene un metodo abstracto la clase de debe declarar tambien como
 * abstracta.
 *
 * Una clase abstracta no se puede instanciar.
 * 
 * Los metodos abstractos no tienen cuerpo, terminan con punto y coma ;
 * 
 * Se parece a la sobreescritura de metodos, sin embargo debido, a que el metodo
 * superior no ha definido el conportamiento se dice que la subclase implementa
 * el metodo.
 * 
 * En otras palabras las subclases seran las responsable sde implementar la
 * funcionalidad del metodo.
 * 
 * @author luisd
 *
 *         La palabra final en un atributo lo hace tipo constante.
 *
 *         El modificador final en un metodo evita que este sea sobreescrito.
 *
 *         El modificador final en una aclase, evita que pueda ser heredado
 */
public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected static int nModelos;
	protected double costo;
	protected final String EMPRESA = "Corsarios";

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

	public double getCosto() {
		double valor = Math.PI;
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}

	public int getCapacidad() {
		return this.capacidad;
	}

}
