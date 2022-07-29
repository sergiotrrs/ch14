package org.generation;

import java.util.HashMap;

public class HashMapCollection {

	public static void main(String[] args) {
		
		/**
		 * Una colección HashMAp relaciona una clave (key) con un valor,
		 * formando una especie de tabla de datos.
		 * 
		 * HashMap<key, value> varName
		 * 
		 */
		
		//Instanciamos una colección HashMap
		HashMap<Integer, String> rocketR = new HashMap<Integer, String>();
		rocketR.put(102, "Maga");
		rocketR.put(256, "Rafa");
		rocketR.put(458, "Jorge");
		rocketR.put(589, "Francisco");
		rocketR.put(859, "Lupita");
		rocketR.put(1, "Max");
		rocketR.put(10, "Beyra");
		System.out.println(rocketR);
		rocketR.put(1,"Miaw");//Reemplaza el valor donde esté la clave 1
		rocketR.put(2,"Miaw");
		System.out.println(rocketR);
		
		//Conocer el tamaño de mi colección 
		System.out.println("No. de participantes: "+ rocketR.size());
		
		//Obtenemos un elemento indicando la llave (key) y método get
		System.out.println("Scrum Master: "+rocketR.get(256));
		
		//Remover elemento con el método remove e indicamos la llave
		rocketR.remove(2);
		System.out.println(rocketR);
		rocketR.put(1,"Max");
		rocketR.put(11,"Juan Carlos");
		
		for(int key:rocketR.keySet()) {
			System.out.println("Salvamos al mundo de la devastación: "+ rocketR.get(key));
		}
		
		
		
	}

}
