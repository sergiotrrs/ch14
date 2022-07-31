package com.personas;

import com.accesorios.AccesoriosHombre;

public class Persona {
	private int edad;
	private String nombre;
	private int estatura;
	private String musica;
//	private AccesoriosHombre calzado;
//	private AccesoriosHombre pantalon;

	/**
	 * 
	 * @param edad
	 * @param nombre
	 * @param estatura
	 * @param musica
	 * @param calzado
	 * @param pantalon
	 * @param pantalon
	 * @param calzado
	 */
	public Persona(int edad, String nombre, int estatura, String musica) {
		this.edad = edad;
		this.nombre = nombre;
		this.estatura = estatura;
		this.musica = musica;
//		this.calzado = calzado;
//		this.pantalon = pantalon;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEstatura() {
		return estatura;
	}

	public void setEstatura(int estatura) {
		this.estatura = estatura;
	}

	public String getMusica() {
		return musica;
	}

	public void setMusica(String musica) {
		this.musica = musica;
	}

	public String datos() {
		return this.nombre + " tiene " + this.edad + " años, mide " + this.estatura + " cm, " + " le gusta el genero "
				+ this.musica;
	}

}
