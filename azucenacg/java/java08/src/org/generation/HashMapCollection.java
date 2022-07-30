package org.generation;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		/**
		 * Una colección HashMap relaciona una clave 
		 * (key) con un valor, formando una especie
		 * de tabla de datos 
		 * 
		 * HashMap<key, value>varName
		 * 
		 */
		
		//Instaciamos
		HashMap<Integer, String> rocketR = new HashMap <Integer, String>();
		
		//Añadimos datos a la colección con put 
		rocketR.put(102, "Maga");
		rocketR.put(256, "Rafa");
		rocketR.put(458, "Jorge");
		rocketR.put(589, "Francisco");
		rocketR.put(859, "Lupita");
		rocketR.put(1, "Max");
		rocketR.put(10, "Beyra");
		
		System.out.println(rocketR);
		rocketR.put(1, "Miaw");
		System.out.println(rocketR);
		rocketR.put(2, "Miaw");
		System.out.println(rocketR);
		
		//Conocer el tamaño de mi colección
		System.out.println("No. de participantes: "+ rocketR.size());
		
		//Obtenemos un elemento, indicando la llave (key) y método get
		System.out.println("Scrum Master: "+ rocketR.get(256));
		
		//Remover un elemento con el metodo remove e indicamos la llave
		rocketR.remove(2);
		System.out.println(rocketR);
		rocketR.put(1, "Max");
		rocketR.put(11, "Juan C");
		System.out.println(rocketR);
		
		for(int key:rocketR.keySet()) {
			System.out.println("equipo: "+ rocketR.get(key));
		}
		
		//El que te da más rápido un dato es HashMap
		
		
	}
}
