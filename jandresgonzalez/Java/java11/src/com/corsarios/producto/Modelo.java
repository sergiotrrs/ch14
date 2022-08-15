package com.corsarios.producto;

public abstract class Modelo {
	
	/*
	 * clases abstractas
	 * Intangible, idea, no se materializa
	 * 
	 * Si una clase tiene un método abstracto
	 * la clase se declara abstracta
	 * 
	 * Una clase abstracta no se puede instanciar.
	 * Los métodos abstractos no tienen cuerpo. Terminan con punto y coma
	 * 
	 * Se parece a la sobreescritura de métodos. Sin embargo,
	 * debido a que el método superior no ha definido el comportamiento,
	 * se dice que la subclase implementa el método.
	 * 
	 * 
	 * En otras palabras, las subclases serán las responsables de implementar
	 * la funcionalidad del método.
	 * 
	 * @author Abuehackerman
	 * 
	 * */
	
	//Final: modificador de no acceso
	
	//-------------------
	//final y mayúsculas para hacer constantes
	//modificador final evita que sea sobreescrito
	//aplicable para métodos para evitar que se cambien
	//aplicable para clases para evitar que se herede
	public static final String EMPRESA = "Corsarios";
	//final y mayúsculas para hacer constantes
	//modificador final evita que sea sobreescrito
	//aplicable para métodos
	//------------------
	
	protected int id;
	protected int capacidad;
	protected double costo;
	protected static int contador;
	
	
	
	
	public abstract double agregarCarrito();
	public abstract  boolean almacenar();
	
	private Modelo() {
		contador++;
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
	
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;
	}
	
	public int getCapacidad() {
		return this.capacidad;
	}
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the costo
	 */
	public double getCosto() {
		return costo;
	}
	/**
	 * @param costo the costo to set
	 */
	public void setCosto(double costo) {
		this.costo = costo;
	}
	
	
	
}
