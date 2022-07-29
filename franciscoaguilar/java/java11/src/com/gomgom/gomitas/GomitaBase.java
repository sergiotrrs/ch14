package com.gomgom.gomitas;

public class GomitaBase {
	private int color;
	private String sabor;
	private String nombre;
	private double precio;
	public GomitaBase(int color, String sabor, String nombre, double precio) {
		super();
		this.color = color;
		this.sabor = sabor;
		this.nombre = nombre;
		this.precio = precio;
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
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public double getPrecio() {
		return precio;
	}
	public void setPrecio(double precio) {
		this.precio = precio;
	}
	
	public String eslogan() {
		return "La gomita "+this.nombre+" es la mejor" ;
	}
	@Override
	public String toString() {
		return "GomitaBase [color=" + color + ", sabor=" + sabor + ", nombre=" + nombre + ", precio=" + precio + "]";
	}
	
//	@Override
//	public String toString(){
//		return "Mundo gomitas "+this.nombre+ super.toString();
//	}	
//	
	
	
	

}
