package org.generation;

import java.util.HashMap;
import java.util.HashSet;

public class HashColletion {

	public static void main(String[] args) {
		/**
		 * Un set es una colección de elemneto duplicados
		 * Cualquier elemento duplicado no se insertara
		 */
		
		//Crear una colección hasSet
		HashSet<String> names = new HashSet<String>();
		
		//Agregamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Aileen");
		names.add("Cori");
		names.add("Benito"); //Este elemento no se agrega porque esta repetido
		names.add("Abby");
		names.add("Santiago");
		
		System.out.println(names);
		
		//Indicamos el tamaño de la colección
		System.out.println("Tamaño de la colección: " + names.size());
		
		//Buscar un elmento de la colección
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("¿Esta Santiago?: " + tieneNombre);
		
		//Remover un elemento de la colección con remove
		boolean eliminado = names.remove("Santiago");
		System.out.println("¿Se elimno?: " + eliminado);
		System.out.println(names);
		
		names.forEach(name -> System.out.println("Participante: " + name));
		
		HashSet<Integer> edades = new HashSet <Integer>();
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(55);
		edades.add(65);
		edades.forEach(edad-> System.out.println("edades " + (edad +1)));

		/**
		 * Una colección HashMAp relaciona una clave (key) con un valor,
		 * formando una especie de tabla de datos.
		 * 
		 * HashMap<key, value> varName
		 * 
		 */
		
		//Instanciamos una colección HashMap
		HashMap<Integer, String> rocketR = new HashMap<Integer, String>();
		
		//Añadimos datos a la colección
		rocketR.put(102, "Maga");
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
		
		//Conocer el tamaño de mi colección
		System.out.println("N. de paticipantes: " + rocketR.size());
		
		//Obtenemos un elemento indicando la lleve (key) y método get
		System.out.println("Scrum Master: " + rocketR.get(256));
		
		//Remover un elemento con el método remove e indicamos la llave (key)
		rocketR.remove(2);
		rocketR.put(1, "Max");
		rocketR.put(1, "Juan");
		System.out.println(rocketR);
		
		for(int key: rocketR.keySet()) {
			System.out.println("Salvamos al mundo: " + rocketR.get(key));
		}
	}

}
