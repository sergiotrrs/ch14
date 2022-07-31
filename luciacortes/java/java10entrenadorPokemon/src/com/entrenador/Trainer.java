package com.entrenador;

import java.util.ArrayList;

import com.pokemon.Pocketmonsters;
import com.pokemon.PokeBalls;

public class Trainer {
	private String nombre;
	private int edad;
	private String equipo;
	private ArrayList <PokeBalls> pokebolas;

	/**
	 * @param nombre
	 * @param edad
	 * @param equipo
	 * @param pokemon
	 */
	public Trainer(String nombre, int edad, String equipo, ArrayList <PokeBalls> pokebolas) {
		this.nombre = nombre;
		this.edad = edad;
		this.equipo = equipo;
		this.pokebolas = pokebolas;
		
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getEquipo() {
		return equipo;
	}

	public void setEquipo(String equipo) {
		this.equipo = equipo;
	}

	public Pocketmonsters getPokemon() {
		return pokemon;
	}

	public void setPokemon(Pocketmonsters pokemon) {
		this.pokemon = pokemon;
	}

	public String datos() {
		return this.nombre + " tiene " + this.edad + " años y su equipo es " + this.equipo + " y su pokemon es "
				+ this.pokemon.getNombre();
	}

}
