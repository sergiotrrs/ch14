package org.generation.entidades;

import org.generation.relevancia.Famosos;

public class Paises {


	private String nombre;
	private String gentilicio;
	private int poblacion;
	private Continentes continente;
	private Famosos famoso;
	
	public Paises(String nombre, String gentilicio, int poblacion, Continentes continente, Famosos famoso) {
		super();
		this.nombre = nombre;
		this.gentilicio = gentilicio;
		this.poblacion = poblacion;
		this.continente = continente;
		this.famoso = famoso;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getGentilicio() {
		return gentilicio;
	}
	public void setGenticlicio(String gentilicio) {
		this.gentilicio = gentilicio;
	}
	public int getPoblacion() {
		return poblacion;
	}
	public void setPoblacion(int poblacion) {
		this.poblacion = poblacion;
	}
	
	public String datos() {
		return "A los de " + this.nombre + " les dicen " + this.gentilicio
				+ ". Tienen una población de " + this.poblacion +
				" y están en " + this.continente.getNombre() + " el cual tiene " +  this.continente.getnPaises()
				+ " países.\nUna figura mediatica es " + this.famoso.getNombre() + " que se desempeña como " + this.famoso.getOcupacion()
				+ " y tiene " + this.famoso.getEdad() + " años de edad. \n";
	}
	
	
}
