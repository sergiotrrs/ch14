package com.gomgom.gomitas;

public class GomitaBase {
	
	private String nombre;
	private int color;
	private String sabor;
	private double precio;
	public GomitaBase(String nombre, int color, String sabor, double precio) {
		super();
		this.nombre = nombre;
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
		return "La gomita" + this.nombre + " es la mejor. ";
	
	}

	@Override
	public String toString() {
		return "GomitaBase [nombre=" + nombre + ", color=" + color + ", sabor=" + sabor + ", precio=" + precio + "]";
	}
	
	//@Override
	//public String toString() {
		//return " Mundo Gomitas " + this.nombre + super.toString();
	//}
	

}
