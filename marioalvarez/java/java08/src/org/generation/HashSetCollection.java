package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		/*
		 * Un set es una colleción que no permite elementos duplicados
		 * Cualquier elemento duplicado no se insertará
		 *colección no ordenada(No guarda orden de ingreso)
		 * */
		
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
		
		//Indicamos el tamaño de la colección
		System.out.println("Tamaño de la coleccion: "+names.size());
		
		//Buscar un elemento dentro de la coleccion
		boolean tieneNombre=names.contains("Santiago");
		System.out.println("Estaá Santiago? "+ tieneNombre);
		
		System.out.println(names);
		//Remover un elemento de la coleccion
		boolean eliminado= names.remove("Santiago");
		
		names.forEach(name->{
			System.out.println("Participantes:"+name);
		});
		
		
		
		

	}

}
