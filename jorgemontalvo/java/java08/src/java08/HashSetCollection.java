package java08;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		/**
		 * Un set es una colecion que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará
		 * Es una colección no ordenada
		 */
		
		//Crear una colección hashSet
		HashSet<String> names = new HashSet<String>();
		
		//Agregamos elementos con add y los elementos duplicados no se imprimen
		names.add("Santiago");
		names.add("Benito");
		names.add("Aileen");
		names.add("Cori");
		names.add("Benito");
		names.add("Abi");
		names.add("Santiago");
		
		
		System.out.println(names);
		
		//Indicamos el tamañi de la coleccion
		System.out.println("Tamaño de la coleccion: " + names.size());
		
		//Buscar un elemento dentro de la coleccion
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("Está Santiago?: " + tieneNombre);
		
		//Remover un elemento de la colección
		boolean eliminado = names.remove("Santiago");
		System.out.println("Se eliminó? " + eliminado);
		System.out.println(names);
		
		names.forEach(name -> System.out.println("Participantes: " + name));
		
		HashSet<Integer> edades = new HashSet<Integer>();
		
		edades.add(55);
		edades.add(25);
		edades.add(58);
		edades.add(17);
		edades.add(15);
		edades.add(28);
		
		edades.forEach(edad-> System.out.println("edades " + (edad +1)));


	}

}
