package com.pokemon;

import com.entrenador.Trainer;

public class PokeBalls {
	private String nombre;
	private String color;
	private int ratio;
	
	private Pocketmonsters pokemon;

	/**
	 * @param nombre
	 * @param color
	 * @param ratio
	 * @param entrenador
	 */
	public PokeBalls(String nombre, String color, int ratio,Pocketmonsters pokemon) {
		this.nombre = nombre;
		this.color = color;
		this.ratio = ratio;
		this.pokemon = pokemon;
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


}
