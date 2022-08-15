package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/*
		 * Un set es una coleccion que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará
		 * ES una colección no ordenada
		 */
		
//		Crear una colección hashset
		HashSet<String> names = new HashSet<String>();
		
//		Agregamos elementos con add
		
	names.add("Santiago");
	names.add("Benito");
	names.add("Santiago");
	names.add("Cory");
	names.add("Aillen");
	names.add("Benito");
	names.add("Abi");
	names.add("Santiago");
	
	System.out.println(names);
	
//	Indicamos el tamaño de la colecion
	System.out.println("Tamaño de la colección: " +names.size());
	
//	Busca un elemeto dentro de la coleccion
	boolean tieneNombre = names.contains("Santiago");
	System.out.println("¿Está Santiago? " +tieneNombre);
	
//	Remover un elemento de la colección 
	boolean eliminado = names.remove("Santiago");
	System.out.println("¿Se eliminó? " +eliminado);
	System.out.println(names);
	
//	iterando 
	names.forEach(name-> System.out.println("Participante: " +name));
	
	HashSet<Integer> edades = new HashSet<Integer>();
	edades.add(25);
	
	}

}
