package com.gomgom.gomitas;

public class GomitaBase {
	private String nombre;
	private int color; //RGB
	private String sabor;
	private double precio;
	public static int countGomitas;
	
	public GomitaBase() {
		countGomitas++;
	}
	
	public GomitaBase(String nombre) {
		this(); // Se llama al constructor vacio // esto evita que el contador lo tenga que poner en cada constructor
		this.nombre = nombre;
	}
	
	public GomitaBase(String nombre, int color, String sabor, double precio) {
		this(nombre); // Se llama al constructor vacio // esto evita que el contador lo tenga que poner en cada constructor
		//this.nombre = nombre;
		this.color = color;
		this.sabor = sabor;
		this.precio = precio;
	}

	


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public int getColor() {
		return color;
	}


	public void setColor(int color) {
		this.color = color;
	}


	public String getSabor() {
		return sabor;
	}


	public void setSabor(String sabor) {
		this.sabor = sabor;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}
	
	public String eslogan() {
		return "La gomita " +this.nombre+" es de las mejores gomitas"; 
	}


	@Override
	public String toString() {
		return "GomitaBase [nombre=" + nombre + ", color=" + color + ", sabor=" + sabor + ", precio=" + precio + "]";
	}
	
	
	
	

}
