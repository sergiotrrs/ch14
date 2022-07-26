package org.generation;

import java.util.HashMap;

import javax.swing.plaf.synth.SynthOptionPaneUI;

public class HashMapCollection {

	public static void main(String[] args) {
		/**
		 * Una colección relaciona una clave con un valor
		 * formando una especie de tabla de datos
		 * 
		 * Sintaxis
		 * 
		 * HashMap<key, value> varName
		 */
		
		//Instanciamos una colección HashMap 
		HashMap<Integer, String> rocketR = new HashMap<Integer, String>();
		// Añadimos datos a la colección con put
		
		rocketR.put(102, "maga");
		rocketR.put(256, "Rafa");
		rocketR.put(458, "Jorge");
		rocketR.put(589, "Francisco");
		rocketR.put(859, "Lupita");
		rocketR.put(1, "Max");
		rocketR.put(10, "Beyra");
		
		
		System.out.println(rocketR);
		
		rocketR.put(1, "Miaw");
		rocketR.put(2, "Miaw");
		System.out.println(rocketR);
		
		System.out.println("N. de participantes: " + rocketR.size());
		
		
		System.out.println("Scrum Master: " + rocketR.get(256));
		
		rocketR.remove(2);
		
		rocketR.put(1, "Max");
		rocketR.put(11, "Juan");
		
		System.out.println(rocketR);
		
		
		//Como iteramos
		for(int key: rocketR.keySet()) {
			System.out.println("Salvamos al munodo de la devastación: " + rocketR.get(key));
		}
		
		
		
		
		
		
		
		
		
		
		
	}

}
