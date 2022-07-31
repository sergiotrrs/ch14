package com.pokemon;

import com.entrenador.Trainer;

public class PokeBalls {
	private String nombre;
	private String color;
	private int ratio;
	private Trainer entrenador;

	/**
	 * @param nombre
	 * @param color
	 * @param ratio
	 * @param entrenador
	 */
	public PokeBalls(String nombre, String color, int ratio, Trainer entrenador) {
		this.nombre = nombre;
		this.color = color;
		this.ratio = ratio;
		this.entrenador = entrenador;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public int getRatio() {
		return ratio;
	}

	public void setRatio(int ratio) {
		this.ratio = ratio;
	}

	public Trainer getEntrenador() {
		return entrenador;
	}

	public void setEntrenador(Trainer entrenador) {
		this.entrenador = entrenador;
	}

}
