package mundo.pokemon.pruebas;

import mundo.pokemon.PokeBalls;
import mundo.pokemon.PokemonAgua;
import mundo.pokemon.PokemonFuego;

public class PokemonTest {

	public static void main(String[] args) {
		
		PokemonAgua squirtle = new PokemonAgua("Squirtle", 40, "Wartortle", 4);
		PokemonFuego charmander = new PokemonFuego ("Charmander", 40, "Charizard", 1);
		
		System.out.println(squirtle.datos());
		System.out.println(charmander.datos());
		
		PokeBalls masterball = new PokeBalls();
		System.out.println(masterball.atrapar(5));
	
		
	}

}
