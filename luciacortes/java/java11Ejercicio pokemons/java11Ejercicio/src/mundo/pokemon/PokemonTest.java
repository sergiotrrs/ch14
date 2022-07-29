package mundo.pokemon;

import java.util.ArrayList;

import com.gomgom.gomitas.GomitaBase;

public class PokemonTest {

	public static void main(String[] args) {

		PokemonAgua squirttle = new PokemonAgua("Squirttle", 40, "Wartortle", 4);

//		System.out.println(squirttle.datos());
//		System.out.println(PokeBalls.REGION);

		PokemonFuego charmander = new PokemonFuego("Charmander", 50, "Charizardo", 1);
//		System.out.println(charmander.datos());

		PokeBalls bola = new PokeBalls();
//		System.out.println(bola.atraparPokemones(5, false));
//		
//		System.out.println(bola.batallas(4, true));
//		
//		System.out.println(bola.pokebolas(10, false));

//		System.out.println(bola.tipo("masterball"));

		ArrayList<Pokemon> lista = new ArrayList<Pokemon>();
		lista.add(charmander);
		lista.add(squirttle);

		lista.forEach(data -> System.out.println(
				"Soy " + data.getNombre() + " mido " + data.getTamaño() + " cm, evoluciono en " + data.getEvolucion()
						+ " y he ganado " + data.getCantidad() + " batallas"));

//		ArrayList<GomitaBase> listaGomitas = new ArrayList<GomitaBase>();
//		listaGomitas.add(mangoM);

	}

}
