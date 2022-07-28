package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// Un set es una coleccion que no permite elementos duplicados, cualquier
		// elemento duplicado no se insertara
		// Es una coleccion no ordenada
		// Crear una coleccion hashSet

		HashSet<String> names = new HashSet<String>();

		// Agregamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		names.add("Abi");
		names.add("Santiago");
		System.out.println(names);
		// Tamaño de la coleccion
		System.out.println("Tamaño de la coleccion: " + names.size());

		// Buscar un elemento dentro de la coleccion
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("Esta Santiago?: " + tieneNombre);
		;

		// remover un elemento de la coleccion
		boolean eliminado = names.remove("Santiago");
		System.out.println("Se elimino?: " + eliminado);
		System.out.println(names);

		names.forEach(name -> System.out.println("Participante: " + name));

		HashSet<Integer> edades = new HashSet<Integer>();
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(65);
		edades.forEach(edad->System.out.println("Edades "+ (edad+1)));

	}

}
