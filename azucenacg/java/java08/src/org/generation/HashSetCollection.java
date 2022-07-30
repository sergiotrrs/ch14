package org.generation;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		/**
		 * Un set es una colección que no permite elementos
		 * duplicados 
		 * cualquier elemento duplicado no se insertará
		 * Es una colección no ordenada 
		 * 
		 * Desorden y no duplicados 
		 */
		
		//Crear una colección hashSet
		HashSet<String> names= new HashSet<String>();
		
		//agregamos elementos con add
		names.add("Santiago");
		names.add("Benito");
		names.add("Ailen");
		names.add("Cori");
		names.add("Benito");
		names.add("Santiago");
		//no podemos duplicar elementos
		//no interesa mucho la lógica en la cual
		//se imprimen los elementos
		//lo importante es que no se dupliquen
		System.out.println(names);
		
		//Indicamos el tamaño de la colección
		System.out.println("Tamaño de la colección: "+ names.size());
		
		//Buscar un elemento dentro de la colección 
		boolean tieneNombre =names.contains("Santiago");
		System.out.println("¿Está Santiago?: "+ tieneNombre);
		
		//Remover un elemento de la colección 
		//aqui no indicamos indice porque es una lista no ordenada
		boolean eliminado = names.remove("Santiago");
		System.out.println("¿Se eliminó?: "+ eliminado);
		System.out.println("nuevo names: "+ names);
		
		names.forEach(nombre ->{
			System.out.println("foreach->: " + nombre);
		});
		
		names.forEach(name -> System.out.println("Participante: " + name));
		
		HashSet<Integer> edades = new HashSet <Integer>();
		edades.add(25);
		edades.add(45);
		edades.add(55);
		edades.add(55);
		edades.add(65);
		edades.forEach(edad-> System.out.println("edades " + (edad +1)));

		
		//el foreach nos da el tipo de dato que especificamos
		//al inicio del hash set:
		//HashSet<String> names
	}
}
