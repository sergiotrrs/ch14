package org.generation;

import java.util.HashMap;

import org.generation.entidades.Continentes;
import org.generation.entidades.Paises;
import org.generation.relevancia.Famosos;

public class Test {

	public static void main(String[] args) {
		
		/**
		 * Actividad: 
		 * Crear un proyecto que tenga mínimo 2 paquetes
		 * Por lo menos 2 clases
		 * Relacionar las clases entre sí
		 * Realizar una clase de prueba.
		 * 			Hcer una coleccion de la clase que relaciona al resto de clases
		 * 
		 * nota: las clases deben estar encapsuladas.
		 */
		
		Continentes america = new Continentes("América", 35);
		Continentes europa = new Continentes("Europa", 50);
		Continentes asia = new Continentes("Asia", 48);
		
		Famosos checo = new Famosos("Checo Pérez", "Piloto de F1", 32);
		Famosos cr7 = new Famosos("El Bicho", "Futbolista", 37);
		Famosos gadot = new Famosos("Gal Gadot", "Actriz, Productora, Modelo, Miss Israelí, Instructora de combate, Mujer Maravilla y la lista continua...", 37);
		
		Paises mexico = new Paises("México", "mexicanos", 126_014_024, america, checo);
		Paises portugal = new Paises("Portugal", "portugueses", 10_140_568, europa, cr7);
		Paises israel = new Paises("Israel", "israelís", 9_367_000, asia, gadot);

		
		HashMap<Integer, Paises> almanaque = new HashMap<Integer, Paises>();
		
		almanaque.put(1, mexico);
		almanaque.put(2, portugal);
		almanaque.put(3, israel);
		
		
		
		for(Paises pais: almanaque.values()){
			System.out.println("Mini-Almanaque: ---> " + pais.datos());
		}

	}

}
