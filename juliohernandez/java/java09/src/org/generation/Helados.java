package org.generation;

public class Helados {
	private String tamaño;
	private  String color;
	private  String sabor; 
	static int Precio=15;
	private int descuento;
	
	Helados(){
		System.out.println("El precio del helado es: "+ Helados.Precio);
	}
	
	Helados (String sabor, String tamaño){
		this.sabor = sabor;
		this.tamaño = tamaño;
	}
	
	Helados ( String color){
		this.color = color;
	}
	
	void aumentarTamaño(Helados helado) {
		this.tamaño+= helado.tamaño;
		System.out.println("El tamaño de su helado ahora es de: "+helado.tamaño);
	}
	
	void combinarSabor(Helados helado1, Helados helado2) {
		this.sabor = helado1.sabor+helado2.sabor;
	}
	
	String setSabor(String sabor) {
		this.sabor = sabor;
		return this.sabor;
	}
	String setTamaño(String tamaño) {
		this.tamaño = tamaño;
		return this.tamaño;
	}
	
	String setColor(String color) {
		this.color=color;
		return this.color;
	}
	
	String getSabor() {
		return this.sabor;
	}
	
	int getPrecio() {
		return Helados.Precio;
	}
	
	String getInfo() {
		return "\nSabor: "+ this.sabor+ "\n"+
				"Color: "+this.color+ "\n"+
				"Tamaño: "+this.tamaño+ "\n"+
				"Precio :"+Helados.Precio;
				
	}
	

}
