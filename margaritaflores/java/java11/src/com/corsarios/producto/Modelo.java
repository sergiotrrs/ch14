package com.corsarios.producto;
/*
 * Clases abstractas
 * Algo abstracto no se puede materializar.
 * Si una clase tiene un método abstracto, la clase se debe 
 * declarar también como abstracta.
 * 
 * Una clase abstracta no se puede instanciar.
 * 
 * Los métodos abtractos no tiene cuerpo, terminan con ppunto y coma.
 * Se parece a la sobreescritura de métodos, sin embargo, 
 * debido a que el método superior no ha definido el comportamiento, 
 * se dice que la sub-clase implementa el método. 
 * 
 * En otras palabras, las subclases serán las responsables de
 * implementar la funcionalidad del método.
 * 
 * La palabra final en un atributo lo hace tipo constante
 * 
 * El modificador final es un atributo lo hace tipo constante
 * El modificador final en un método evita que este sea sobreescrito.
 * El modificador final en una clase, evita que pueda ser heredado. 
 * */

public abstract class Modelo {

	protected int id;
	protected int capacidad;
	protected static int nModelo;
	protected double costo;
	protected final String EMPRESA = "Corsario"; //COMO ES CONSTANTE CON EL FINAL SE PONE NE MAYUSCULA
	
	private Modelo() {
		nModelo++;
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
	public void setCapacidad( int capacidad) {
		this.capacidad = capacidad;
	}
	
	public int getCapacidad() {
		return this.capacidad;
	}

	public static int getnModelo() {
		return nModelo;
	}

	public static void setnModelo(int nModelo) {
		Modelo.nModelo = nModelo;
	}

	public double getCosto() {
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}
	
	
	

	
	
}
