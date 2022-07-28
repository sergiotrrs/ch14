package com.corsarios.producto;


	/*
	 * Clases Abstractas
	 * Algo que no se puede materializar
	 * 
	 * Si una clase tiene un método abstracto 
	 * la clase se debe declarar también como abstracta.
	 *  
	 *  Una clase abstracta no se puede instanciar.
	 *  
	 *  Los métodos abstractos no tienen cuerpo 
	 * terminan con ; 
	 * 
	 * Se parece a la sobrescritura de métodos, sin embargo debido a que 
	 * el método superior no ha definido el comportamiento
	 * se dice qu la subclase inplementa el método.
	 * 
	 * En otras palabras las sublcases serán las 
	 * responsables de implementar la funcionalidad del método.
	 *
	 *la palabra final en un atributo lo hace tipo constante
	 *El modificador final en un método evita que un método sea sobreescrito
	 *El modificador final en una clase evita que pueda ser heredado
	 *Final es un modificador de no acceso 
	 *
	 * 
	 */
public abstract class Modelo {
	protected int id;
	protected int capacidad;
	protected static int nModelos;
	protected  double costo;
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
	public int getCapacidad() {
		return capacidad;
	}
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}

	public double getCosto() {
		//double valor = Math.PI;
		return costo;
	}

	public void setCosto(double costo) {
		this.costo = costo;
	}
	
	
	
	
	

}
