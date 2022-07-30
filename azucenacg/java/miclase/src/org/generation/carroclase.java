package org.generation;

public class carroclase {
	
	//Atributos de objeto 
	private String marca;
	private int año;
	private String color;
	
	//Atributos de clase 
	private static byte cilindros=4;
	private static byte llantas=4;
	private static byte numCarros;
	
	//Método constructor 
	carroclase(String marca, int año, String color){
		this.marca=marca;
		this.año=año;
		this.color=color;
		numCarros++;
	}
	//Métodos 3
	
	public void acelera(int aceleracion) {
		System.out.println
		(aceleracion+ "segundos que tarda el coche en acelerar de 0 a 100 km/h");
	}
	
	public void velocidad(int velocidad) {
		System.out.println(velocidad+ "km/h");
	}
	
	public void freno() {
		System.out.println("El "+ marca + "está frenando");
	}
	
	String datosCoche() {
		return "Marca: "+ this.marca+ ", Año: " + this.año +", Color: "+ this.color;
	}

	
	
}
