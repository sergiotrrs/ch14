package org.generation;

import java.util.HashSet;

public class HashSetCollection {
	public static void main(String[] args) {
		
		/*
		 * Un set es una colección que no permite elementos
		 * duplicados
		 * Cualquier elemento dublicado no se insertará
		 * Es una colección no ordenada
		 * 
		 */
		
		//Crear una colección HashSet
		HashSet<String> names = new HashSet<String>();
		
		//Agregamso elementos con add

		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		names.add("Abi");
		names.add("Santiago");
		
		// No imprime de la misma forma que se agregan los elementos
		System.out.println(names);
		System.out.println("Tamaño de colección: "+names.size());
		
		//Buscar un elemento dentro de la colección
		boolean tieneNombre = names.contains("Santiago");
		System.out.println("Está Santiago?:  "+tieneNombre);
		
		//Remover un elemento de la colección 
		boolean eliminado = names.remove("Santiago");
		System.out.println(names);
		System.out.println("Se ha eliminado: "+eliminado);
		
		
		tieneNombre = names.contains("Santiago");
		System.out.println("Está Santiago?:  "+tieneNombre);
		
		names.forEach(name->System.out.println("Participante: "+ name)
				);
		
		HashSet<Integer> edades = new HashSet<Integer>();
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(55);
		edades.add(65);
		
		edades.forEach(edad->System.out.println("edades: "+ (edad+1)));
	}
}
