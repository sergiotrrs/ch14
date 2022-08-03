package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*
		 * Un set es una colección que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará
		 */
		
		//Crear una colección Hashset
		HashSet<String> names = new HashSet<String>();
		
		//Agregamos elementos con add
		
		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		
		System.out.println(names);
		
		//Indicamos el tamaño de la colección
		System.out.println("Tamaño de la colección: " + names.size());
		
		//Buscar un elemento dentro de la colección
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("Está Santiago?: " + tieneNombre);
		
		//Remover un elemento de la colección con remove
		boolean eliminado = names.remove("Santiago");
		System.out.println("Se eliminó?: " + eliminado);
		System.out.println(names);
		
		
	}

}
