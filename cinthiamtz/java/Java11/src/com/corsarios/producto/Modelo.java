package com.corsarios.producto;
/**
 * Clases abstratas
 * Algo que no se puede materialziar.
 * 
 * Si una clase tiene un metodo abstracto, la clase de debe
 * devlarar también como abstrata.
 * 
 * Una clase abstrata no se puede instanciar.
 * 
 * Los métodos abstrats no tienen cuerpo, terminan con punto y coma.
 * Se parece a la sobreescritura de metodos, sin embargo,
 * debido a que el metodo superior no ha definido el comportamiento
 * se dice que la subclase implementa el metodo.
 * 
 * En otras palabras, las subclases seran las responsables de 
 * implementar la funcionalidad del metodo
 * 
 * @author cinthi
 *
 *la palabfra final es un atributo lo hace tipo constante.
 *El modificador final es un metodo evita que sea sobreescito
 *El modificador final una clase, evita que pueda ser heredado
 *Modificador de no acceso
 */
public abstract class Modelo {
//1.
	protected int id;
	protected int capacidad;	
	protected static int nModelos;
	protected double costo;
	protected final String EMPRESA ="Corsarios";
	
	private Modelo() {
		nModelos++;
	}
	
	
	public Modelo(int id, int capacidad, double costo) {
		this();
		this.id = id;
		this.capacidad = capacidad;
		this.costo =costo ;
		
	}
	
	//metodod
	public abstract double agregarCarrito();
	public abstract boolean almacenar();
	
	public void setCapacidad(int capacidad) {
		this.capacidad = capacidad;		
	}
	
	public int getCapacidad() {
		return this.capacidad;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}


	public double getCosto() {
		//double valor = Math.PI;
		return costo;
	}


	public void setCosto(double costo) {
		this.costo = costo;
	}
	
	
	
	
	
	
	
}
