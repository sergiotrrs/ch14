package org.generation;

public class Carro {
	private String modelo;
	private String color;
	private String marca;
	private String placas;
	private int anio;
	private String estado;

	static int nCarros;
	static String nomAgencia = "Motors";
	

	Carro(){
		System.out.println("Uno nuevo carro ha entrado a la agencia");
		nCarros++;
	}
	Carro(String modelo, String marca, int anio){
		this.modelo = modelo;
		this.marca = marca;
		this.anio = anio;
		//this.placas = estado.substring(0);
		nCarros++;
	}

	String nombreCarro() {
		//this hace referencia al objeto que lo invoca
		return " con modelo: " + this.modelo + " de la marca: " + this.marca + " del año " + this.anio; 
	}
}
