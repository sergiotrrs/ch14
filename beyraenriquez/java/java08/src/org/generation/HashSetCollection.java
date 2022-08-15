package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		/**
		 * Un set es una colección que no permite elementos duplicados
		 * Cuaquier elemento duplicado no se insertará.
		 * Es una colección no ordenada.
		 */
		
		//Crear una colección hashSet
		HashSet<String> names = new HashSet<String>();
		
		//Agregamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		names.add("Abi");
		names.add("Santiago");
		
		System.out.println(names);
		
		//Duplicamos el tamaño de la colección
		System.out.println("Tamaño de la colección: " + names.size());
		
		//Buscar un elemento dentro de la colección
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("¿Está Santiago? " + tieneNombre);
		
		//Remover u elemento de la colección con remove
		boolean eliminado = names.remove("Santiago");
		System.out.println("¿Está Santiago? " + eliminado);
		System.out.println(names);
		
		names.forEach(name-> System.out.println("Participante: " + name));
		
		HashSet<Integer> edades = new HashSet<Integer>();
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(55);
		edades.add(65);
		edades.forEach(edad->System.out.println("edades " + (edad+1)));
		
		
	}

}
